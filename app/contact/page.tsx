import type { Metadata } from "next";
import { StaticPage } from "../../components/StaticPage";
export const metadata: Metadata={title:"인수진단 문의 | 무인아이스크림 인수연구소",description:"무인아이스크림 매장 인수진단 문의 전 준비자료와 분석 가능 여부 확인 절차를 안내합니다.",alternates:{canonical:"/contact"}};
export default function Contact(){return <StaticPage eyebrow="ACQUISITION REVIEW" title="인수진단 문의 전 준비하면 좋은 자료" description="자료가 충분한지 먼저 확인한 뒤 분석 가능한 경우에만 인수진단리포트 진행방법을 안내합니다." sections={[{heading:"준비하면 좋은 자료",paragraphs:["• 매물 광고 링크","• 최근 12개월 매출자료 보유 여부","• 보증금, 월세, 관리비","• 권리금과 시설·재고 인수금액","• 매장까지의 이동시간","• 가장 궁금한 점"]},{heading:"분석 가능 여부 사전 확인",paragraphs:["페이지 하단 카카오톡 채널의 1:1 채팅으로 보유한 자료의 종류를 알려주세요. 자료가 충분한지 먼저 확인하며, 분석 가능한 경우에만 리포트 진행방법을 안내합니다.","처음부터 계약서 원본, 계좌정보나 개인정보가 포함된 자료를 보내지 마세요."]},{heading:"안내 범위",paragraphs:["인수연구소는 개별 매장의 최종 투자 여부를 대신 결정하거나 수익을 보장하지 않습니다. 매출 증빙과 계약 조건의 사실 확인은 이용자가 직접 진행해야 합니다."]},{heading:"전자책 문의",paragraphs:["구매, 결제와 다운로드 관련 문의는 연결된 스마트스토어의 판매자 문의 기능을 이용해 주세요."]}]}/>}

