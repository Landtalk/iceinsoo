export type SalesCTAProps={eyebrow:string;title:string;description:string;buttonLabel:string;href:string;variant:"ebook"|"report"|"inquiry"};

export function SalesCTA({eyebrow,title,description,buttonLabel,href,variant}:SalesCTAProps){return <article className={`conversion-banner ${variant}-conversion`}><div><span>{eyebrow}</span><h3>{title}</h3><p>{description}</p></div><a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${buttonLabel}, 새 탭에서 열림`}>{buttonLabel} ↗</a></article>}

