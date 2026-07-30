import type { Metadata } from "next";
import { StaticPage } from "../../components/StaticPage";
export const metadata: Metadata={title:"개인정보처리방침 | 무인아이스크림 인수연구소",description:"창업 진단 입력정보와 서비스 이용 통계의 처리 방식을 안내합니다.",alternates:{canonical:"/privacy"}};
export default function Privacy(){return <StaticPage eyebrow="PRIVACY" title="개인정보처리방침" description="입력한 정보와 계산 결과는 서버에 저장되지 않습니다." sections={[{heading:"수집하지 않는 정보",paragraphs:["회원가입과 로그인을 제공하지 않으며 이름, 전화번호, 이메일, 상호명과 상세주소를 입력받거나 저장하지 않습니다."]},{heading:"창업 진단 데이터",paragraphs:["월매출, 원가율, 월세, 권리금 등 입력한 정보와 계산 결과는 서버에 전송하거나 저장하지 않습니다. 계산은 사용 중인 화면에서만 처리됩니다."]},{heading:"진단 완료 횟수",paragraphs:["향후 서비스 이용 통계를 위해 개인을 식별할 수 없는 진단 완료 횟수만 집계할 수 있습니다. 새로고침이나 결과 화면 재표시로 같은 완료 이벤트가 중복 집계되지 않도록 설계합니다."]},{heading:"외부 링크",paragraphs:["전자책과 카카오톡 채널 등 외부 사이트로 이동한 뒤의 정보 처리는 해당 서비스의 정책을 따릅니다."]},{heading:"방침 변경",paragraphs:["통계 수집 방식이나 처리 내용이 변경되면 본 방침을 먼저 갱신합니다. 시행일: 2026년 7월 31일"]}]}/>}

