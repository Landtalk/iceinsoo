/**
 * 무인아이스크림점 운영용품 데이터.
 * affiliateUrl은 실제 쿠팡파트너스 링크가 준비되면 상품별로 입력합니다.
 */
export const storeSupplies = [
  { id:"cleaning-mop",category:"청소·정리",name:"밀대형 물걸레 청소도구",description:"바닥에 녹은 아이스크림이나 음료 자국을 짧은 방문 시간 안에 빠르게 정리하는 데 필요합니다.",recommendedFor:"매장 바닥 오염이 잦거나 하루 방문 시간이 짧은 점주",checklist:["헤드 교체 가능 여부","세척·건조 편의성","매장 통로에 맞는 폭"],affiliateUrl:"",personallyUsed:false,priority:"essential" },
  { id:"cleaning-bin",category:"청소·정리",name:"뚜껑형 분리수거함",description:"포장지와 영수증이 보이지 않게 정리되어 무인매장의 첫인상을 유지할 수 있습니다.",recommendedFor:"쓰레기 배출량이 많거나 매장 정돈 상태가 고민인 점주",checklist:["봉투 규격","뚜껑 개폐 방식","세척 가능한 소재"],affiliateUrl:"",personallyUsed:false,priority:"essential" },
  { id:"display-label",category:"상품 진열·가격 관리",name:"교체형 가격표 홀더",description:"가격 변경과 행사 안내를 빠르게 반영하고 고객의 가격 문의를 줄이는 데 도움이 됩니다.",recommendedFor:"가격 변경이 잦거나 상품 종류가 많은 매장",checklist:["선반 두께와 고정 방식","라벨지 규격","냉동고 내부 저온 사용 가능 여부"],affiliateUrl:"",personallyUsed:false,priority:"essential" },
  { id:"display-divider",category:"상품 진열·가격 관리",name:"선반용 상품 칸막이",description:"작은 상품이 섞이거나 넘어지는 것을 막아 진열 복구 시간을 줄일 수 있습니다.",recommendedFor:"과자·음료·소형 생활용품을 함께 판매하는 점주",checklist:["선반 깊이","칸막이 높이","간격 조절 가능 여부"],affiliateUrl:"",personallyUsed:false,priority:"optional" },
  { id:"security-cctv-sign",category:"보안",name:"CCTV 촬영 안내 표지",description:"촬영 사실과 관리 목적을 명확히 알리고 고객이 쉽게 확인할 수 있도록 안내합니다.",recommendedFor:"CCTV를 운영 중이거나 신규 설치를 준비하는 매장",checklist:["필수 안내 문구","설치 위치의 가시성","실제 운영 정책과 문구 일치 여부"],affiliateUrl:"",personallyUsed:false,priority:"essential" },
  { id:"security-door-alarm",category:"보안",name:"출입문 알림 센서",description:"점주 방문 중이거나 가까운 곳에서 관리할 때 출입 상황을 소리로 확인하는 보조 수단입니다.",recommendedFor:"관리 공간과 출입문이 떨어져 있는 매장",checklist:["감지 거리","음량 조절","배터리 교체 주기"],affiliateUrl:"",personallyUsed:false,priority:"later" },
  { id:"power-thermometer",category:"냉동고·전기 관리",name:"최고·최저 온도계",description:"냉동고의 온도 변화를 확인해 상품 해동이나 설비 이상을 조기에 발견하는 데 필요합니다.",recommendedFor:"냉동고를 여러 대 운영하거나 야간 온도 변화가 걱정되는 점주",checklist:["측정 가능 온도 범위","최고·최저 기록 기능","센서 설치 방식"],affiliateUrl:"",personallyUsed:false,priority:"essential" },
  { id:"power-strip",category:"냉동고·전기 관리",name:"고용량 누전차단 멀티탭",description:"관리용 소형 기기의 전원을 구분하고 과부하 위험을 낮추기 위한 보조 용품입니다.",recommendedFor:"POS·공유기·관리 기기 전원선이 복잡한 매장",checklist:["정격 전력","누전·과부하 차단 여부","냉동고 직접 연결 금지 여부 확인"],affiliateUrl:"",personallyUsed:false,priority:"optional" },
  { id:"stock-scanner",category:"발주·재고 관리",name:"블루투스 바코드 스캐너",description:"상품 코드를 빠르게 확인하고 재고 목록을 정리할 때 반복 입력을 줄일 수 있습니다.",recommendedFor:"취급 품목이 많고 스프레드시트로 재고를 관리하는 점주",checklist:["사용 기기 호환성","한글·숫자 입력 모드","충전 방식과 사용 시간"],affiliateUrl:"",personallyUsed:false,priority:"optional" },
  { id:"stock-label",category:"발주·재고 관리",name:"재고 위치 라벨",description:"창고와 진열대의 품목 위치를 구분해 발주 확인과 보충 시간을 단축합니다.",recommendedFor:"창고 공간이 좁거나 여러 사람이 보충 업무를 하는 매장",checklist:["접착면 재질","제거 시 자국 여부","방수·저온 내구성"],affiliateUrl:"",personallyUsed:false,priority:"essential" },
  { id:"visit-bag",category:"점주 방문 관리",name:"점주 방문용 수납가방",description:"가격표, 장갑, 충전기, 간단한 수리도구를 한 번에 가지고 다녀 누락을 줄입니다.",recommendedFor:"여러 매장을 관리하거나 대중교통으로 방문하는 점주",checklist:["내부 칸막이","세척 가능한 바닥","휴대 무게"],affiliateUrl:"",personallyUsed:false,priority:"optional" },
  { id:"visit-timer",category:"점주 방문 관리",name:"디지털 작업 타이머",description:"청소·진열·재고 확인에 걸리는 시간을 구분해 실제 관리시간을 측정할 수 있습니다.",recommendedFor:"방문 시간을 줄이거나 업무 순서를 표준화하려는 점주",checklist:["구간 기록 기능","알림음 조절","한 손 조작 편의성"],affiliateUrl:"",personallyUsed:false,priority:"later" },
];

export const supplyCategories = ["전체","청소·정리","상품 진열·가격 관리","보안","냉동고·전기 관리","발주·재고 관리","점주 방문 관리"];

