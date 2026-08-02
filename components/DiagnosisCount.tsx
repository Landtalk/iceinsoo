"use client";

import { useEffect, useState } from "react";
import { SHOW_DIAGNOSIS_COUNT } from "../src/config/siteConfig";
import { diagnosisCountService } from "../services/DiagnosisCountService";

export function DiagnosisCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (SHOW_DIAGNOSIS_COUNT) void diagnosisCountService.getPublishedCount().then(setCount);
  }, []);

  if (!SHOW_DIAGNOSIS_COUNT || count === null) return null;
  return <p className="diagnosis-count" aria-label={`누적 인수진단 완료 ${count.toLocaleString("ko-KR")}건`}>
    누적 인수진단 완료 <strong>{count.toLocaleString("ko-KR")}건</strong>
  </p>;
}

