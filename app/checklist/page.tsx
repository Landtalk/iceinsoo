import type { Metadata } from "next";
import { ChecklistCTA } from "../../components/ChecklistCTA";
import { EbookCTA } from "../../components/EbookCTA";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata={title:"무인아이스크림 인수 체크리스트",description:"매출자료, 비용, 시설, 재고, 임대차 조건과 운영시간을 계약 전에 확인하는 무료 인수 체크리스트입니다.",alternates:{canonical:"/checklist"}};

export default function ChecklistPage(){return <main className="static-page checklist-page"><header className="static-header"><SiteHeader/><div className="static-hero"><p className="eyebrow">FREE ACQUISITION CHECKLIST</p><h1>무인아이스크림 인수 체크리스트</h1><p>매출자료, 비용, 시설, 재고, 임대차 조건과 운영시간을 계약 전에 확인할 수 있도록 정리한 무료 자료입니다.</p></div></header><section className="static-content"><ChecklistCTA/><article className="card static-card"><h2>계약 전에 확인할 범위</h2><p>최근 12개월 매출자료와 상품 매입자료, 월세·관리비·전기료, 냉동고와 결제장비 상태, 재고 인수금액, 임대차 잔여기간과 실제 관리시간을 차례로 확인합니다.</p></article><div className="checklist-page-actions"><a className="hero-primary" href="/#diagnosis" aria-label="무료 인수 계산기 사용하기">무료 인수 계산기 사용하기</a></div><EbookCTA buttonLabel="전자책 보기"/></section><SiteFooter/></main>}

