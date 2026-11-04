"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type QuizId = "ospf" | "eigrp" | "cybersecurity";
type Question = { id:number; question:string; options:string[] };
type Review = {correct:number; explanation:string};
const config={
 ospf:{title:"Latihan 30 Soal Routing Protocol OSPF",tag:"INTERNETWORKING · OSPF",en:"/teaching/ospf-quiz/",id:"/id/materi-ajar/kuis-ospf/"},
 eigrp:{title:"Latihan 30 Soal Routing Protocol EIGRP",tag:"INTERNETWORKING · EIGRP",en:"/teaching/eigrp-quiz/",id:"/id/materi-ajar/kuis-eigrp/"},
 cybersecurity:{title:"Latihan 40 Soal Keamanan Siber dan Keamanan Jaringan",tag:"CYBERSECURITY · WEEK 1–7",en:"/teaching/cybersecurity-quiz/",id:"/id/materi-ajar/kuis-keamanan-siber/"},
};
export function SingleAttemptQuiz({quiz,locale}:{quiz:QuizId;locale:"en"|"id"}){
 const c=config[quiz];
 const [name,setName]=useState(""); const [studentId,setStudentId]=useState("");const [accessCode,setAccessCode]=useState("");
 const [questions,setQuestions]=useState<Question[]>([]);const [answers,setAnswers]=useState<Record<number,number>>({});
 const [review,setReview]=useState<Review[]>([]);const [score,setScore]=useState<number|null>(null);
 const [phase,setPhase]=useState<"login"|"working"|"completed"|"locked">("login");
 const [startedAt,setStartedAt]=useState("");const [submittedAt,setSubmittedAt]=useState("");const [ip,setIp]=useState("");
 const [busy,setBusy]=useState(false);const [error,setError]=useState("");
 const done=Object.keys(answers).length;
 const begin=async(e:React.FormEvent)=>{e.preventDefault();setBusy(true);setError("");
 try {const r=await fetch("/api/quiz/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({quiz,studentId,name,accessCode}),cache:"no-store"});
 const d=await r.json(); if(!r.ok){if(d.status==="completed"){setPhase("locked");setStartedAt(d.startedAt||"");setSubmittedAt(d.submittedAt||"");setIp(d.startIp||"");setScore(d.score??null);}setError(d.error||"Permintaan ditolak");return;}
 setQuestions(d.questions);setStartedAt(d.startedAt);setIp(d.ip);setPhase("working");
 }catch{setError("Tidak dapat menghubungi server kuis. Coba kembali saat koneksi pulih.");}finally{setBusy(false)}};
 const submit=async()=>{if(done!==questions.length||busy)return;setBusy(true);setError("");
 try{const r=await fetch("/api/quiz/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({quiz,studentId,accessCode,answers:questions.map((_,i)=>answers[i])}),cache:"no-store"});
 const d=await r.json();if(!r.ok){setError(d.error||"Pengumpulan gagal");if(d.status==="completed")setPhase("locked");return;}
 setScore(d.score);setReview(d.review);setSubmittedAt(d.submittedAt);setIp(d.ip||ip);setPhase("completed");window.scrollTo({top:0,behavior:"smooth"});
 }catch{setError("Gagal mengirim jawaban. Periksa koneksi; jangan menutup halaman sampai status berhasil.");}finally{setBusy(false)}};
 return <><Header locale={locale} enHref={c.en} idHref={c.id}/><main className="min-h-screen bg-navy px-5 pb-24 pt-32 text-cream md:px-8 md:pt-40"><div className="mx-auto max-w-4xl">
 <a className="text-sm text-teal-bright hover:underline" href={locale==="id"?"/id/materi-ajar/":"/teaching/"}>← Kembali ke Materi Kuliah</a>
 <header className="mt-7 rounded-3xl border border-teal/25 bg-white/[0.04] p-7 md:p-10"><p className="text-sm font-semibold uppercase tracking-widest text-teal-bright">{c.tag}</p><h1 className="mt-3 font-serif text-4xl md:text-5xl">{c.title}</h1><p className="mt-5 leading-7 text-cream/75">Satu percobaan resmi per mahasiswa untuk setiap kuis. Harus menggunakan NIM, nama, dan kode akses individual dari dosen. IP, waktu pengerjaan, serta hasil dikirim ke server untuk audit. Jangan bagikan kode akses kepada orang lain.</p>
 {phase!=="login"&&<div className="mt-5 rounded-xl border border-white/15 bg-navy/60 p-4 text-sm leading-7"><div>Identitas: <strong>{studentId.toUpperCase()} · {name}</strong></div><div>IP tercatat: <strong>{ip||"Tidak tersedia"}</strong></div><div>Mulai (UTC): {startedAt||"—"}</div>{submittedAt&&<div>Selesai (UTC): {submittedAt}</div>}{score!==null&&<div className="font-bold text-teal-bright">Nilai: {score}/{quiz==="cybersecurity"?40:30} ({Math.round(100*score/(quiz==="cybersecurity"?40:30))}%)</div>}</div>}
 </header>
 {error&&<div role="alert" className="mt-5 rounded-xl border border-amber-500/50 bg-amber-500/10 p-4 text-sm text-amber-100">{error}</div>}
 {phase==="login"&&<form onSubmit={begin} className="mt-7 space-y-4 rounded-2xl border border-white/15 bg-white/[0.04] p-6"><h2 className="text-xl font-semibold">Identifikasi peserta</h2><label className="block text-sm">NIM / ID mahasiswa<input value={studentId} onChange={e=>setStudentId(e.target.value)} autoComplete="username" required maxLength={32} className="mt-2 w-full rounded-xl border border-white/20 bg-navy p-3 text-cream" placeholder="NIM yang terdaftar"/></label>
 <label className="block text-sm">Nama lengkap<input value={name} onChange={e=>setName(e.target.value)} required maxLength={120} className="mt-2 w-full rounded-xl border border-white/20 bg-navy p-3 text-cream"/></label>
 <label className="block text-sm">Kode akses individual<input type="password" value={accessCode} onChange={e=>setAccessCode(e.target.value)} required autoComplete="off" className="mt-2 w-full rounded-xl border border-white/20 bg-navy p-3 text-cream"/></label>
 <p className="text-sm text-cream/65">Dengan memulai kuis, Anda menyetujui pencatatan NIM, nama, IP, user-agent, waktu, jawaban, dan nilai untuk keperluan pembelajaran dan audit. Hubungi dosen terkait permintaan akses atau koreksi data.</p>
 <button type="submit" disabled={busy} className="rounded-full bg-teal px-6 py-3 font-semibold text-navy disabled:opacity-50">{busy?"Memeriksa identitas...":"Verifikasi & Mulai Sekali"}</button></form>}
 {phase==="locked"&&<div className="mt-7 rounded-2xl border border-white/15 p-6"><h2 className="text-2xl font-semibold">Percobaan sudah digunakan</h2><p className="mt-2 text-cream/75">Kuis ini telah dikumpulkan dengan identitas tersebut. Soal dan tombol ulang tidak tersedia. Hubungi dosen jika perlu pemeriksaan catatan.</p></div>}
 {(phase==="working"||phase==="completed")&&<><div className="mt-7 rounded-2xl border border-white/15 p-5"><div className="flex justify-between text-sm"><span>Terjawab: {done}/{questions.length}</span><span>{phase==="completed"?"Selesai":"Pengerjaan aktif"}</span></div><div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-teal" style={{width:`${100*done/questions.length}%`}}/></div></div>
 <div className="mt-6 space-y-5">{questions.map((q,i)=><section key={q.id} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-7"><div className="flex items-start gap-3"><span className="rounded-full bg-teal/15 px-3 py-1 text-xs font-semibold text-teal-bright">{i+1}</span><h2 className="text-lg font-semibold">{q.question}</h2></div>
 <fieldset disabled={phase!=="working"} className="mt-5 space-y-2"><legend className="sr-only">Soal {i+1}</legend>{q.options.map((opt,j)=><label key={j} className={`flex items-start gap-3 rounded-xl border p-3 text-sm leading-6 ${phase==="completed"&&review[i]?.correct===j?"border-teal/70 bg-teal/10":phase==="completed"&&answers[i]===j&&review[i]?.correct!==j?"border-red-400/70 bg-red-400/10":answers[i]===j?"border-teal/70 bg-teal/10":"border-white/10"}`}><input type="radio" className="mt-1 accent-teal" checked={answers[i]===j} onChange={()=>setAnswers(a=>({...a,[i]:j}))}/><span><strong className="mr-2">{String.fromCharCode(65+j)}.</strong>{opt}</span></label>)}</fieldset>
 {phase==="completed"&&review[i]&&<div className="mt-4 rounded-xl border border-white/10 p-4 text-sm leading-6"><strong>{answers[i]===review[i].correct?"Benar":"Belum tepat"} · Kunci: {String.fromCharCode(65+review[i].correct)}</strong><p className="mt-1 text-cream/75">{review[i].explanation}</p></div>}</section>)}</div>
 <div className="mt-8 rounded-2xl border border-white/15 p-6">{phase==="working"?<><p className="mb-4 text-sm text-cream/70">Pastikan semua jawaban lengkap. Setelah berhasil dikumpulkan, kuis terkunci permanen untuk identitas ini.</p><button disabled={busy||done!==questions.length} onClick={submit} className="rounded-full bg-teal px-6 py-3 font-semibold text-navy disabled:opacity-40">{busy?"Menyimpan...":"Kumpulkan Jawaban (Final)"}</button></>:<p className="font-semibold text-teal-bright">Jawaban berhasil dicatat di server. Percobaan telah dikunci.</p>}</div></>}
 </div></main><Footer locale={locale}/></>;
}
