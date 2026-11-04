#!/usr/bin/env python3
"""Generate private, per-student access codes and D1 imports. Never commit generated files."""
import argparse
import csv
import hashlib
import pathlib
import secrets
import sys

QUIZZES = ("ospf", "eigrp", "cybersecurity")
def sql(s):
    return "'" + s.replace("'", "''") + "'"

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--input", required=True, help="CSV with columns student_id,student_name")
    p.add_argument("--quiz", required=True, choices=QUIZZES)
    p.add_argument("--out-dir", required=True)
    args = p.parse_args()
    folder = pathlib.Path(args.out_dir)
    folder.mkdir(parents=True, exist_ok=True)
    # Refuse overwriting previously issued codes, which would invalidate active access.
    out_csv = folder / f"{args.quiz}-access-codes.csv"
    out_sql = folder / f"{args.quiz}-roster.sql"
    if out_csv.exists() or out_sql.exists():
        sys.exit("Output already exists; choose a fresh directory and safeguard old codes.")
    with open(args.input, newline="", encoding="utf-8-sig") as f:
        roster = list(csv.DictReader(f))
    if not roster or not {"student_id", "student_name"} <= set(roster[0]):
        sys.exit("Input must have columns student_id,student_name and at least one row")
    seen = set()
    items = []
    for row in roster:
        sid = row["student_id"].strip().upper()
        name = row["student_name"].strip()
        if not (4 <= len(sid) <= 32 and all(c.isalnum() or c in "._-" for c in sid) and len(name) >= 3 and len(name) <= 120):
            sys.exit("Invalid ID or name in roster")
        if sid in seen:
            sys.exit("Duplicate student_id: " + sid)
        seen.add(sid)
        code = secrets.token_urlsafe(24)
        items.append((sid, name, code, hashlib.sha256(code.encode()).hexdigest()))
    # mode 0600 permissions for local private exports on POSIX
    with open(out_csv, "x", newline="", encoding="utf-8") as f:
        w = csv.writer(f);w.writerow(["quiz","student_id","student_name","access_code"])
        for sid,name,code,h in items:
            w.writerow([args.quiz,sid,name,code])
    with open(out_sql, "x", encoding="utf-8") as f:
        f.write("-- PRIVATE ROSTER: access-code SHA-256 hashes only. Do not commit or publish.\n")
        for sid,name,code,h in items:
            f.write(f"INSERT INTO quiz_roster (quiz,student_id,student_name,code_hash) VALUES ({sql(args.quiz)},{sql(sid)},{sql(name)},{sql(h)});\n")
    for f in (out_csv,out_sql):
        try:f.chmod(0o600)
        except OSError:pass
    print(f"Generated {len(items)} students for {args.quiz}. Keep both outputs PRIVATE.")
    print("Codes:",out_csv)
    print("D1 import:",out_sql)

if __name__ == "__main__":
    main()
