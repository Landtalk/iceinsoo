"use client";

import { useState } from "react";

const guides = [
  { title: "권리금은 왜 순수익으로 봐야 할까", summary: "매출이 아니라 실제로 남는 돈이 회수 능력을 결정합니다.", body: "권리금 회수기간은 권리금을 월매출로 나누는 것이 아니라 월순이익으로 나눠야 합니다. 원가, 카드수수료, 임대료와 운영비를 모두 제외한 뒤 실제 남는 금액을 기준으로 판단해야 투자금을 돌려받는 현실적인 기간을 알 수 있습니다." },
  { title: "무인매장은 정말 무인일까", summary: "발주·진열·청소·민원 대응에는 꾸준한 시간이 필요합니다.", body: "무인 결제는 가능하지만 재고 확인, 상품 진열, 냉동고 관리, 청소, 가격표 교체와 고객 문의 대응은 사람이 해야 합니다. 하루 관리시간을 수익과 함께 보아야 같은 순이익이라도 실제 운영 효율을 비교할 수 있습니다." },
  { title: "아이스크림 판매 비중이 중요한 이유", summary: "매출 구성에 따라 원가율과 발주 난이도가 달라집니다.", body: "아이스크림은 계절성과 가격 경쟁의 영향을 크게 받습니다. 과자·음료·생활용품처럼 직접 발주할 수 있는 상품의 비중을 조절하면 객단가와 마진을 보완할 수 있지만, 품목이 많아질수록 재고관리 부담도 함께 커집니다." },
  { title: "계산 결과를 볼 때 주의할 점", summary: "한 번의 숫자보다 보수적인 시나리오 비교가 중요합니다.", body: "이 진단은 입력한 예상치에 기반한 참고 자료입니다. 매출을 10~20% 낮춘 경우, 전기료와 원가율이 오른 경우도 함께 계산해 보세요. 실제 계약 전에는 매출 증빙, 임대차 조건, 시설 상태와 경쟁 매장의 변화를 별도로 확인해야 합니다." },
];

export function InfoSections() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="guide-section" id="guide">
    <div className="section-heading"><span>03</span><div><h2>숫자 밖의 운영 판단 기준</h2><p>계산 결과를 실제 매장 조건과 연결해 보세요.</p></div></div>
    <div className="guide-grid">
      {guides.map((guide, index) => <article className={`guide-card card ${open === index ? "expanded" : ""}`} key={guide.title}>
        <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
          <span><b>0{index + 1}</b><strong>{guide.title}</strong><small>{guide.summary}</small></span><i>{open === index ? "−" : "+"}</i>
        </button>
        {open === index && <p>{guide.body}</p>}
      </article>)}
    </div>
  </section>;
}

