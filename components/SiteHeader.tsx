"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { BRAND_NAME, SMART_STORE_EBOOK_URL } from "../lib/constants";

const items = [
  ["홈", "/#top"],
  ["무료 인수 진단", "/#diagnosis"],
  ["인수 판단 기준", "/#criteria"],
  ["운영 가이드", "/#guide"],
  ["운영용품", "/store-supplies"],
  ["인수 체크리스트", "/checklist"],
] as const;

function releasePageScroll() {
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.style.touchAction = "";
}

function findHashTarget(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return null;
  return document.getElementById(id) ?? (id === "criteria" ? document.querySelector<HTMLElement>(".data-vision") : null);
}

function scrollToHash(hash: string, smooth = true) {
  const target = findHashTarget(hash);
  if (!target) return false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: smooth && !reducedMotion ? "smooth" : "auto", block: "start" });
  return true;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    releasePageScroll();
    const handleHashChange = () => {
      releasePageScroll();
      requestAnimationFrame(() => scrollToHash(window.location.hash, false));
    };
    if (window.location.hash) requestAnimationFrame(handleHashChange);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      releasePageScroll();
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
    releasePageScroll();
  };

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const url = new URL(href, window.location.href);
    const isCurrentPage = url.origin === window.location.origin && url.pathname === window.location.pathname;
    if (!isCurrentPage || !url.hash || !findHashTarget(url.hash)) {
      closeMenu();
      return;
    }
    event.preventDefault();
    closeMenu();
    requestAnimationFrame(() => {
      scrollToHash(url.hash);
      if (window.location.hash !== url.hash) window.history.pushState(null, "", url.hash);
    });
  };

  return (
    <nav className="site-nav" aria-label="주요 메뉴">
      <a className="brand" href="/#top" onClick={(event) => handleAnchorClick(event, "/#top")}><span>🍦</span>{BRAND_NAME}</a>
      <button className="menu-button" type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} onClick={() => open ? closeMenu() : setOpen(true)}><i /><i /><i /></button>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {items.map(([label, href]) => <a key={label} href={href} onClick={(event) => handleAnchorClick(event, href)}>{label}</a>)}
        <a className="nav-ebook" href={SMART_STORE_EBOOK_URL} target="_blank" rel="noopener noreferrer">전자책 보기 ↗</a>
      </div>
    </nav>
  );
}
