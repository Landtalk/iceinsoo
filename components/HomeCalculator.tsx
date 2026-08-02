"use client";

import { useState } from "react";
import type { DiagnosisInput, DiagnosisResult } from "../lib/calculate";
import { diagnosisCountService } from "../services/DiagnosisCountService";
import { AdSlot } from "./AdSlot";
import { AudienceSection } from "./AudienceSection";
import { Calculator } from "./Calculator";
import { ChecklistCTA } from "./ChecklistCTA";
import { ChecklistDownloadLink } from "./ChecklistDownloadLink";
import { DiagnosisCount } from "./DiagnosisCount";
import { EbookCTA } from "./EbookCTA";
import { FAQSection } from "./FAQSection";
import { InfoSections } from "./InfoSections";
import { ResultCard } from "./ResultCard";
import { ReportCTA } from "./ReportCTA";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TrustSection } from "./TrustSection";

export function HomeCalculator(){
  const [result,setResult]=useState<DiagnosisResult|null>(null);
  const handleCalculated=(_input:DiagnosisInput,nextResult:DiagnosisResult)=>{
    const completionId=crypto.randomUUID();
    setResult(nextResult);
    requestAnimationFrame(()=>{
      diagnosisCountService.recordCompletion(completionId);
      document.querySelector("#result")?.scrollIntoView({behavior:"smooth",block:"start"});
    });
  };
  return <main className="research-lab">
    <header className="hero lab-hero" id="top"><SiteHeader/><div className="hero-copy lab-hero-copy"><p className="eyebrow">운영 중 매장 인수 판단 도구</p><h1>무인아이스크림 인수 계산기</h1><p className="hero-lead">감으로 인수하지 않도록,<br/><strong>매출·비용·권리금과 운영조건을 숫자로 확인합니다.</strong></p><p>운영 중인 무인아이스크림 할인점의 조건을 입력하면 예상 월순이익, 권리금 회수기간과 인수 적합도를 확인할 수 있습니다.</p><div className="hero-actions"><a className="hero-primary" href="#diagnosis" aria-label="무료로 인수 조건 계산하기">무료로 인수 조건 계산하기</a><ChecklistDownloadLink label="무료 체크리스트 다운로드" className="hero-secondary" id="hero-checklist-download-button"/></div><div className="hero-points"><span>✓ 개인정보 수집 없음</span><span>✓ 계산 데이터 서버 저장 없음</span><span>✓ 무료 인수 진단</span></div><DiagnosisCount/></div><div className="lab-manifest"><span>ICE LAB · ACQUISITION 001</span><p>계산 결과는 참고용 추정치입니다.<br/>실제 매물자료와 함께 보수적으로 검토하세요.</p></div></header>
    <TrustSection/>
    <section className="content-shell lab-shell"><AudienceSection/><section className="lab-intro"><div><span>ACQUISITION METHOD</span><h2>인수 조건을 입력하고<br/>핵심 지표를 한 번에</h2></div><div className="lab-steps"><p><b>01</b> 확인 가능한 매출과 비용 조건을 입력합니다.</p><p><b>02</b> 예상 순수익과 권리금 회수기간을 계산합니다.</p><p><b>03</b> 입력값과 결과는 서버에 저장되지 않으며 현재 화면에서만 확인합니다.</p></div></section>
      <Calculator onCalculated={handleCalculated} isSaving={false}/>
      {result&&<section className="results" id="result"><div className="section-heading"><span>02</span><div><h2>무료 인수 진단 결과</h2><p>입력한 조건으로 계산한 참고용 결과입니다.</p></div></div><ResultCard result={result}/><div className="result-action-grid"><article className="conversion-banner recalculate-conversion"><div><span>STEP 01 · 조건 비교</span><h3>조건을 바꿔 다시 계산하기</h3><p>매출이나 비용 조건을 바꿔 보수적으로 다시 계산해보세요.</p></div><button className="secondary-button" aria-label="인수 조건 다시 계산하기" onClick={()=>{setResult(null);document.querySelector("#diagnosis")?.scrollIntoView({behavior:"smooth",block:"start"})}}>다시 계산하기</button></article><article className="conversion-banner checklist-conversion"><div><span>STEP 02 · 계약 전 확인</span><h3>인수 체크리스트 다운로드</h3><p>계약 전에 매출, 비용, 시설과 임대조건을 빠짐없이 확인할 수 있도록 정리한 무료 PDF입니다.</p></div><ChecklistDownloadLink id="result-checklist-download-button" label="무료 PDF 다운로드" className="secondary-button"/></article><EbookCTA eyebrow="STEP 03 · 전자책" buttonLabel="전자책 보기"/><ReportCTA/></div><p className="storage-notice">입력값과 계산 결과는 서버에 저장되지 않으며 현재 화면에서만 확인할 수 있습니다.</p><p className="disclaimer">본 진단은 참고용 추정치이며 실제 수익이나 투자 결과를 보장하지 않습니다.</p></section>}
      <section className="data-vision"><div className="section-heading"><span>03</span><div><h2>진단 결과 활용 방법</h2><p>한 번의 계산보다 여러 조건을 비교하는 것이 중요합니다.</p></div></div><div className="vision-grid"><article><b>NOW</b><h3>현재 조건 확인</h3><p>입력한 매출과 비용으로 예상 순수익과 투자 회수기간을 확인합니다.</p></article><article><b>COMPARE</b><h3>보수적 시나리오</h3><p>매출을 낮추거나 비용을 높여도 감당 가능한지 다시 계산합니다.</p></article><article><b>CHECK</b><h3>실제 자료 검증</h3><p>계약 전 매출 증빙, 임대차 조건과 시설 상태를 별도로 확인합니다.</p></article></div></section>
      <InfoSections/><ChecklistCTA compact/><FAQSection/><AdSlot placement="home-bottom"/>
    </section><SiteFooter/>
  </main>;
}
