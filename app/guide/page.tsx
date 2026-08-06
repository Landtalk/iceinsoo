import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { sortedGuideArticles } from "../../guide/articles";

export const metadata: Metadata = {
  title: "무인아이스크림 운영 노하우 | 인수연구소",
  description: "실제 운영 경험을 바탕으로 무인아이스크림 창업과 기존 매장 인수에 필요한 수익, 관리와 시설 정보를 정리했습니다.",
  alternates: { canonical: "/guide" },
  openGraph: { title: "무인아이스크림 운영 노하우", description: "창업과 인수 전에 알아야 할 실제 무인아이스크림 운영 정보를 확인하세요.", url: "/guide", type: "website" },
};

export default function GuidePage() {
  return <main className="static-page guide-library">
    <header className="static-header guide-library-header"><SiteHeader/><div className="static-hero guide-library-hero"><p className="eyebrow">OPERATIONS LIBRARY</p><h1>무인아이스크림 운영 노하우</h1><p>실제 운영 경험을 바탕으로 무인아이스크림 창업과 인수에 도움이 되는 정보를 정리했습니다.</p></div></header>
    <section className="guide-library-content" aria-label="운영 노하우 최신 글">
      <div className="guide-library-intro"><div><span>ALL ARTICLES</span><strong>{sortedGuideArticles.length}개의 운영 기록</strong></div><p>최신 글부터 순서대로 표시합니다.</p></div>
      <div className="guide-article-grid">{sortedGuideArticles.map((article, index) => <article className="guide-list-card card" key={article.slug}><div><span>{String(index + 1).padStart(2, "0")}</span><time dateTime={article.publishedAt}>{article.publishedAt.replaceAll("-", ".")}</time></div><h2><a href={`/guide/${article.slug}`}>{article.title}</a></h2><p>{article.excerpt}</p><a className="guide-read-link" href={`/guide/${article.slug}`} aria-label={`${article.title} 읽기`}>글 읽기 <b aria-hidden="true">→</b></a></article>)}</div>
    </section>
    <SiteFooter/>
  </main>;
}
