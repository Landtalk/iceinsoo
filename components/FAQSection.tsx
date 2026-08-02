"use client";

import { useMemo, useState } from "react";
import { faqItems } from "../src/data/faq";

type Filter = "all" | "service" | "acquisition";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "service", label: "서비스" },
  { value: "acquisition", label: "인수" },
];

export function FAQSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ko");
    return faqItems.filter((item) => {
      const matchesCategory = filter === "all" || item.category === filter;
      const matchesQuery = !normalizedQuery || item.question.toLocaleLowerCase("ko").includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  const selectFilter = (nextFilter: Filter) => {
    setFilter(nextFilter);
    setOpenId(null);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-heading">
        <span>04</span>
        <div>
          <h2>자주 묻는 질문</h2>
          <p>기존 무인아이스크림 매장의 인수 검토 기준을 빠르게 찾아보세요.</p>
        </div>
      </div>

      <div className="faq-tools">
        <div className="faq-filters" aria-label="FAQ 카테고리">
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              className={filter === item.value ? "active" : ""}
              aria-pressed={filter === item.value}
              onClick={() => selectFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <label className="faq-search">
          <span className="sr-only">FAQ 질문 검색</span>
          <b aria-hidden="true">⌕</b>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpenId(null);
            }}
            placeholder="궁금한 질문을 검색하세요"
          />
          {query && <button type="button" aria-label="검색어 지우기" onClick={() => setQuery("")}>×</button>}
        </label>
      </div>

      <p className="faq-count">총 {visibleItems.length}개의 질문</p>
      <div className="faq-list">
        {visibleItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <article className={`faq-item ${isOpen ? "open" : ""}`} key={item.id}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`answer-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className={`faq-category ${item.category}`}>{item.category === "service" ? "서비스" : "인수"}</span>
                <strong>{item.question}</strong>
                <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
              </button>
              {isOpen && <div id={`answer-${item.id}`} className="faq-answer"><p>{item.answer}</p></div>}
            </article>
          );
        })}
        {visibleItems.length === 0 && (
          <div className="faq-empty">
            <b>검색 결과가 없습니다.</b>
            <p>검색어를 줄이거나 다른 카테고리를 선택해 보세요.</p>
          </div>
        )}
      </div>
    </section>
  );
}

