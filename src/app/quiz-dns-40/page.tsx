"use client";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { QUESTIONS } from "./questions";
type Receipt = { name:string; nim:string; correct:number; score:number; submittedAt:string };
export default function QuizDNS40(){
 const [name,setName]=useState(""); const [nim,setNim]=useState("");
 const [started,setStarted]=useState(false);const [deadline,setDeadline]=useState(0);
 const [now,setNow]=useState(0);const [answers,setAnswers]=useState<Record<number,number|boolean>>({});
 const [receipt,setReceipt]=useState<Receipt|null>(null);
 const answersRef=useRef(answers);answersRef.current=answers;
 const submitted=useRef(false);
 const remaining=Math.max(0,Math.ceil((deadline-now)/1000));
 function start(e:FormEvent<HTMLFormElement>){e.preventDefault();if(name.trim().length<3||nim.trim().length<3)return;submitted.current=false;setAnswers({});setReceipt(null);setDeadline(Date.now()+30*60*1000);setNow(Date.now());setStarted(true);}
 function finish(){if(submitted.current)return;submitted.current=true;let correct=0;for(const q of QUESTIONS){if(answersRef.current[q.id]===q.answer)correct++;}
 setReceipt({name:name.trim(),nim:nim.trim(),correct,score:Math.round(correct/QUESTIONS.length*10000)/100,submittedAt:new Date().toISOString()});}
 useEffect(()=>{if(!started||receipt)return;const timer=window.setInterval(()=>setNow(Date.now()),1000);return()=>window.clearInterval(timer)},[started,receipt]);
 useEffect(()=>{if(started&&!receipt&&deadline>0&&remaining===0)finish()},[started,receipt,deadline,remaining]);
 return <main className="mx-auto max-w-3xl px-4 py-8 space-y-5"><h1 className="text-3xl font-bold">Kuis DNS &amp; Internetworking</h1><p>40 soal · 30 pilihan ganda (A–E) · 10 benar/salah · Waktu 30 menit</p>
 {!started?<form onSubmit={start} className="space-y-4"><label className="block">Nama Lengkap<input className="block w-full border rounded p-3 text-black" required minLength={3} value={name} onChange={e=>setName(e.target.value)}/></label><label className="block">NIM<input className="block w-full border rounded p-3 text-black" required minLength={3} value={nim} onChange={e=>setNim(e.target.value)}/></label><button type="submit" className="w-full bg-blue-700 text-white rounded p-3">Mulai Ujian</button></form>
 :receipt?<section className="border-2 rounded-xl bg-white text-black p-6 space-y-3"><h2 className="text-2xl font-bold">BUKTI HASIL KUIS</h2><p>DNS &amp; Internetworking — 40 soal</p><p><strong>Nama:</strong> {receipt.name}</p><p><strong>NIM:</strong> {receipt.nim}</p><p><strong>Nilai:</strong> {receipt.score} / 100</p><p><strong>Benar:</strong> {receipt.correct} / 40</p><p><strong>Selesai:</strong> {new Date(receipt.submittedAt).toLocaleString("id-ID",{timeZone:"Asia/Jakarta",dateStyle:"full",timeStyle:"medium"})} WIB</p><p className="font-bold">Screenshot hasil ini dan kirim ke WhatsApp Group kelas.</p><p className="text-sm">Hasil tidak disimpan. Jangan tutup halaman sebelum screenshot.</p></section>
 :<><div className="sticky top-0 z-10 bg-white text-black border rounded p-3 font-bold">Sisa waktu: {Math.floor(remaining/60)}:{String(remaining%60).padStart(2,"0")}</div>{QUESTIONS.map(q=><fieldset key={q.id} className="border rounded p-4 space-y-2"><legend className="font-semibold">{q.id}. {q.question}</legend>{(q.type==="tf"?["Benar","Salah"]:q.options).map((option,i)=><label key={i} className="flex items-start gap-2 py-1"><input type="radio" name={"q"+q.id} checked={answers[q.id]===(q.type==="tf"?i===0:i)} onChange={()=>setAnswers(old=>({...old,[q.id]:q.type==="tf"?i===0:i}))}/><span>{q.type==="mc"?String.fromCharCode(65+i)+". ":""}{option}</span></label>)}</fieldset>)}<button type="button" onClick={finish} className="w-full rounded bg-blue-700 text-white p-4 font-semibold">Kirim Jawaban &amp; Lihat Nilai</button></>}
 </main>;
}
