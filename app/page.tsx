import type { Metadata } from "next";
import { HomeCalculator } from "../components/HomeCalculator";

export const metadata: Metadata = {
  title: "무료 인수 진단 | 무인아이스크림 인수연구소",
  description: "무인아이스크림점 인수 조건을 무료로 진단하고 예상 순수익과 권리금 회수기간을 확인하세요.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeCalculator />;
}

