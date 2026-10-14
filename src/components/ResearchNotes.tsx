import notes from "@/lib/notes.json";
export function ResearchNotes() {
  return <section id="notes" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-teal">Research Notes</p>
      <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">Literature, engineering, and research practice</h2>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted">Catatan berbahasa Indonesia yang menelaah sumber ilmiah, batas bukti, dan implikasinya untuk engineering.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">{[...notes].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6).map(note=><article key={note.slug} className="rounded-3xl border border-[var(--line)] bg-white p-7">
        <p className="text-sm text-teal"><time dateTime={note.date}>{note.date}</time> · {note.category}</p>
        <h3 className="font-display mt-3 text-2xl text-forest-deep"><a href={`/notes/${note.slug}/`}>{note.title}</a></h3>
        <p className="mt-4 leading-relaxed text-muted">{note.summary}</p>
        <a className="mt-5 inline-block font-medium text-forest underline underline-offset-4" href={`/notes/${note.slug}/`}>Baca catatan →</a>
      </article>)}</div>
      <a href="/notes/" className="mt-8 inline-block text-forest underline underline-offset-4">Semua catatan →</a>
    </div>
  </section>;
}
