"use client";

import { useState } from "react";
import type { DiagnosisInput, DiagnosisResult } from "../lib/calculate";
import { calculatorService } from "../services/CalculatorService";

const initial:DiagnosisInput={monthlySales:1800,costRate:62,rent:180,maintenanceFee:20,premium:3000,area:12,dailyManagementHours:1.5,inventoryLevel:4,directOrderLevel:3,competitors:2,cardFeeRate:2.5,electricityCost:20,otherCost:10};
const fields=[["monthlySales","월매출","만원","최근 3개월 평균"],["costRate","상품 원가율","%","매출 대비 매입 비율"],["rent","월세","만원","부가세 포함 임차료"],["maintenanceFee","관리비","만원","공용 관리비 등"],["premium","권리금","만원","시설·영업 권리금"],["area","매장 면적","평","실사용 면적"],["dailyManagementHours","하루 관리시간","시간","진열·청소·발주 합산"],["competitors","경쟁 매장 수","곳","반경 500m 이내"]] as const;

function NumberField({name,label,unit,hint,value,onChange}:{name:keyof DiagnosisInput;label:string;unit:string;hint:string;value:number;onChange:(name:keyof DiagnosisInput,value:number)=>void}){return <label className="field"><span className="field-top"><strong>{label}</strong><small>{hint}</small></span><span className="input-wrap"><input aria-label={label} type="number" min="0" step={name==="dailyManagementHours"||name==="cardFeeRate"?".1":"1"} value={value} onChange={e=>onChange(name,Math.max(0,Number(e.target.value)))}/><b>{unit}</b></span></label>}
function LevelField({label,value,onChange}:{label:string;value:number;onChange:(value:number)=>void}){const labels=["매우 낮음","낮음","보통","좋음","매우 좋음"];return <fieldset className="level-field"><legend>{label}</legend><div className="levels">{labels.map((text,index)=><label key={text} className={value===index+1?"selected":""}><input type="radio" name={label} checked={value===index+1} onChange={()=>onChange(index+1)}/><span>{index+1}</span><small>{text}</small></label>)}</div></fieldset>}

export function Calculator({onCalculated,isSaving}:{onCalculated:(input:DiagnosisInput,result:DiagnosisResult)=>void;isSaving:boolean}){
  const [input,setInput]=useState(initial); const [advanced,setAdvanced]=useState(false); const setValue=(name:keyof DiagnosisInput,value:number)=>setInput(prev=>({...prev,[name]:value}));
  return <section className="form-card research-form" id="diagnosis"><div className="section-heading"><span>01</span><div><h2>인수 검토 조건 입력</h2><p>확인 가능한 최근 자료를 기준으로 입력해 주세요.</p></div></div>
    <div className="form-grid">{fields.map(([name,label,unit,hint])=><NumberField key={name} name={name} label={label} unit={unit} hint={hint} value={input[name]} onChange={setValue}/>)}</div>
    <div className="level-grid"><LevelField label="아이스크림 재고관리 수준" value={input.inventoryLevel} onChange={v=>setValue("inventoryLevel",v)}/><LevelField label="직접 발주 상품 수준" value={input.directOrderLevel} onChange={v=>setValue("directOrderLevel",v)}/></div>
    <button className="advanced-toggle" type="button" onClick={()=>setAdvanced(!advanced)} aria-expanded={advanced}><span>⚙ 계산 기본값 <small>수수료·전기료·기타 운영비</small></span><b>{advanced?"−":"+"}</b></button>
    {advanced&&<div className="advanced-panel"><NumberField name="cardFeeRate" label="카드수수료율" unit="%" hint="기본 2.5%" value={input.cardFeeRate} onChange={setValue}/><NumberField name="electricityCost" label="전기료" unit="만원" hint="기본 20만원" value={input.electricityCost} onChange={setValue}/><NumberField name="otherCost" label="기타 운영비" unit="만원" hint="기본 10만원" value={input.otherCost} onChange={setValue}/></div>}
    <button className="primary-button lab-button" type="button" aria-label="무료 인수 진단 결과 확인하기" disabled={isSaving} onClick={()=>onCalculated(input,calculatorService.calculate(input))}>{isSaving?"진단 중…":"무료 인수 진단 결과 확인하기"}<span>→</span></button>
    <p className="fine-print">입력한 정보와 계산 결과는 서버에 저장되지 않습니다.</p>
  </section>;
}

