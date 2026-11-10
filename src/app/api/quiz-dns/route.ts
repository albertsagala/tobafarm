import { NextRequest, NextResponse } from "next/server";
import { QUESTIONS } from "@/app/quiz-dns/questions";
export const runtime = "nodejs";
export async function POST(req: NextRequest) {
  const body = await req.json().catch(()=>null);
  if (!body || typeof body !== "object") return NextResponse.json({error:"Data tidak valid"},{status:400});
  const name=String(body.name||"").trim(), nim=String(body.nim||"").trim();
  if (name.length<3 || nim.length<3 || nim.length>40) return NextResponse.json({error:"Nama lengkap dan NIM wajib diisi."},{status:400});
  if (body.action === "start") return NextResponse.json({questions:QUESTIONS.map(q=>({id:q.id,type:q.type,question:q.question,...("options" in q?{options:q.options}:{})})),expiresAt:Date.now()+30*60*1000});
  if (body.action === "submit") {
    const answers=body.answers && typeof body.answers==="object" ? body.answers : {};
    let correct=0;
    for(const q of QUESTIONS) if(answers[q.id]===q.answer) correct++;
    return NextResponse.json({name,nim,submittedAt:new Date().toISOString(),score:Math.round(correct/QUESTIONS.length*10000)/100,correct,total:QUESTIONS.length,persisted:false});
  }
  return NextResponse.json({error:"Aksi tidak dikenal"},{status:400});
}
