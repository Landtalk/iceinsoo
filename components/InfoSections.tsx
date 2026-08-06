"use client";

import { useState } from "react";
import { coreCriteria } from "../src/data/coreCriteria";

export function InfoSections({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  if (compact) return <section className="guide-section guide-summary" id="guide">
    <div className="section-heading"><span>03</span><div><h2>숫자만으로 판단하기 어려운 이유</h2><p>계산 결과와 실제 매장 조건을 함께 확인해야 합니다.</p></div></div>
    <div className="guide-summary-grid">{coreCriteria.map((criterion, index) => <article className="guide-summary-card card" key={criterion.id}><b>{String(index + 1).padStart(2, "0")}</b><h3>{criterion.title}</h3></article>)}</div>
    <a className="guide-summary-link hero-secondary" href="/guide/#core-criteria" aria-label="운영 판단 기준 자세히 보기">운영 판단 기준 자세히 보기</a>
  </section>;

  return <section className="guide-core-section" id="core-criteria">
    <div className="guide-section-copy"><span>CORE CRITERIA</span><h2>인수 전 먼저 알아야 할 4가지 기준</h2><p>계산 결과를 실제 매장 조건과 연결해서 판단할 때 필요한 핵심 기준입니다.</p></div>
    <div className="guide-grid">
      {coreCriteria.map((criterion, index) => <article className={`guide-card card ${open === index ? "expanded" : ""}`} key={criterion.id}>
        <button type="button" aria-expanded={open === index} aria-controls={`criterion-${criterion.id}`} onClick={() => setOpen(open === index ? null : index)}>
          <span><b>{String(index + 1).padStart(2, "0")}</b><strong>{criterion.title}</strong><small>{criterion.summary}</small></span><i aria-hidden="true">{open === index ? "−" : "+"}</i>
        </button>
        {open === index && <div className="guide-card-content" id={`criterion-${criterion.id}`}><p>{criterion.content}</p>{criterion.relatedArticleSlug && criterion.relatedArticleTitle && <a href={`/guide/${criterion.relatedArticleSlug}/`}>자세히 보기: {criterion.relatedArticleTitle}</a>}</div>}
      </article>)}
    </div>
  </section>;
}
