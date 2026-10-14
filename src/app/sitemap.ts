import type { MetadataRoute } from "next";
import { person } from "@/lib/site";
import notes from "@/lib/notes.json";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
 const latest = [...notes].sort((a,b)=>b.date.localeCompare(a.date))[0]?.date ?? "2026-10-11";
 return [{url:person.url,lastModified:new Date(latest),changeFrequency:"weekly",priority:1},{url:`${person.url}/notes/`,lastModified:new Date(latest),changeFrequency:"weekly",priority:0.8},...notes.map(n=>({url:`${person.url}/notes/${n.slug}/`,lastModified:new Date(n.date),priority:0.7}))];
}
