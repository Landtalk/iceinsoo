import { CHECKLIST_DOWNLOAD_URL } from "../lib/constants";

export function ChecklistDownloadLink({
  label = "무료 PDF 다운로드",
  className = "hero-primary",
  id,
}: {
  label?: string;
  className?: string;
  id?: string;
}) {
  return <a
    id={id}
    className={className}
    href={CHECKLIST_DOWNLOAD_URL}
    download="무인아이스크림 인수 체크리스트.pdf"
    aria-label="무인아이스크림 인수 체크리스트 PDF 다운로드"
    data-event="checklist_download"
  >{label}</a>;
}
