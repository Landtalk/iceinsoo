import type { Metadata } from "next";
import { StaticPage } from "../../components/StaticPage";
export const metadata: Metadata={title:"문의 | 아이스체크",description:"아이스체크 서비스와 전자책 관련 문의 방법을 안내합니다.",alternates:{canonical:"/contact"}};
export default function Contact(){return <StaticPage eyebrow="CONTACT" title="궁금한 점을 남겨주세요" description="서비스 오류, 계산 기준, 콘텐츠와 전자책에 관한 의견을 기다립니다." sections={[{heading:"서비스 문의",paragraphs:["페이지 하단의 ‘카카오톡 채널’ 링크에서 1:1 채팅으로 문의할 수 있습니다. 확인 후 순차적으로 답변드립니다.","오류를 제보할 때에는 사용한 기기와 브라우저, 입력 조건, 발생한 상황을 함께 정리하면 더 빠르게 확인할 수 있습니다."]},{heading:"전자책 문의",paragraphs:["구매, 결제와 다운로드 관련 문의는 연결된 스마트스토어의 판매자 문의 기능을 이용해 주세요."]},{heading:"답변 안내",paragraphs:["개인정보나 계약서 원본, 계좌정보 등 민감한 정보는 보내지 마세요. 인수연구소는 개별 매장의 투자 여부를 대신 결정하거나 수익을 보장하지 않습니다."]}]}/>}

