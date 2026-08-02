import type { Metadata } from "next";
import { ChecklistDownloadLink } from "../../components/ChecklistDownloadLink";
import { EbookCTA } from "../../components/EbookCTA";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { KakaoChannelButton } from "../../src/components/KakaoChannelButton";

export const metadata: Metadata={title:"무인아이스크림 인수 체크리스트 무료 PDF | 인수연구소",description:"무인아이스크림 매장 인수 전 확인할 매출, 비용, 임대조건, 시설과 운영 항목 20가지를 무료 PDF로 받아보세요.",alternates:{canonical:"https://iceinsoo.kr/checklist"},openGraph:{title:"무인아이스크림 인수 체크리스트 무료 다운로드",description:"매장 인수 전에 확인해야 할 20가지 핵심 항목을 한 장의 PDF로 정리했습니다.",url:"https://iceinsoo.kr/checklist",type:"website"}};

export default function ChecklistPage(){return <main className="static-page checklist-page"><header className="static-header"><SiteHeader/><div className="static-hero"><p className="eyebrow">FREE ACQUISITION CHECKLIST</p><h1>무인아이스크림 인수 체크리스트</h1><p>운영 중인 무인아이스크림 매장을 인수하기 전에 매출, 비용, 시설, 계약조건과 운영환경을 확인할 수 있도록 20가지 핵심 항목을 한 장에 정리했습니다.</p><div className="hero-actions"><ChecklistDownloadLink id="checklist-page-download-button" label="무료 PDF 다운로드"/><a className="hero-secondary" href="/#diagnosis" aria-label="무료 인수 계산기 사용하기">무료 인수 계산기 사용하기</a></div></div></header><section className="static-content"><article className="card static-card"><h2>계약 전에 확인할 범위</h2><p>최근 12개월 매출자료와 상품 매입자료, 월세·관리비·전기료, 냉동고와 결제장비 상태, 재고 인수금액, 임대차 잔여기간과 실제 관리시간을 차례로 확인합니다.</p></article><EbookCTA buttonLabel="전자책 자세히 보기"/><article className="card static-card"><h2>검토 후 문의하기</h2><p>체크리스트를 검토한 뒤 궁금한 점이 있거나 실제 매물의 분석 가능 여부를 확인하고 싶다면 카카오톡 채널로 문의해 주세요.</p><div className="checklist-page-actions"><KakaoChannelButton label="카카오톡으로 문의하기" location="checklist_page_bottom"/></div></article></section><SiteFooter/></main>}
