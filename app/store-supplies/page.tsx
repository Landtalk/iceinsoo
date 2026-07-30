import type { Metadata } from "next";
import { StoreSuppliesGuide } from "../../components/StoreSuppliesGuide";

export const metadata: Metadata = {
  title: "무인아이스크림점 운영용품 가이드 | 아이스체크",
  description: "청소, 진열, 보안, 냉동고, 재고와 점주 방문 관리에 필요한 운영용품을 용도와 구매 기준에 따라 안내합니다.",
  alternates: { canonical: "/store-supplies" },
  openGraph: { title: "무인아이스크림점 운영용품 가이드 | 아이스체크", description: "상품 나열보다 실제 운영 문제와 구매 전 확인사항을 먼저 살펴보세요.", url: "/store-supplies" },
};

export default function StoreSuppliesPage() {
  return <StoreSuppliesGuide />;
}

