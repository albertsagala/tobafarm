# Single-attempt quizzes — Cloudflare Pages + D1

## Status and security boundary

The OSPF, EIGRP, and Cybersecurity quizzes use a **Cloudflare Pages Functions** backend.
The browser cannot score itself or submit more than once for each (quiz, student_id).
A unique D1 primary key and conditional SQL UPDATE enforce this even under simultaneous submissions.
Students enter their **registered NIM, full name, and individual cryptographically random access code**.
A valid code can resume an unfinished attempt (including saved answers); it cannot create a second attempt.
Audit records include IP (from Cloudflare's CF-Connecting-IP), user-agent, access/start, each changed answer, submit time, and denied reattempts.

**Setup is REQUIRED.** This repository does not contain a D1 database binding or student roster. Without one the server fails closed (HTTP 503); this is intentional. A code commit alone is not a working deployment.

## Initial setup (Cloudflare)

1. In Cloudflare Dashboard > Workers & Pages > D1, create a D1 database, e.g. `tobafarm_quizzes`.
2. In your **Pages project settings > Bindings**, add a D1 database binding named **`QUIZ_DB`**, pointing to that database. Bind for **production and preview** as appropriate; ensure Pages Functions are deployed.
3. Apply `database/quiz-schema.sql` to the database using D1 Console or Wrangler:
   `npx wrangler d1 execute tobafarm_quizzes --remote --file=database/quiz-schema.sql`.
4. Create a strong secret named **`QUIZ_ADMIN_TOKEN`** in your Pages project secrets / variables (not in GitHub). At least 32 random bytes.
5. Redeploy the Pages project and check POST `/api/quiz/start` returns HTTP 400 for malformed JSON rather than 404/503. HTTP 503 means missing D1 binding.
6. Store a CSV **locally**, not in this public repository, with columns `student_id,student_name`. For each quiz run:
   `python3 scripts/generate-quiz-roster.py --input path/to/students.csv --quiz ospf --out-dir private/semester-2026-ospf`
   Repeat for `eigrp` and `cybersecurity` using separate directories.
7. Import generated **private** `*-roster.sql` into D1 via Cloudflare D1 Console or:
   `npx wrangler d1 execute tobafarm_quizzes --remote --file=private/semester-2026-ospf/ospf-roster.sql`.
   **Never commit the generated SQL or codes.** Hand each access code privately to the matching student.
8. Test with instructor-controlled dummy identity before opening to students: start, select answers, refresh and resume, submit, and verify another start and submission are rejected.
9. Retrieve logs using a trusted admin terminal, NOT browser JavaScript:
   `curl -H "Authorization: Bearer $QUIZ_ADMIN_TOKEN" "https://www.tobasmartfarming.com/api/quiz/admin/logs?quiz=ospf"`
   This returns up to 500 attempt rows and 1,000 audit rows. For full logs query D1 directly, e.g. `SELECT * FROM quiz_answer_log ORDER BY id DESC`.

## Privacy and limitations

- **An IP address does not uniquely identify a student.** Campus NAT, proxies, and dynamic addresses make IP-based blocking unfair and unreliable. IP is kept as audit metadata only.
- Identity proof is possession of a privately issued student-specific access code, **not** a campus SSO login. Shared or stolen codes allow impersonation. For high-stakes exams integrate campus SSO and verified student identity; use authenticated Cloudflare Access or institutional OIDC with validated JWTs.
- **This GitHub repository is publicly accessible. The answer banks stored in the server-side source are therefore visible in GitHub** even though they are not sent to browsers before submission. Do not reuse these questions for secure exams. For high-stakes exams store questions and answer keys in a private D1 bank or private repository, and authenticate students using SSO.
- Provide a privacy notice to students, restrict instructor access to logs, retain records only under institutional policy, and define deletion/export procedures. IP addresses and NIM are personal data.
- This implementation records started/changed-answer/submitted events; reopening an unfinished attempt with the same NIM and code is allowed, but a completed attempt is permanently locked unless the instructor explicitly intervenes at the database level.
- **Never wipe or re-import active roster rows with conflicting codes**; doing so would lock out students. Generated codes must be distributed through a secure channel.
- On static-only hosting without Pages Functions, /api/quiz/* won't exist and quizzes deliberately cannot begin.
