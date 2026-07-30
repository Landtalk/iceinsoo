import type { DiagnosisResult } from "../lib/calculate";
import { StatisticCard } from "./StatisticCard";

const money=(value:number)=>`${Math.round(value).toLocaleString("ko-KR")}만원`;
export function ResultCard({result}:{result:DiagnosisResult}){return <>
  <div className="score-card"><div className="score-ring" style={{"--score":`${result.totalScore*3.6}deg`} as React.CSSProperties}><div><strong>{result.totalScore}</strong><span>/ 100점</span></div></div><div className="score-copy"><p className="stars" aria-label={`별점 ${result.stars}점`}>{"★".repeat(result.stars)}<i>{"★".repeat(5-result.stars)}</i></p><h3>{result.diagnosis}</h3><p>{result.summary}</p></div></div>
  <div className="metric-grid"><StatisticCard label="예상 월순이익" value={money(result.monthlyNetProfit)} note="매출 − 모든 운영비" danger={result.monthlyNetProfit<0}/><StatisticCard label="권리금 회수기간" value={result.paybackMonths===null?"회수 어려움":`${result.paybackMonths}개월`} note={result.paybackMonths?`약 ${(result.paybackMonths/12).toFixed(1)}년`:"순이익 개선 필요"}/><StatisticCard label="총 진단점수" value={`${result.totalScore}점`} note={`별점 ${result.stars} / 5`}/></div>
  <div className="breakdown card" id="criteria"><h3>항목별 평가</h3>{result.categories.map(item=><div className="score-row" key={item.label}><div><span>{item.icon} {item.label}</span><b>{item.score} / {item.max}</b></div><div className="bar"><i style={{width:`${item.score/item.max*100}%`}}/></div></div>)}</div>
  <div className="insight-grid"><article className="card good"><h3><span>✓</span> 장점</h3><ul>{result.goodPoints.map(v=><li key={v}>{v}</li>)}</ul></article><article className="card caution"><h3><span>!</span> 주의사항</h3><ul>{result.cautionPoints.map(v=><li key={v}>{v}</li>)}</ul></article></div>
  <article className="action-card"><div className="action-icon">→</div><div><span>추천 행동</span><h3>{result.recommendedAction}</h3><p>매출을 10~20% 낮춘 보수적 조건으로도 다시 계산해 실제 인수 위험을 비교하세요.</p></div></article>
  </>}

