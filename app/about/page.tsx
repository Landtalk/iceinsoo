import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { SMART_STORE_EBOOK_URL } from "../../lib/constants";
import { KakaoChannelButton } from "../../src/components/KakaoChannelButton";

export const metadata: Metadata = {
  title: "회사소개 | 무인아이스크림 인수연구소",
  description: "무인아이스크림 인수연구소와 운영사인 주식회사 하이델베르크2018을 소개합니다.",
  alternates: { canonical: "/about" },
};

const services = [
  ["01", "무료 인수 계산기", "월순이익과 권리금 회수기간 계산"],
  ["02", "무료 인수 체크리스트", "계약 전에 확인해야 할 20가지 항목 제공"],
  ["03", "전자책", "실제 운영 경험을 정리한 무인창업 실전 노하우"],
  ["04", "인수진단", "실제 매물을 기반으로 인수 여부를 함께 검토"],
] as const;

const businessInfo = [
  ["상호", "주식회사 하이델베르크2018"],
  ["대표", "김양언"],
  ["사업자등록번호", "469-81-02996"],
  ["주소", "경기도 용인시 수지구 동천로99번길 3, 203호 내 더라이즈비지니스센터 55호 (동천동, 상록제일프라자)"],
  ["이메일", "landtalk2025@gmail.com"],
  ["통신판매업 신고번호", "2023-용인수지-0281"],
] as const;

export default function About() {
  return <main className="static-page about-page">
    <header className="static-header about-header"><SiteHeader/><div className="static-hero about-hero"><p className="eyebrow">ABOUT ICE LAB</p><h1>무인아이스크림 인수연구소</h1><p className="about-lead">감으로 인수하지 않도록,<br/><strong>조건을 숫자로 확인합니다.</strong></p><p>무인아이스크림 인수연구소는 운영 중인 무인아이스크림 매장을 보다 객관적으로 분석할 수 있도록 무료 계산기, 체크리스트, 전자책, 인수진단 서비스를 제공합니다.</p></div></header>

    <section className="about-content">
      <article className="about-story card"><p className="eyebrow">WHY WE BUILT IT</p><h2>왜 이 서비스를 만들었나요?</h2><div><p>직접 무인아이스크림 매장을 인수해 운영하면서 느낀 점은 매도자가 알려주는 정보만으로는 인수 여부를 판단하기 어렵다는 것이었습니다.</p><p>월매출보다 중요한 것은 실제 남는 순이익과 권리금 회수기간, 그리고 운영 가능한 매장인지 여부였습니다.</p><p>그래서 누구나 숫자로 객관적인 판단을 할 수 있도록 이 서비스를 만들었습니다.</p></div></article>

      <section className="about-section" aria-labelledby="services-title"><p className="eyebrow">OUR SERVICES</p><h2 id="services-title">제공 서비스</h2><div className="about-service-grid">{services.map(([number, title, description]) => <article className="card" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

      <article className="about-operator"><div><p className="eyebrow">OPERATOR</p><h2>운영사</h2></div><div><p>무인아이스크림 인수연구소는 <strong>주식회사 하이델베르크2018</strong>에서 운영하는 서비스입니다.</p><p>정보 제공과 무인매장 운영 경험을 바탕으로 운영자들이 보다 객관적인 판단을 할 수 있도록 돕고 있습니다.</p></div></article>

      <section className="about-section" id="business-info" aria-labelledby="business-title"><p className="eyebrow">BUSINESS INFORMATION</p><h2 id="business-title">사업자 정보</h2><dl className="business-card card">{businessInfo.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{label === "이메일" ? <a href={`mailto:${value}`}>{value}</a> : value}</dd></div>)}</dl></section>

      <section className="about-section"><p className="eyebrow">SERVICE SCOPE</p><h2>운영 서비스</h2><ul className="service-tags"><li>무료 인수 계산기</li><li>체크리스트</li><li>전자책</li><li>인수진단</li><li>카카오톡 상담</li></ul></section>

      <section className="about-contact card"><div><p className="eyebrow">CONTACT</p><h2>문의</h2><p>서비스 이용과 인수진단 관련 문의는 카카오톡 채널에서 확인합니다.</p></div><div className="about-actions"><KakaoChannelButton label="카카오톡 문의" location="about_contact"/><a className="hero-secondary" href={SMART_STORE_EBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="전자책 보기, 새 탭에서 열림">전자책 보기 ↗</a><a className="hero-primary" href="/#diagnosis" aria-label="무료 인수 계산기 사용하기">무료 계산기</a></div></section>
    </section>
    <SiteFooter/>
  </main>;
}
