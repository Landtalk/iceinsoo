import type { Metadata } from "next";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { getGuideArticle, guideArticles } from "../../../guide/articles";

type GuideArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: GuideArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) return { title: "운영 노하우 | 무인아이스크림 인수연구소" };
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/guide/${article.slug}` },
    openGraph: { title: article.seoTitle, description: article.seoDescription, url: `/guide/${article.slug}`, type: "article", publishedTime: article.publishedAt },
  };
}

export default async function GuideArticlePage({ params }: GuideArticlePageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) return <main><p>요청한 글을 찾을 수 없습니다.</p></main>;

  return <main className="guide-article-page">
    <header className="guide-article-header"><SiteHeader/><div className="guide-article-hero"><nav className="breadcrumb" aria-label="현재 위치"><a href="/">홈</a><span aria-hidden="true">›</span><a href="/guide">운영 노하우</a><span aria-hidden="true">›</span><strong>{article.title}</strong></nav><p className="eyebrow">OPERATIONS NOTE</p><h1>{article.title}</h1><p className="guide-article-subtitle">{article.subtitle}</p><time dateTime={article.publishedAt}>{article.publishedAt.replaceAll("-", ".")}</time></div></header>
    <article className="guide-article-body">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}{section.callout && <aside>{section.callout}</aside>}</section>)}
      <div className="guide-article-cta card"><div><span>NEXT STEP</span><h2>검토 중인 매장을 숫자로 확인해 보세요</h2><p>매출과 비용, 권리금과 운영조건을 입력하면 예상 월순이익과 회수기간을 확인할 수 있습니다.</p></div><div><a className="hero-primary" href="/#diagnosis" aria-label="무료 인수 계산기 이용하기">무료 인수 계산기 이용하기</a>{article.showSuppliesCta && <a className="hero-secondary" href="/store-supplies" aria-label="무인아이스크림 운영물품 추천 페이지 보기">운영물품 추천 보기</a>}</div></div>
      <nav className="guide-back-nav" aria-label="운영 노하우 목록으로 돌아가기"><a href="/guide">← 운영 노하우 전체 글</a></nav>
    </article>
    <SiteFooter/>
  </main>;
}
