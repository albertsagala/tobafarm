import { reply, type Env } from "../../../_lib/quiz";
type Ctx={request:Request;env:Env};
export async function onRequestGet({request,env}:Ctx):Promise<Response>{
 const expected=env.QUIZ_ADMIN_TOKEN;
 if(!expected||request.headers.get("Authorization")!==`Bearer ${expected}`)return reply({error:"Unauthorized"},401);
 if(!env.QUIZ_DB)return reply({error:"Database unavailable"},503);
 const url=new URL(request.url);const quiz=url.searchParams.get("quiz");
 if(quiz&&!["ospf","eigrp","cybersecurity"].includes(quiz))return reply({error:"Invalid quiz"},400);
 const attempts=await env.QUIZ_DB.prepare("SELECT quiz,student_id,student_name,status,started_at,submitted_at,start_ip,submit_ip,score,total,answers_json,user_agent FROM quiz_attempts WHERE (? IS NULL OR quiz=?) ORDER BY started_at DESC LIMIT 500").bind(quiz,quiz).all();
 const audit=await env.QUIZ_DB.prepare("SELECT quiz,student_id,event,ip,user_agent,at FROM quiz_audit WHERE (? IS NULL OR quiz=?) ORDER BY id DESC LIMIT 1000").bind(quiz,quiz).all();
 const answerChanges=await env.QUIZ_DB.prepare("SELECT quiz,student_id,question_index,answer_index,ip,at FROM quiz_answer_log WHERE (? IS NULL OR quiz=?) ORDER BY id DESC LIMIT 2000").bind(quiz,quiz).all();
 return reply({attempts:attempts.results,audit:audit.results,answerChanges:answerChanges.results,limitations:"Maximum 500 attempts, 1000 audit events, and 2000 answer-change events per request"});
}
