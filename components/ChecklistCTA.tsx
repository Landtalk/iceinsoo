import { siteConfig } from "../src/config/siteConfig";
import { KakaoChannelButton } from "../src/components/KakaoChannelButton";

export function ChecklistCTA({ compact = false }: { compact?: boolean }) {
  const directUrl = siteConfig.checklistUrl;
  return <article className={`checklist-cta ${compact ? "compact" : ""}`}>
    <div><span>FREE CHECKLIST</span><h3>카카오톡 채널 추가하고 인수 체크리스트 받기</h3><p>운영 중인 무인아이스크림점을 인수하기 전에 확인해야 할 매출, 비용, 시설, 계약, 운영 항목을 PDF로 정리했습니다.</p><small>채널 추가 후 채팅창에 <b>‘체크리스트’</b>라고 입력해 주세요.</small></div>
    <div className="checklist-actions">{directUrl ? <a className="kakao-channel-button primary" href={directUrl} target="_blank" rel="noopener noreferrer" aria-label="무료 인수 체크리스트 받기, 새 탭에서 열림">무료 체크리스트 받기</a> : <KakaoChannelButton label="무료 체크리스트 받기" location="checklist_cta"/>}<KakaoChannelButton variant="outline" label="1:1 문의하기" location="checklist_inquiry"/></div>
  </article>;
}

