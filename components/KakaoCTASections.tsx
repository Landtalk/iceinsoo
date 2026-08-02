import { KakaoChannelButton } from "../src/components/KakaoChannelButton";
import { ChecklistDownloadLink } from "./ChecklistDownloadLink";

export function ResultKakaoCTA() {
  return <article className="kakao-result-cta">
    <div><span>FREE PDF</span><h3>인수 체크리스트 다운로드</h3><p>계약 전에 매출, 비용, 시설과 임대조건을 빠짐없이 확인할 수 있도록 정리한 무료 PDF입니다.</p></div>
    <ChecklistDownloadLink label="무료 PDF 다운로드" className="kakao-channel-button primary" />
  </article>;
}

export function HomeKakaoCTA() {
  return <section className="home-kakao-cta">
    <div><span>FREE CHECKLIST</span><h2>인수 전에 20가지 항목을 먼저 확인하세요</h2><p>매출자료, 임대조건, 권리금, 시설상태, 운영시간과 경쟁환경을 점검할 수 있는 무인아이스크림 인수 체크리스트를 무료로 제공합니다.</p></div>
    <div className="home-kakao-actions"><ChecklistDownloadLink label="무료 PDF 다운로드" className="kakao-channel-button primary"/><KakaoChannelButton variant="outline" label="카카오톡으로 문의하기" location="home_bottom_inquiry" /></div>
  </section>;
}
