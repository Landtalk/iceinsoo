import { KakaoChannelButton } from "../src/components/KakaoChannelButton";

export function ResultKakaoCTA() {
  return <article className="kakao-result-cta">
    <div><span>KAKAO CHANNEL</span><h3>혼자 판단하기 어렵다면</h3><p>무인아이스크림 매장 인수와 운영에 관한 새로운 자료와 안내를 카카오톡 채널에서 받아보세요.</p></div>
    <KakaoChannelButton label="카카오톡 채널 추가" location="diagnosis_result" />
  </article>;
}

export function HomeKakaoCTA() {
  return <section className="home-kakao-cta">
    <div><span>KAKAO CHANNEL</span><h2>무인아이스크림 인수 정보를 계속 받아보세요</h2><p>매장 인수 체크포인트, 운영 노하우와 새로 추가되는 창업 자료를 카카오톡 채널에서 안내합니다.</p><small>채널 추가는 무료이며, 원할 때 언제든 차단할 수 있습니다.</small></div>
    <KakaoChannelButton variant="outline" label="창업 정보 받아보기" location="home_bottom_cta" />
  </section>;
}

