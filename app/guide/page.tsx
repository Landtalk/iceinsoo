import type { Metadata } from "next";
import { InfoSections } from "../../components/InfoSections";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { sortedGuideArticles } from "../../guide/articles";
import { BRAND_NAME, SITE_URL, SMART_STORE_EBOOK_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "무인아이스크림 운영 노하우 | 인수연구소",
  description: "실제 운영 경험을 바탕으로 무인아이스크림 창업과 기존 매장 인수에 필요한 수익, 관리와 시설 정보를 정리했습니다.",
  alternates: { canonical: "/guide/" },
  openGraph: { title: "무인아이스크림 운영 노하우", description: "권리금, 순이익, 관리시간과 상품 구성처럼 매장 인수 전에 확인할 내용을 정리했습니다.", url: "/guide/", type: "website" },
};

export default function GuidePage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "무인아이스크림 운영 노하우",
    url: `${SITE_URL}/guide/`,
    isPartOf: { "@type": "WebSite", name: BRAND_NAME, url: SITE_URL },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sortedGuideArticles.map((article, index) => ({ "@type": "ListItem", position: index + 1, name: article.title, url: `${SITE_URL}/guide/${article.slug}/` })),
    },
  };

  return <main className="static-page guide-library">
    <header className="static-header guide-library-header"><SiteHeader/><div className="static-hero guide-library-hero"><p className="eyebrow">OPERATIONS LIBRARY</p><h1>무인아이스크림 운영 노하우</h1><p>실제 운영 경험을 바탕으로 무인아이스크림 창업과 인수에 도움이 되는 정보를 정리했습니다.</p><strong>운영 노하우 10편</strong><small>권리금, 순이익, 관리시간과 상품 구성처럼<br/>매장 인수 전 꼭 확인해야 할 내용을 실제 운영 경험을 바탕으로 정리했습니다.</small></div></header>
    <div className="guide-hub-content">
      <InfoSections/>
      <section className="guide-library-content" aria-labelledby="article-list-title">
        <div className="guide-section-copy"><span>OPERATIONS NOTES</span><h2 id="article-list-title">실전 운영 노하우</h2><p>매장 인수와 운영 과정에서 자주 부딪히는 문제를 주제별로 정리했습니다.</p></div>
        <div className="guide-article-grid">{sortedGuideArticles.map((article, index) => <a className="guide-list-card-link" href={`/guide/${article.slug}/`} aria-label={`${article.title} 글 읽기`} key={article.slug}><article className="guide-list-card card"><div><span>{String(index + 1).padStart(2, "0")}</span><time dateTime={article.publishedAt}>{article.publishedAt.replaceAll("-", ".")}</time></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="guide-read-link">글 읽기 <b aria-hidden="true">→</b></span></article></a>)}</div>
      </section>
      <section className="guide-hub-cta card" aria-label="운영 노하우 다음 단계"><div><span>NEXT STEP</span><h2>검토 중인 매장 조건을 직접 확인해 보세요</h2><p>운영 노하우를 읽은 뒤 실제 매출과 비용, 권리금을 입력해 보수적으로 비교해 보세요.</p></div><div><a className="hero-primary" href="/#diagnosis">내 매장 조건으로 무료 진단하기</a><a className="hero-secondary" href={SMART_STORE_EBOOK_URL} target="_blank" rel="noopener noreferrer">실제 운영 경험을 담은 전자책 보기</a></div></section>
    </div>
    <SiteFooter/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}/>
  </main>;
}
