/**
 * @typedef {"service" | "startup"} FaqCategory
 * @typedef {{ id: string, category: FaqCategory, question: string, answer: string }} FaqItem
 */

/** @type {FaqItem[]} */
export const faqItems = [
  {
    id: "service-free",
    category: "service",
    question: "계산기는 무료인가요?",
    answer: "네. 무인아이스크림 창업 진단 계산기는 로그인이나 결제 없이 무료로 이용할 수 있습니다.",
  },
  {
    id: "service-accuracy",
    category: "service",
    question: "계산 결과는 정확한가요?",
    answer: "입력한 예상 매출과 비용을 바탕으로 한 참고용 추정치입니다. 실제 수익은 상권, 계절, 상품 구성과 운영 방식에 따라 달라질 수 있으므로 계약 전에는 매출 증빙과 고정비를 별도로 확인해야 합니다.",
  },
  {
    id: "service-privacy",
    category: "service",
    question: "개인정보는 저장되나요?",
    answer: "입력한 정보와 계산 결과는 서버에 저장되지 않습니다. 향후 서비스 이용 통계를 위해 개인을 식별할 수 없는 진단 완료 횟수만 집계할 수 있습니다.",
  },
  {
    id: "service-ebook",
    category: "service",
    question: "전자책에는 어떤 내용이 들어있나요?",
    answer: "실제 운영 경험을 바탕으로 매출, 관리시간, 상품 구성, 발주 방식과 권리금 판단 기준 등 계산 결과만으로 알기 어려운 운영 내용을 정리했습니다.",
  },
  {
    id: "service-contact",
    category: "service",
    question: "문의는 어떻게 하나요?",
    answer: "카카오톡 채널 1:1 채팅으로 문의할 수 있습니다. 확인 후 순차적으로 답변드리며, 매장 매물에 대한 최종 인수 결정이나 수익을 보장하는 상담은 제공하지 않습니다.",
  },
  {
    id: "service-kakao-information",
    category: "service",
    question: "카카오톡 채널에서는 어떤 정보를 받을 수 있나요?",
    answer: "무인아이스크림 매장 인수 체크포인트, 운영 경험을 바탕으로 한 실무 정보, 새로운 진단 기능과 콘텐츠 업데이트 소식을 안내합니다.",
  },
  {
    id: "startup-cost",
    category: "startup",
    question: "무인아이스크림점 창업비용은 얼마나 필요한가요?",
    answer: "보증금, 권리금, 인테리어, 냉동고와 결제기, 초도 상품비를 함께 계산해야 합니다. 매장 상태와 인수 조건에 따라 차이가 크므로 시설별 견적과 계약 조건을 나누어 확인하세요.",
  },
  {
    id: "startup-premium",
    category: "startup",
    question: "권리금은 어떻게 판단해야 하나요?",
    answer: "매출이 아니라 모든 비용을 제외한 월순이익을 기준으로 회수기간을 계산해야 합니다. 시설 상태, 매출 증빙과 임대차 잔여기간도 함께 확인하세요.",
  },
  {
    id: "startup-sales",
    category: "startup",
    question: "월매출은 어느 정도로 잡아야 하나요?",
    answer: "판매자의 설명보다 카드 매출, POS 자료와 계절별 실적을 우선 확인하세요. 성수기 평균만 사용하지 말고 최근 12개월 자료로 보수적인 시나리오를 함께 계산하는 것이 좋습니다.",
  },
  {
    id: "startup-profit",
    category: "startup",
    question: "월 순수익은 어떻게 계산하나요?",
    answer: "월매출에서 상품 원가, 카드수수료, 월세, 관리비, 전기료와 기타 운영비를 제외해 계산합니다. 점주 노동시간과 세금은 상황에 따라 추가로 고려해야 합니다.",
  },
  {
    id: "startup-cost-rate",
    category: "startup",
    question: "상품 원가율은 어떻게 확인하나요?",
    answer: "매입 자료를 상품군별로 나누고 같은 기간의 매출과 비교해야 합니다. 할인 판매, 폐기와 재고 차이까지 반영하면 실제 원가율을 더 현실적으로 볼 수 있습니다.",
  },
  {
    id: "startup-electricity",
    category: "startup",
    question: "전기료는 얼마나 고려해야 하나요?",
    answer: "계산기는 월 20만원을 기본값으로 사용하지만 냉동고 수, 기기 효율, 계약전력과 계절에 따라 달라집니다. 인수 전 최근 고지서를 확인하고 여름철 금액을 별도로 살펴보세요.",
  },
  {
    id: "startup-hours",
    category: "startup",
    question: "매장은 24시간 운영해야 하나요?",
    answer: "상권과 심야 매출, 보안 위험, 민원 가능성을 함께 보고 결정해야 합니다. 심야 매출보다 관리 부담과 사고 위험이 크다면 운영시간 조정도 검토할 수 있습니다.",
  },
  {
    id: "startup-management-time",
    category: "startup",
    question: "하루 관리시간은 얼마나 필요한가요?",
    answer: "발주, 진열, 청소, 가격표 관리, 재고 확인과 고객 대응 시간을 모두 포함해야 합니다. 매장 거리와 방문 빈도에 따라 같은 매출이라도 운영 효율이 크게 달라집니다.",
  },
  {
    id: "startup-competition",
    category: "startup",
    question: "경쟁매장은 몇 곳까지 괜찮은가요?",
    answer: "숫자만으로 판단하기보다 거리, 가격, 영업시간, 상품 구성과 유동 인구를 함께 봐야 합니다. 가까운 경쟁점의 신규 출점 가능성도 확인하세요.",
  },
  {
    id: "startup-freezer",
    category: "startup",
    question: "냉동고를 확인할 때 무엇을 봐야 하나요?",
    answer: "연식, 냉각 상태, 소음, 성에, 문 패킹과 전력 소비를 확인하세요. 고장 시 상품 손실이 클 수 있으므로 수리 이력과 비상 연락 체계도 필요합니다.",
  },
  {
    id: "startup-icecream-share",
    category: "startup",
    question: "아이스크림 판매 비중이 왜 중요한가요?",
    answer: "아이스크림 비중이 높으면 계절과 가격 경쟁의 영향을 크게 받을 수 있습니다. 과자, 음료 등 다른 상품군이 매출과 마진을 얼마나 보완하는지 함께 보세요.",
  },
  {
    id: "startup-assortment",
    category: "startup",
    question: "상품 구성은 어떻게 정해야 하나요?",
    answer: "판매 속도, 마진, 보관 공간과 발주 난이도를 기준으로 핵심 상품을 먼저 구성하세요. 품목을 무작정 늘리기보다 장기 재고를 줄이고 상권 수요에 맞춰 조정하는 것이 중요합니다.",
  },
  {
    id: "startup-failure",
    category: "startup",
    question: "무인아이스크림점의 대표적인 실패사례는 무엇인가요?",
    answer: "성수기 매출만 믿고 인수하거나, 높은 권리금과 예상보다 많은 관리시간을 놓치는 경우가 대표적입니다. 매출 증빙 없이 낙관적인 수치로 계산하는 것도 주의해야 합니다.",
  },
  {
    id: "startup-investment-period",
    category: "startup",
    question: "투자금 회수기간은 어느 정도가 적절한가요?",
    answer: "정답은 없지만 시설 수명, 임대차 기간과 폐점 위험보다 충분히 짧아야 합니다. 매출이 10~20% 감소하는 경우에도 감당 가능한지 함께 계산하세요.",
  },
  {
    id: "startup-knowhow",
    category: "startup",
    question: "운영 노하우에서 가장 중요한 것은 무엇인가요?",
    answer: "재고 정확도와 정기적인 매장 방문이 기본입니다. 판매 데이터를 보고 발주량과 상품 구성을 반복 조정하고, 청결과 냉동고 상태를 일정하게 유지해야 합니다.",
  },
];

