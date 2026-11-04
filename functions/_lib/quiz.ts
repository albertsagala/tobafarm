import ospf from "./ospf-bank.json";
import eigrp from "./eigrp-bank.json";
import cybersecurity from "./cybersecurity-bank.json";

export type BankQuestion = [string, string[], number, string];
export type QuizId = "ospf" | "eigrp" | "cybersecurity";
export const banks: Record<QuizId, BankQuestion[]> = { ospf, eigrp, cybersecurity };
export function validQuiz(q: unknown): q is QuizId { return q === "ospf" || q === "eigrp" || q === "cybersecurity"; }
export type Env = { QUIZ_DB: D1Database; QUIZ_ADMIN_TOKEN?: string };
export function reply(value: unknown, status = 200): Response { return Response.json(value, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } }); }
export async function digest(s: string): Promise<string> {
 const bytes = new TextEncoder().encode(s);
 return [...new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))].map(x=>x.toString(16).padStart(2,"0")).join("");
}
export function sourceIp(request: Request): string {
 // Only trust this when deployed behind Cloudflare Pages; direct non-Cloudflare deployments must not use it as evidence.
 return request.headers.get("CF-Connecting-IP") || "unavailable";
}
export function safeId(input: unknown): string { return typeof input === "string" ? input.trim().toUpperCase() : ""; }
export function safeName(input: unknown): string { return typeof input === "string" ? input.trim() : ""; }
export function bankPublic(quiz: QuizId) { return banks[quiz].map((q,i)=>({ id:i, question:q[0], options:q[1] })); }
export function parseBody(req: Request): Promise<any> { return req.json(); }
