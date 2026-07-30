import { AdSlot } from "./AdSlot";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Section = { heading: string; paragraphs: string[] };
export function StaticPage({ eyebrow, title, description, sections }: { eyebrow: string; title: string; description: string; sections: Section[] }) {
  return <main className="static-page"><header className="static-header"><SiteHeader/><div className="static-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div></header><section className="static-content">{sections.map(section=><article className="card static-card" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(text=><p key={text}>{text}</p>)}</article>)}<AdSlot placement="static-bottom"/></section><SiteFooter/></main>;
}

