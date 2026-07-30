export function StatisticCard({label,value,note,danger=false}:{label:string;value:string;note:string;danger?:boolean}){return <article><span>{label}</span><strong className={danger?"danger":""}>{value}</strong><small>{note}</small></article>}

