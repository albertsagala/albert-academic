import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import notes from "@/lib/notes.json";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Research Notes | Albert Sagala", alternates: { canonical: "/notes/" } };
export default function Notes() {
 return <><Header/><main id="main" className="mx-auto min-h-screen max-w-4xl px-5 pb-20 pt-32"><p className="text-teal">Literature & engineering</p><h1 className="font-display mt-3 text-5xl text-forest-deep">Research Notes</h1><p className="mt-5 text-muted">Ulasan sumber eksternal dan sintesis metodologis. Hasil penelitian pihak lain dibedakan dari riset fasilitas.</p><div className="mt-10 space-y-6">{[...notes].sort((a,b)=>b.date.localeCompare(a.date)).map(n=><article key={n.slug} className="rounded-3xl border border-[var(--line)] bg-white p-7"><p className="text-sm text-teal"><time dateTime={n.date}>{n.date}</time> · {n.category}</p><h2 className="font-display mt-3 text-2xl"><a href={`/notes/${n.slug}/`}>{n.title}</a></h2><p className="mt-4 text-muted">{n.summary}</p><a href={`/notes/${n.slug}/`} className="mt-5 inline-block text-forest underline">Baca catatan →</a></article>)}</div></main><Footer/></>;
}
