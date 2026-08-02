import type { Metadata } from "next";
import { StaticPage } from "../../components/StaticPage";
export const metadata: Metadata={title:"이용약관 및 면책 안내 | 무인아이스크림 인수연구소",description:"인수 계산 결과의 이용 범위와 면책 사항을 안내합니다.",alternates:{canonical:"/terms"}};
export default function Terms(){return <StaticPage eyebrow="TERMS & DISCLAIMER" title="이용약관 및 면책 안내" description="인수 계산 결과를 안전하게 활용하기 전에 아래 내용을 확인해 주세요." sections={[{heading:"서비스의 성격",paragraphs:["무인아이스크림 인수연구소는 사용자가 입력한 값을 정해진 계산식과 평가 기준에 적용하는 참고용 도구입니다. 투자 자문, 세무 자문, 법률 자문을 제공하지 않습니다."]},{heading:"결과의 한계",paragraphs:["실제 매출과 비용은 계절, 상권, 계약 조건, 상품 구성, 설비 상태 등 다양한 요인에 따라 달라집니다. 계산 결과는 실제 수익이나 투자금 회수를 보장하지 않습니다."]},{heading:"사용자의 확인 의무",paragraphs:["계약 전 최근 12개월 매출자료, 임대차계약서, 권리금 내역, 전기·관리비, 시설 상태와 인허가 사항을 직접 확인하고 필요하면 관련 전문가의 조언을 받아야 합니다."]},{heading:"콘텐츠 이용",paragraphs:["서비스의 문구, 구성과 계산 결과 화면을 무단 복제하거나 상업적으로 재배포할 수 없습니다. 개인적인 매장 인수와 무인아이스크림 창업 검토 목적의 이용은 가능합니다."]}]}/>}

