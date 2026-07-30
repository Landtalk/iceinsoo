import type { Metadata } from "next";
import { StaticPage } from "../../components/StaticPage";
export const metadata: Metadata={title:"서비스 소개 | 아이스체크",description:"아이스체크가 무인아이스크림 예비 창업자의 판단을 돕는 방법을 소개합니다.",alternates:{canonical:"/about"}};
export default function About(){return <StaticPage eyebrow="ABOUT ICECHECK" title="감이 아닌 숫자로, 더 나은 창업 판단" description="아이스체크는 예비 점주가 매장의 수익성과 운영 부담을 계약 전에 차분히 살펴보도록 돕습니다." sections={[{heading:"서비스 목표",paragraphs:["복잡한 사업성 검토의 출발점을 누구나 이해할 수 있는 계산으로 만드는 것이 목표입니다. 월순이익, 권리금 회수기간, 월세 비율과 운영 조건을 한 화면에서 비교할 수 있습니다."]},{heading:"우리가 중요하게 보는 것",paragraphs:["높은 매출보다 실제로 남는 순이익, ‘무인’이라는 이름보다 실제 관리시간, 낙관적인 한 번의 계산보다 보수적인 시나리오 비교를 중요하게 봅니다."]},{heading:"진단 결과의 역할",paragraphs:["결과는 계약 결정을 대신하지 않습니다. 매출 증빙과 임대차 조건, 시설 상태, 상권 변화를 직접 확인하기 전 필요한 질문을 찾는 참고 자료입니다."]}]}/>}

