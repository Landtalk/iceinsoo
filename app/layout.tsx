import type { Metadata } from "next";
import "./globals.css";
import "./acquisition.css";
import { BRAND_NAME, OG_DESCRIPTION, OG_IMAGE, SEO_DESCRIPTION, SEO_TITLE, SITE_URL } from "../lib/constants";
import { KakaoFloatingButton } from "../src/components/KakaoChannelButton";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO_TITLE, template: "%s" },
  description: SEO_DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  other: { "naver-site-verification": "22e7cbaf3fb688cc70e13905379d672ec2d5e28d" },
  openGraph: { type:"website",locale:"ko_KR",siteName:BRAND_NAME,title:SEO_TITLE,description:OG_DESCRIPTION,url:SITE_URL,images:[{url:OG_IMAGE,width:1731,height:909,alt:"무인아이스크림 인수 계산기"}] },
  twitter: { card:"summary_large_image",title:SEO_TITLE,description:OG_DESCRIPTION,images:[OG_IMAGE] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "무인아이스크림 인수연구소",
    url: SITE_URL,
    description: "운영 중인 무인아이스크림 할인점의 월순이익과 권리금 회수기간을 확인하는 무료 인수 계산기",
  };
  return <html lang="ko"><body>{children}<KakaoFloatingButton/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>;
}
