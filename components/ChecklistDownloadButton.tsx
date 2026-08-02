"use client";

import { useState } from "react";

const parts = Array.from({ length: 7 }, (_, index) =>
  `/downloads/checklist.part${String(index + 1).padStart(2, "0")}.txt`,
);

export function ChecklistDownloadButton() {
  const [downloading, setDownloading] = useState(false);
  const download = async () => {
    setDownloading(true);
    try {
      const encoded = (await Promise.all(parts.map(async (part) => {
        const response = await fetch(part);
        if (!response.ok) throw new Error("체크리스트 파일을 불러오지 못했습니다.");
        return response.text();
      }))).join("");
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
      const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "무인아이스크림 인수 체크리스트.pdf";
      anchor.click();
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  };
  return <button className="hero-primary" type="button" onClick={download} disabled={downloading} aria-label="무인아이스크림 인수 체크리스트 PDF 다운로드">
    {downloading ? "다운로드 준비 중…" : "무료 체크리스트 PDF 다운로드"}
  </button>;
}

