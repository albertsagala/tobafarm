-- Cloudflare D1 migration. Student access codes are provisioned individually by the instructor.
CREATE TABLE IF NOT EXISTS quiz_roster (
 quiz TEXT NOT NULL CHECK(quiz IN ('ospf','eigrp','cybersecurity')),
 student_id TEXT NOT NULL,
 student_name TEXT NOT NULL,
 code_hash TEXT NOT NULL,
 created_at TEXT NOT NULL DEFAULT (datetime('now')),
 PRIMARY KEY(quiz,student_id),
 UNIQUE(quiz,code_hash)
);
CREATE TABLE IF NOT EXISTS quiz_attempts (
 quiz TEXT NOT NULL,
 student_id TEXT NOT NULL,
 student_name TEXT NOT NULL,
 status TEXT NOT NULL CHECK(status IN ('in_progress','completed')),
 started_at TEXT NOT NULL,
 submitted_at TEXT,
 start_ip TEXT NOT NULL,
 submit_ip TEXT,
 user_agent TEXT,
 score INTEGER,
 total INTEGER,
 answers_json TEXT,
 PRIMARY KEY(quiz,student_id),
 FOREIGN KEY (quiz,student_id) REFERENCES quiz_roster(quiz,student_id)
);
CREATE TABLE IF NOT EXISTS quiz_audit (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 quiz TEXT NOT NULL,
 student_id TEXT NOT NULL,
 event TEXT NOT NULL,
 ip TEXT NOT NULL,
 user_agent TEXT,
 at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_quiz_audit_quiz_at ON quiz_audit(quiz,at);

CREATE TABLE IF NOT EXISTS quiz_answer_log (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 quiz TEXT NOT NULL,
 student_id TEXT NOT NULL,
 question_index INTEGER NOT NULL,
 answer_index INTEGER NOT NULL,
 ip TEXT NOT NULL,
 at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_quiz_answer_log ON quiz_answer_log(quiz,student_id,at);
CREATE TABLE IF NOT EXISTS quiz_current_answers (
 quiz TEXT NOT NULL,
 student_id TEXT NOT NULL,
 question_index INTEGER NOT NULL,
 answer_index INTEGER NOT NULL,
 PRIMARY KEY(quiz,student_id,question_index)
);
