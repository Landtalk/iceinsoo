import {
  BRAND_NAME,
  CHECKLIST_URL,
  CHECKLIST_DOWNLOAD_URL,
  CHECKLIST_PAGE_URL,
  OG_IMAGE,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_URL,
  SMART_STORE_EBOOK_URL,
} from "../../lib/constants";

export const siteConfig = {
  siteUrl: SITE_URL,
  brandName: BRAND_NAME,
  smartStoreEbookUrl: SMART_STORE_EBOOK_URL,
  kakaoChannelUrl: "https://pf.kakao.com/_SdtxnX",
  kakaoChannelName: "무인아이스크림 인수연구소",
  checklistUrl: CHECKLIST_URL,
  checklistPath: CHECKLIST_PAGE_URL,
  checklistDownloadUrl: CHECKLIST_DOWNLOAD_URL,
  showKakaoFloatingButton: false,
  showDiagnosisCount: false,
  seo: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    ogImage: OG_IMAGE,
  },
} as const;

export const SHOW_DIAGNOSIS_COUNT = siteConfig.showDiagnosisCount;
