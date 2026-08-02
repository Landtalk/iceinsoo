import type { Metadata } from "next";
import "./globals.css";
import "./acquisition.css";
import { SITE_URL } from "../lib/constants";
import { KakaoFloatingButton } from "../src/components/KakaoChannelButton";
import { siteConfig } from "../src/config/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: siteConfig.seo.title, template: "%s" },
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: { type:"website",locale:"ko_KR",siteName:siteConfig.brandName,title:siteConfig.seo.title,description:siteConfig.seo.description,url:SITE_URL,images:[{url:siteConfig.seo.ogImage,width:1731,height:909,alt:"무인아이스크림 인수 계산기"}] },
  twitter: { card:"summary_large_image",title:siteConfig.seo.title,description:siteConfig.seo.description,images:[siteConfig.seo.ogImage] },
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
