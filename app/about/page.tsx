import type { Metadata } from "next";
import { StaticPage } from "../../components/StaticPage";
export const metadata: Metadata={title:"서비스 소개 | 무인아이스크림 인수연구소",description:"운영 중인 무인아이스크림 매장의 인수 조건을 검토하는 인수 계산기를 소개합니다.",alternates:{canonical:"/about"}};
export default function About(){return <StaticPage eyebrow="ABOUT ICE LAB" title="감이 아닌 숫자로, 더 나은 인수 판단" description="운영 중인 무인아이스크림 할인점의 수익성과 운영 부담을 계약 전에 차분히 살펴보도록 돕습니다." sections={[{heading:"서비스 목표",paragraphs:["매도자가 제시한 매출과 수익을 같은 기준으로 다시 계산하는 출발점을 만드는 것이 목표입니다. 월순이익, 권리금 회수기간, 월세 비율과 운영 조건을 한 화면에서 비교할 수 있습니다."]},{heading:"직접 인수하고 운영한 경험",paragraphs:["운영 중이던 무인아이스크림 매장을 직접 인수해 2025년 한 해 동안 운영하며 매출, 발주, 재고, 성수기와 비수기, 관리시간과 권리금 회수 구조를 경험했습니다."]},{heading:"우리가 중요하게 보는 것",paragraphs:["높은 매출보다 실제로 남는 순이익, ‘무인’이라는 이름보다 실제 관리시간, 낙관적인 한 번의 계산보다 보수적인 시나리오 비교를 중요하게 봅니다."]},{heading:"진단 결과의 역할",paragraphs:["결과는 계약 결정을 대신하지 않습니다. 매출 증빙과 임대차 조건, 시설 상태, 상권 변화를 직접 확인하기 전 필요한 질문을 찾는 참고 자료입니다."]}]}/>}

