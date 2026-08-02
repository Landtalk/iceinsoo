import type { Metadata } from "next";
import { HomeCalculator } from "../components/HomeCalculator";
import { siteConfig } from "../src/config/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
  openGraph: { title: siteConfig.seo.title, description: siteConfig.seo.description, url: siteConfig.siteUrl, type: "website", images: [{ url: siteConfig.seo.ogImage, width: 1731, height: 909, alt: "무인아이스크림 인수 계산기" }] },
  twitter: { card: "summary_large_image", title: siteConfig.seo.title, description: siteConfig.seo.description, images: [siteConfig.seo.ogImage] },
};

export default function Home() {
  return <HomeCalculator />;
}

