import { SMART_STORE_EBOOK_URL } from "../lib/constants";
import { SalesCTA, type SalesCTAProps } from "./SalesCTA";

export function EbookCTA(props:Partial<Omit<SalesCTAProps,"variant">>={}){return <SalesCTA variant="ebook" eyebrow={props.eyebrow??"STEP 02 · 전자책"} title={props.title??"2달 만에 깨달은 무인 창업의 민낯"} description={props.description??"실제 운영자가 작성한 무인아이스크림 창업 실전 노하우"} buttonLabel={props.buttonLabel??"전자책 구매하기"} href={props.href??SMART_STORE_EBOOK_URL}/>}

