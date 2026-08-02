import { KakaoChannelButton } from "../src/components/KakaoChannelButton";
import { ChecklistDownloadLink } from "./ChecklistDownloadLink";

export function ChecklistCTA({ compact = false }: { compact?: boolean }) {
  return <article className={`checklist-cta ${compact ? "compact" : ""}`}>
    <div><span>FREE CHECKLIST</span><h3>인수 전에 20가지 항목을 먼저 확인하세요</h3><p>매출자료, 임대조건, 권리금, 시설상태, 운영시간과 경쟁환경을 점검할 수 있는 무인아이스크림 인수 체크리스트를 무료로 제공합니다.</p></div>
    <div className="checklist-actions"><ChecklistDownloadLink id="checklist-download-button" label="무료 PDF 다운로드" className="kakao-channel-button primary"/><KakaoChannelButton variant="outline" label="카카오톡으로 문의하기" location="checklist_inquiry"/></div>
  </article>;
}
