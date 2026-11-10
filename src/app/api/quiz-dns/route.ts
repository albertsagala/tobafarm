import { NextRequest, NextResponse } from "next/server";
import { QUESTIONS } from "@/app/quiz-dns/questions";
import { createHmac, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";
const TOKEN = process.env.DNS_QUIZ_TOKEN;
const SECRET = process.env.DNS_QUIZ_SESSION_SECRET;
const sign = (value: string) => createHmac("sha256", SECRET!).update(value).digest("hex");
function authorized(req: NextRequest) {
  if (!SECRET) return false;
  const raw = req.cookies.get("dns_quiz_session")?.value || "";
  const idx = raw.lastIndexOf(".");
  if (idx < 0) return false;
  const data = raw.slice(0,idx), mac = raw.slice(idx+1);
  const expected = sign(data);
  if (!/^[a-f0-9]{64}$/.test(mac) || !timingSafeEqual(Buffer.from(mac),Buffer.from(expected))) return false;
  try { const session = JSON.parse(Buffer.from(data,"base64url").toString()); return typeof session.exp === "number" && Date.now() < session.exp && typeof session.nim === "string"; } catch {return false;}
}
export async function POST(req: NextRequest) {
  if (!TOKEN || !SECRET) return NextResponse.json({error:"Konfigurasi token/session server belum tersedia."},{status:503});
  const body = await req.json().catch(()=>null);
  if (!body || typeof body !== "object") return NextResponse.json({error:"Data tidak valid"},{status:400});
  if (body.action === "start") {
    const name=String(body.name||"").trim(),nim=String(body.nim||"").trim(),token=String(body.token||"");
    if (name.length<3 || nim.length<3 || nim.length>40) return NextResponse.json({error:"Nama dan NIM wajib diisi."},{status:400});
    const a=Buffer.from(token),b=Buffer.from(TOKEN);
    if(a.length!==b.length || !timingSafeEqual(a,b)) return NextResponse.json({error:"Token tidak valid."},{status:403});
    const session={name,nim,exp:Date.now()+30*60*1000};
    const data=Buffer.from(JSON.stringify(session)).toString("base64url");
    const res=NextResponse.json({questions:QUESTIONS.map(q=>({id:q.id,type:q.type,question:q.question,...("options" in q?{options:q.options}:{})})),expiresAt:session.exp});
    res.cookies.set("dns_quiz_session",data+"."+sign(data),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/api/quiz-dns",maxAge:1800});
    return res;
  }
  if (body.action==="submit") {
    if (!authorized(req)) return NextResponse.json({error:"Sesi ujian kedaluwarsa atau tidak valid."},{status:403});
    const answers=body.answers||{};
    let correct=0;
    for(const q of QUESTIONS) {
      const given=answers[q.id];
      if ("options" in q) { if (given===q.answer) correct++; }
      else if (given===q.answer) correct++;
    }
    // IMPORTANT: no durable persistence until D1 binding/database is configured.
    const res=NextResponse.json({score:Math.round(correct/QUESTIONS.length*10000)/100,correct,total:QUESTIONS.length,persisted:false});
    res.cookies.delete("dns_quiz_session");
    return res;
  }
  return NextResponse.json({error:"Aksi tidak dikenal"},{status:400});
}
