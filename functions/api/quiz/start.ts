import { banks, bankPublic, digest, reply, safeId, safeName, sourceIp, validQuiz, type Env } from "../../_lib/quiz";
type Ctx = { request: Request; env: Env };
export async function onRequestPost({request,env}:Ctx):Promise<Response>{
 if (!env.QUIZ_DB) return reply({error:"Database kuis belum dikonfigurasi. Hubungi dosen."},503);
 let b:any;try{b=await request.json()}catch{return reply({error:"JSON tidak valid"},400)}
 const quiz=b.quiz, studentId=safeId(b.studentId), name=safeName(b.name), code=typeof b.accessCode==="string"?b.accessCode.trim():"";
 if(!validQuiz(quiz)||! /^[A-Z0-9._-]{4,32}$/.test(studentId)||name.length<3||name.length>120||code.length<16||code.length>128)return reply({error:"Kuis, NIM, nama, atau kode akses tidak valid."},400);
 const codeHash=await digest(code);
 const registration=await env.QUIZ_DB.prepare("SELECT student_id, student_name FROM quiz_roster WHERE quiz=? AND student_id=? AND code_hash=?").bind(quiz,studentId,codeHash).first<{student_id:string;student_name:string}>();
 if(!registration)return reply({error:"Kode akses tidak cocok dengan NIM dan kuis ini."},403);
 if(registration.student_name.toLowerCase()!==name.toLowerCase())return reply({error:"Nama tidak cocok dengan daftar peserta."},403);
 const ip=sourceIp(request), ua=(request.headers.get("User-Agent")||"").slice(0,350);
 // A single unique (quiz, student_id) row is enforced by D1, including concurrent requests.
 await env.QUIZ_DB.prepare("INSERT OR IGNORE INTO quiz_attempts (quiz,student_id,student_name,status,started_at,start_ip,user_agent) VALUES (?,?,?,'in_progress',datetime('now'),?,?)").bind(quiz,studentId,registration.student_name,ip,ua).run();
 const row=await env.QUIZ_DB.prepare("SELECT status,started_at,submitted_at,score,total,start_ip,submit_ip FROM quiz_attempts WHERE quiz=? AND student_id=?").bind(quiz,studentId).first<any>();
 if(!row)return reply({error:"Gagal menyimpan sesi."},500);
 await env.QUIZ_DB.prepare("INSERT INTO quiz_audit (quiz,student_id,event,ip,user_agent,at) VALUES (?,?,?,?,?,datetime('now'))").bind(quiz,studentId,row.status==="completed"?"repeat_denied":"access",ip,ua).run();
 if(row.status==="completed")return reply({error:"Percobaan untuk kuis ini sudah dikumpulkan. Tidak diperbolehkan mengulang.",status:"completed",startedAt:row.started_at,submittedAt:row.submitted_at,score:row.score,total:row.total,startIp:row.start_ip,submitIp:row.submit_ip},409);
 return reply({status:"in_progress",quiz,studentId,name:registration.student_name,startedAt:row.started_at,ip:row.start_ip,questions:bankPublic(quiz),total:banks[quiz].length});
}
