export type DiagnosisInput = {
  monthlySales: number;
  costRate: number;
  rent: number;
  maintenanceFee: number;
  premium: number;
  area: number;
  dailyManagementHours: number;
  inventoryLevel: number;
  directOrderLevel: number;
  competitors: number;
  cardFeeRate: number;
  electricityCost: number;
  otherCost: number;
};

export type DiagnosisResult = {
  monthlyNetProfit: number;
  paybackMonths: number | null;
  rentRatio: number;
  totalScore: number;
  stars: number;
  diagnosis: string;
  summary: string;
  categories: { label: string; icon: string; score: number; max: number }[];
  goodPoints: string[];
  cautionPoints: string[];
  recommendedAction: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const round1 = (value: number) => Math.round(value * 10) / 10;

export function calculateDiagnosis(input: DiagnosisInput): DiagnosisResult {
  const productCost = input.monthlySales * clamp(input.costRate, 0, 100) / 100;
  const cardFee = input.monthlySales * clamp(input.cardFeeRate, 0, 100) / 100;
  const monthlyNetProfit = input.monthlySales - productCost - cardFee - input.rent - input.maintenanceFee - input.electricityCost - input.otherCost;
  const marginRate = input.monthlySales > 0 ? monthlyNetProfit / input.monthlySales * 100 : -100;
  const rentRatio = input.monthlySales > 0 ? input.rent / input.monthlySales * 100 : 100;
  const paybackMonths = monthlyNetProfit > 0 ? Math.ceil(input.premium / monthlyNetProfit) : null;

  // 수익성(35): 순이익률 25점 + 월세비율 10점
  const profitability = round1(clamp((marginRate - 2) / 18 * 25, 0, 25) + clamp((18 - rentRatio) / 10 * 10, 0, 10));
  // 운영 편의성(30): 관리시간 18점 + 재고관리 수준 12점
  const convenience = round1(clamp((4 - input.dailyManagementHours) / 3.5 * 18, 0, 18) + clamp(input.inventoryLevel / 5 * 12, 0, 12));
  // 운영 효율성(20): 평당매출 8점 + 직접발주 8점 + 재고관리 4점
  const salesPerArea = input.area > 0 ? input.monthlySales / input.area : 0;
  const efficiency = round1(clamp(salesPerArea / 150 * 8, 0, 8) + clamp(input.directOrderLevel / 5 * 8, 0, 8) + clamp(input.inventoryLevel / 5 * 4, 0, 4));
  // 투자 위험도(15): 권리금 회수기간 10점 + 경쟁강도 5점 (높을수록 안전)
  const paybackScore = paybackMonths === null ? 0 : clamp((48 - paybackMonths) / 36 * 10, 0, 10);
  const risk = round1(paybackScore + clamp((5 - input.competitors) / 5 * 5, 0, 5));
  const totalScore = Math.round(profitability + convenience + efficiency + risk);
  const stars = clamp(Math.ceil(totalScore / 20), 1, 5);

  const goodPoints: string[] = [];
  const cautionPoints: string[] = [];
  if (marginRate >= 15) goodPoints.push(`예상 순이익률이 ${marginRate.toFixed(1)}%로 안정적인 편이에요.`);
  else cautionPoints.push(`예상 순이익률이 ${marginRate.toFixed(1)}%로 비용 변화에 민감해요.`);
  if (rentRatio <= 10) goodPoints.push(`월세 비율 ${rentRatio.toFixed(1)}%로 고정비 부담이 낮아요.`);
  else cautionPoints.push(`월세가 매출의 ${rentRatio.toFixed(1)}%라 임대료 부담을 점검해야 해요.`);
  if (input.dailyManagementHours <= 1.5) goodPoints.push("하루 관리시간이 짧아 무인 운영의 장점을 살릴 수 있어요.");
  else cautionPoints.push("관리시간이 길어지면 체감 수익성이 낮아질 수 있어요.");
  if (input.inventoryLevel >= 4) goodPoints.push("재고관리 역량이 좋아 품절과 폐기 위험을 줄일 수 있어요.");
  else cautionPoints.push("재고관리 수준을 높이면 품절과 과잉재고를 줄일 수 있어요.");
  if (input.competitors <= 2) goodPoints.push("인근 경쟁 강도가 과도하지 않은 편이에요.");
  else cautionPoints.push(`반경 내 경쟁 매장이 ${input.competitors}곳이라 상권 차별화가 필요해요.`);

  let diagnosis = "신중한 검토가 필요해요";
  let summary = "수익과 투자 조건을 조금 더 다듬으면 더 안전한 선택이 될 수 있어요.";
  let recommendedAction = "월세와 권리금 협상 여지를 먼저 확인하세요";
  if (totalScore >= 80) { diagnosis = "창업 적합도가 높아요"; summary = "수익성과 운영 조건의 균형이 좋아 구체적인 현장 검증을 시작해볼 만해요."; recommendedAction = "상권의 시간대별 유동인구와 실제 매출을 검증하세요"; }
  else if (totalScore >= 65) { diagnosis = "긍정적으로 검토해볼 만해요"; summary = "몇 가지 위험요소만 확인한다면 안정적인 운영을 기대할 수 있어요."; recommendedAction = "보수적 매출 시나리오로 한 번 더 계산해보세요"; }
  else if (totalScore < 45) { diagnosis = "현재 조건은 위험도가 높아요"; summary = "비용 구조나 투자금 조건을 바꾸지 않으면 회수 기간이 길어질 수 있어요."; recommendedAction = "계약 전 매출·임대료·권리금 조건을 재협상하세요"; }

  return {
    monthlyNetProfit: round1(monthlyNetProfit), paybackMonths, rentRatio: round1(rentRatio), totalScore, stars, diagnosis, summary,
    categories: [
      { label: "수익성", icon: "↗", score: profitability, max: 35 },
      { label: "운영 편의성", icon: "◷", score: convenience, max: 30 },
      { label: "운영 효율성", icon: "⚡", score: efficiency, max: 20 },
      { label: "투자 위험도", icon: "◇", score: risk, max: 15 },
    ],
    goodPoints: goodPoints.slice(0, 3), cautionPoints: cautionPoints.slice(0, 3), recommendedAction,
  };
}

