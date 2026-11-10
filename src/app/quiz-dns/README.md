# DNS & Internetworking Quiz
60 questions, 30-minute limit, server-side answer key and token verification.

Configure environment variables in the deployment:
- DNS_QUIZ_TOKEN (instructor-selected exact token; do not commit to GitHub)
- DNS_QUIZ_SESSION_SECRET (random long signing secret)

Important limitations before releasing to students:
1. The current API calculates grades but DOES NOT PERSIST submissions. Connect Cloudflare D1 and store name, NIM, answers, grade, submitted_at before enabling a real graded examination.
2. Cloudflare Pages Next.js deployment must support Node.js route handlers or be adapted to Cloudflare Workers-compatible runtime. Verify the build and API on the actual Cloudflare deployment.
3. Add server-side one-time submission and enforce expiry against signed session; client timer alone is insufficient.
4. Shuffle options server-side while preserving answer mapping if anti-collusion is required.
Do not distribute the link as an official exam until these requirements are implemented and tested.
