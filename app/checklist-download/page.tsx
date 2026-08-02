import type { Metadata } from "next";
import { ChecklistDownloadLink } from "../../components/ChecklistDownloadLink";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "무인아이스크림 인수 체크리스트 PDF 다운로드",
  description: "매출, 비용, 시설, 재고, 임대차 조건과 운영시간을 계약 전에 확인하는 무료 인수 체크리스트를 다운로드하세요.",
  alternates: { canonical: "/checklist-download" },
};

export default function ChecklistDownloadPage() {
  return <main className="static-page checklist-page">
    <header className="static-header"><SiteHeader/><div className="static-hero"><p className="eyebrow">FREE PDF CHECKLIST</p><h1>무인아이스크림 인수 체크리스트</h1><p>운영 중인 매장을 인수하기 전에 확인할 매출, 비용, 시설, 재고, 임대차와 운영조건을 한 장으로 정리했습니다.</p></div></header>
    <section className="static-content"><article className="card static-card"><h2>무료 PDF 다운로드</h2><p>아래 버튼을 누르면 ‘무인아이스크림 인수 체크리스트.pdf’ 파일이 기기에 저장됩니다.</p><div className="checklist-page-actions"><ChecklistDownloadLink id="legacy-checklist-download-button" label="무료 PDF 다운로드"/></div></article><article className="card static-card"><h2>활용 방법</h2><p>매도자에게 받은 최근 12개월 매출자료와 비용자료를 준비한 뒤, 계약 전에 확인할 항목을 하나씩 표시해 보세요. 체크리스트는 최종 인수 결정을 대신하지 않습니다.</p></article></section>
    <SiteFooter/>
  </main>;
}
