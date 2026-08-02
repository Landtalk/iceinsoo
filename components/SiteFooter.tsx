import { BRAND_NAME } from "../lib/constants";

export function SiteFooter() {
  return <footer>
    <div className="footer-inner">
      <div className="footer-brand"><div className="brand"><span>🍦</span>{BRAND_NAME}</div><p>운영 중인 매장의 인수 조건을 숫자와 실제 자료로 검토합니다.</p></div>
      <nav className="footer-links" aria-label="푸터 메뉴"><a href="/about">회사소개</a><a href="/about#business-info">사업자정보</a><a href="/terms">이용약관</a><a href="/privacy">개인정보처리방침</a><a href="/contact">문의하기</a></nav>
    </div>
    <div className="footer-business" aria-label="사업자 정보"><span><b>운영</b> 주식회사 하이델베르크2018</span><span><b>대표</b> 김양언</span><span><b>사업자등록번호</b> 469-81-02996</span><span><b>이메일</b> <a href="mailto:landtalk2025@gmail.com">landtalk2025@gmail.com</a></span></div>
  </footer>;
}
