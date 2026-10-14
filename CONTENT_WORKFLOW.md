# Research Notes publishing workflow

Repository: albertsagala/albert-academic. Production branch: main.
Cloudflare Pages project: albert-academic-git. Build: npm run build. Output: out.

Add a unique article to src/lib/notes.json, preserving all existing entries and the schema. Fields: slug, title, date (Asia/Jakarta publication date), category, summary, sections [{heading, paragraphs}], sources [{label,url}]. The index, home cards, individual static pages and sitemap derive from this file.

Read AGENTS.md and the installed Next.js docs before code changes. Use primary sources, verify bibliography and DOI, distinguish simulation from real experiments, and label editorial synthesis. Never invent personal research results, publications, or credentials. Prefer at least two relevant scientific sources. Skip publication if sources add no meaningful insight or duplicate an existing note.

Run npm ci, npm run build, and npm exec tsc -- --noEmit. Verify generated article HTML, references and sitemap. Publish an atomic commit to main through authorized GitHub tools, preserving concurrent changes. Never force-push. Poll deployment status and public article URL; report commit and actual verification state. Do not claim a live deployment from a GitHub commit alone. If deployment fails, diagnose it and report the blocker.
