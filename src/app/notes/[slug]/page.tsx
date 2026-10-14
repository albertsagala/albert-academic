import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import notes from "@/lib/notes.json";
export const dynamicParams = false;
export function generateStaticParams() { return notes.map(n=>({slug:n.slug})); }
type Props = { params: Promise<{slug:string}> };
export async function generateMetadata({params}:Props): Promise<Metadata> {
 const {slug}=await params; const note=notes.find(n=>n.slug===slug); if(!note) return {};
 return {title: `${note.title} | Albert Sagala`, description:note.summary, alternates:{canonical:`/notes/${slug}/`}};
}
export default async function Note({params}:Props) {
 const {slug}=await params; const n=notes.find(n=>n.slug===slug); if(!n) notFound();
 return <><Header/><main id="main" className="mx-auto max-w-3xl px-5 pb-20 pt-32"><a href="/notes/" className="text-teal underline">← Research Notes</a><article lang="id"><p className="mt-8 text-sm text-teal"><time dateTime={n.date}>{n.date}</time> · {n.category}</p><h1 className="font-display mt-4 text-4xl leading-tight text-forest-deep md:text-5xl">{n.title}</h1><p className="mt-6 text-xl leading-relaxed text-muted">{n.summary}</p><p className="mt-5 text-sm text-muted">Catatan literatur · Sumber ditelaah pada {n.date}</p>{n.sections.map(s=><section key={s.heading} className="mt-10"><h2 className="font-display text-2xl text-forest-deep">{s.heading}</h2>{s.paragraphs.map((p,i)=><p key={i} className="mt-4 text-[17px] leading-relaxed text-muted">{p}</p>)}</section>)}<section className="mt-12 rounded-3xl border border-[var(--line)] bg-white p-6"><h2 className="font-display text-2xl">Referensi</h2><ol className="mt-5 space-y-5">{n.sources.map(s=><li key={s.url}><a href={s.url} className="break-words text-forest underline underline-offset-4">{s.label}</a></li>)}</ol></section></article></main><Footer/></>;
}
