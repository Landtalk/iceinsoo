const trustItems = [
  ["인수", "기존 매장 인수 경험"],
  ["2025", "2025년 1년 운영"],
  ["운영", "실제 발주·재고·매장관리 경험"],
] as const;

export function TrustSection() {
  return <section className="trust-section" aria-labelledby="trust-title">
    <div className="trust-copy"><p className="eyebrow">OPERATOR EXPERIENCE</p><h2 id="trust-title">직접 인수하고 운영한 경험을 바탕으로 만들었습니다</h2><p>운영 중이던 무인아이스크림 매장을 직접 인수해 2025년 한 해 동안 운영하며 매출, 상품 발주, 재고관리, 성수기와 비수기 차이, 관리시간과 권리금 회수 구조를 경험했습니다.</p><p>이 계산기는 단순한 매출 계산이 아니라 실제 운영에서 중요했던 조건을 함께 확인하도록 설계했습니다.</p></div>
    <div className="trust-grid">{trustItems.map(([value,label])=><article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
  </section>;
}

