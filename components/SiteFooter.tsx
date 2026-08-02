import { BRAND_NAME, SMART_STORE_EBOOK_URL } from "../lib/constants";
import { KakaoChannelButton } from "../src/components/KakaoChannelButton";

export function SiteFooter() {
  return <footer>
    <div className="footer-inner">
      <div><div className="brand"><span>🍦</span>{BRAND_NAME}</div><p>운영 중 매장의 인수 조건을 숫자와 실제 자료로 검토합니다.</p></div>
      <div className="footer-links">
        <a href="/about">서비스 소개</a><a href="/checklist">인수 체크리스트</a><a href="/terms">이용약관 및 면책 안내</a><a href="/privacy">개인정보처리방침</a><a href="/contact">문의하기</a><KakaoChannelButton variant="outline" label="카카오톡 채널" location="footer"/><a href={SMART_STORE_EBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="무인 창업 전자책 보기, 새 탭에서 열림">전자책 보기 ↗</a>
      </div>
    </div>
  </footer>;
}

