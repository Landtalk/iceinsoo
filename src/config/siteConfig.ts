export const siteConfig = {
  siteUrl: "https://iceinsoo.kr",
  brandName: "무인아이스크림 인수연구소",
  smartStoreEbookUrl: "https://smartstore.naver.com/heidelberg2018/products/12029387510",
  kakaoChannelUrl: "https://pf.kakao.com/_SdtxnX",
  kakaoChannelName: "무인아이스크림 인수연구소",
  checklistUrl: "https://iceinsoo.kr/checklist-download",
  checklistPath: "/checklist",
  showKakaoFloatingButton: false,
  showDiagnosisCount: false,
  seo: {
    title: "무인아이스크림 인수 계산기｜월순이익·권리금 회수기간 무료 진단",
    description: "운영 중인 무인아이스크림 할인점의 월매출, 원가율, 월세, 관리비와 권리금을 입력해 예상 월순이익과 권리금 회수기간을 무료로 계산하세요. 실제 운영 경험을 바탕으로 인수 전 확인사항도 제공합니다.",
    ogImage: "/og.png",
  },
} as const;

export const SHOW_DIAGNOSIS_COUNT = siteConfig.showDiagnosisCount;

