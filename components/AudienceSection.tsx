const audienceItems = [
  "매도자가 제시한 월매출과 순이익을 다시 계산하고 싶은 분",
  "권리금 회수기간이 적정한지 확인하고 싶은 분",
  "직장이나 육아와 매장 운영을 병행할 수 있는지 고민하는 분",
  "계약 전에 보수적인 조건으로 손익을 점검하고 싶은 분",
];

export function AudienceSection() {
  return <section className="audience-section" aria-labelledby="audience-title"><div><p className="eyebrow">WHO IT HELPS</p><h2 id="audience-title">이런 분께 도움이 됩니다</h2></div><ul>{audienceItems.map(item=><li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></section>;
}

