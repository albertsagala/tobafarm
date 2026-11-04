import { banks, digest, reply, safeId, sourceIp, validQuiz, type Env } from "../../_lib/quiz";
type Ctx={request:Request;env:Env};
export async function onRequestPost({request,env}:Ctx):Promise<Response>{
 if(!env.QUIZ_DB)return reply({error:"Database kuis belum dikonfigurasi."},503);
 let b:any;try{b=await request.json()}catch{return reply({error:"JSON tidak valid"},400)}
 const quiz=b.quiz, studentId=safeId(b.studentId), code=typeof b.accessCode==="string"?b.accessCode.trim():"";
 if(!validQuiz(quiz)||! /^[A-Z0-9._-]{4,32}$/.test(studentId)||code.length<16||code.length>128)return reply({error:"Identitas/kuis tidak valid"},400);
 const codeHash=await digest(code);
 const registration=await env.QUIZ_DB.prepare("SELECT student_id FROM quiz_roster WHERE quiz=? AND student_id=? AND code_hash=?").bind(quiz,studentId,codeHash).first();
 if(!registration)return reply({error:"Akses ditolak."},403);
 const bank=banks[quiz], ans=b.answers;
 if(!Array.isArray(ans)||ans.length!==bank.length||ans.some(x=>!Number.isInteger(x)||x<0||x>3))return reply({error:"Seluruh jawaban harus dipilih sebelum dikumpulkan."},400);
 const score=bank.reduce((n,q,i)=>n+(ans[i]===q[2]?1:0),0);
 const ip=sourceIp(request), ua=(request.headers.get("User-Agent")||"").slice(0,350);
 // Atomic conditional update: only the first successful submit changes in_progress -> completed.
 const changed=await env.QUIZ_DB.prepare("UPDATE quiz_attempts SET status='completed',submitted_at=datetime('now'),submit_ip=?,score=?,total=?,answers_json=? WHERE quiz=? AND student_id=? AND status='in_progress' RETURNING started_at,submitted_at,score,total").bind(ip,score,bank.length,JSON.stringify(ans),quiz,studentId).first<any>();
 if(!changed){
  const existing=await env.QUIZ_DB.prepare("SELECT status,score,total,submitted_at FROM quiz_attempts WHERE quiz=? AND student_id=?").bind(quiz,studentId).first<any>();
  await env.QUIZ_DB.prepare("INSERT INTO quiz_audit (quiz,student_id,event,ip,user_agent,at) VALUES (?,?,?,?,?,datetime('now'))").bind(quiz,studentId,"submit_denied",ip,ua).run();
  return reply({error:existing?.status==="completed"?"Kuis sudah dikumpulkan; hanya satu percobaan diizinkan.":"Belum ada sesi pengerjaan yang sah.",status:existing?.status||"missing"},409);
 }
 await env.QUIZ_DB.prepare("INSERT INTO quiz_audit (quiz,student_id,event,ip,user_agent,at) VALUES (?,?,?,?,?,datetime('now'))").bind(quiz,studentId,"submitted",ip,ua).run();
 return reply({status:"completed",score,total:bank.length,submittedAt:changed.submitted_at,ip,review:bank.map((q,i)=>({correct:q[2],explanation:q[3]}))});
}
