import { banks, digest, reply, safeId, sourceIp, validQuiz, type Env } from "../../_lib/quiz";
type Ctx={request:Request;env:Env};
export async function onRequestPost({request,env}:Ctx):Promise<Response>{
 if(!env.QUIZ_DB)return reply({error:"Database kuis tidak tersedia"},503);
 let b:any;try{b=await request.json()}catch{return reply({error:"Invalid JSON"},400)}
 const quiz=b.quiz,studentId=safeId(b.studentId),code=typeof b.accessCode==="string"?b.accessCode.trim():"";
 const i=b.questionIndex,j=b.answerIndex;
 if(!validQuiz(quiz)||! /^[A-Z0-9._-]{4,32}$/.test(studentId)||code.length<16||code.length>128||!Number.isInteger(i)||i<0||i>=banks[quiz].length||!Number.isInteger(j)||j<0||j>3)return reply({error:"Parameter tidak valid"},400);
 const registered=await env.QUIZ_DB.prepare("SELECT 1 FROM quiz_roster WHERE quiz=? AND student_id=? AND code_hash=?").bind(quiz,studentId,await digest(code)).first();
 if(!registered)return reply({error:"Akses ditolak"},403);
 const ip=sourceIp(request);
 // Condition on active attempt ensures a submitted quiz cannot receive new answers.
 const written=await env.QUIZ_DB.prepare("INSERT INTO quiz_answer_log (quiz,student_id,question_index,answer_index,ip,at) SELECT ?,?,?,?,?,datetime('now') WHERE EXISTS (SELECT 1 FROM quiz_attempts WHERE quiz=? AND student_id=? AND status='in_progress') RETURNING id").bind(quiz,studentId,i,j,ip,quiz,studentId).first();
 if(!written)return reply({error:"Percobaan sudah dikunci"},409);
 await env.QUIZ_DB.prepare("INSERT INTO quiz_current_answers (quiz,student_id,question_index,answer_index) VALUES (?,?,?,?) ON CONFLICT(quiz,student_id,question_index) DO UPDATE SET answer_index=excluded.answer_index").bind(quiz,studentId,i,j).run();
 return reply({saved:true});
}
