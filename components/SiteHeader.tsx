"use client";

import { useState } from "react";
import { BRAND_NAME, SMART_STORE_EBOOK_URL } from "../lib/constants";

const items = [
  ["홈", "/#top"],
  ["무료 인수 진단", "/#diagnosis"],
  ["인수 판단 기준", "/#criteria"],
  ["운영 가이드", "/#guide"],
  ["운영용품", "/store-supplies"],
  ["인수 체크리스트", "/checklist"],
  ["전자책", "/#ebook"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="site-nav" aria-label="주요 메뉴">
      <a className="brand" href="/#top" onClick={() => setOpen(false)}><span>🍦</span>{BRAND_NAME}</a>
      <button className="menu-button" type="button" aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {items.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-ebook" href={SMART_STORE_EBOOK_URL} target="_blank" rel="noopener noreferrer">전자책 보기 ↗</a>
      </div>
    </nav>
  );
}

