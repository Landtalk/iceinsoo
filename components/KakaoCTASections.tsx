import { KakaoChannelButton } from "../src/components/KakaoChannelButton";

export function ResultKakaoCTA() {
  return <article className="kakao-result-cta">
    <div><span>KAKAO CHANNEL</span><h3>인수 체크리스트가 필요하다면</h3><p>카카오톡 채널을 추가한 뒤 채팅창에 ‘체크리스트’라고 입력해 주세요.</p></div>
    <KakaoChannelButton label="무료 체크리스트 받기" location="diagnosis_result" />
  </article>;
}

export function HomeKakaoCTA() {
  return <section className="home-kakao-cta">
    <div><span>KAKAO CHANNEL</span><h2>카카오톡 채널 추가하고 인수 체크리스트 받기</h2><p>운영 중인 무인아이스크림점을 인수하기 전에 확인해야 할 매출, 비용, 시설, 계약, 운영 항목을 PDF로 정리했습니다.</p><small>채널 추가 후 채팅창에 <b>‘체크리스트’</b>라고 입력해 주세요.</small></div>
    <div className="home-kakao-actions"><KakaoChannelButton label="무료 체크리스트 받기" location="home_bottom_cta" /><KakaoChannelButton variant="outline" label="1:1 문의하기" location="home_bottom_inquiry" /></div>
  </section>;
}

