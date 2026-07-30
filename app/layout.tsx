import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "../lib/constants";
import { KakaoFloatingButton } from "../src/components/KakaoChannelButton";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "무인아이스크림 인수연구소", template: "%s" },
  description: "무료 인수 진단으로 더 나은 무인아이스크림 매장 인수 판단을 돕습니다.",
  icons: { icon: "/favicon.svg" },
  openGraph: { type:"website",locale:"ko_KR",siteName:"무인아이스크림 인수연구소",title:"무인아이스크림 인수연구소",description:"무료 진단으로 예상 순수익과 권리금 회수기간을 확인하세요.",url:SITE_URL },
  twitter: { card:"summary",title:"무인아이스크림 인수연구소",description:"무료 진단으로 더 나은 무인아이스크림 매장 인수 판단을 돕습니다." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "무인아이스크림 인수연구소",
    url: SITE_URL,
    description: "무인아이스크림 매장 인수 조건을 숫자로 확인하는 무료 창업 진단 서비스",
  };
  return <html lang="ko"><body>{children}<KakaoFloatingButton/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>;
}

