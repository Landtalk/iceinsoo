"use client";

import { useState } from "react";
import { storeSupplies, supplyCategories } from "../src/data/storeSupplies";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const priorityLabel={essential:"먼저 준비",optional:"운영 후 선택",later:"필요할 때"} as const;

export function StoreSuppliesGuide(){
  const [category,setCategory]=useState("전체");
  const items=category==="전체"?storeSupplies:storeSupplies.filter(item=>item.category===category);
  return <main className="supplies-page">
    <header className="static-header"><SiteHeader/><div className="static-hero supplies-hero"><p className="eyebrow">STORE OPERATIONS GUIDE</p><h1>무인아이스크림점<br/>운영용품 가이드</h1><p>많이 사는 목록보다, 매장 운영에서 왜 필요한지와 무엇을 확인해야 하는지를 먼저 정리했습니다.</p></div></header>
    <section className="supplies-content">
      <aside className="affiliate-notice"><span>제휴 안내</span><p>이 페이지에는 쿠팡파트너스 제휴 링크가 포함되어 있으며,<br/>링크를 통해 구매할 경우 일정액의 수수료를 제공받을 수 있습니다.<br/>구매자에게 추가 비용이 발생하지 않습니다.</p></aside>
      <div className="supplies-intro"><div><p className="eyebrow">BUYING PRINCIPLES</p><h2>도구보다 운영 문제를 먼저 보세요</h2></div><p>매장 크기, 방문 횟수, 상품 구성에 따라 필요한 용품은 달라집니다. 필수도 표시를 참고하되, 현재 반복해서 시간을 쓰고 있는 업무부터 개선하는 것이 좋습니다.</p></div>
      <div className="category-tabs" role="tablist" aria-label="운영용품 카테고리">{supplyCategories.map(name=><button key={name} type="button" role="tab" aria-selected={category===name} className={category===name?"active":""} onClick={()=>setCategory(name)}>{name}</button>)}</div>
      <div className="supply-grid">{items.map(item=><article className="supply-card card" key={item.id}>
        <div className="supply-card-top"><span>{item.category}</span><b className={`priority ${item.priority}`}>{priorityLabel[item.priority as keyof typeof priorityLabel]}</b></div>
        <h2>{item.name}</h2><dl><div><dt>필요한 이유</dt><dd>{item.description}</dd></div><div><dt>추천 대상</dt><dd>{item.recommendedFor}</dd></div><div><dt>구매 전 확인사항</dt><dd><ul>{item.checklist.map(value=><li key={value}>{value}</li>)}</ul></dd></div></dl>
        {item.personallyUsed&&<p className="used-note">직접 사용해 본 유형입니다.</p>}
        {item.affiliateUrl?<a className="supply-link" href={item.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer">쿠팡에서 확인하기 ↗</a>:<button className="supply-link disabled" type="button" disabled>링크 준비 중</button>}
      </article>)}</div>
      <p className="supplies-footnote">상품명은 특정 브랜드 추천이 아닌 운영에 필요한 제품 유형을 안내합니다. 구매 전 매장 설비와 사용 환경을 직접 확인하세요.</p>
    </section><SiteFooter/>
  </main>;
}

