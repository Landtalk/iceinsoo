"use client";

import { siteConfig } from "../config/siteConfig";

export function KakaoChannelButton({
  variant = "primary",
  label = "카카오톡 채널 추가",
  location = "unknown",
  className = "",
}) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "kakao_channel_click", {
        location,
        button_text: label,
        page_path: window.location.pathname,
      });
    }
  };

  const classes = `kakao-channel-button ${variant} ${className}`.trim();
  const content = (
    <>
      <span className="kakao-bubble-icon" aria-hidden="true" />
      <span>{label}</span>
    </>
  );

  if (!siteConfig.kakaoChannelUrl) {
    return <span className={`${classes} disabled`} aria-disabled="true">{content}</span>;
  }

  return (
    <a
      className={classes}
      href={siteConfig.kakaoChannelUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${siteConfig.kakaoChannelName}, 새 탭에서 열림`}
      onClick={handleClick}
    >
      {content}
    </a>
  );
}

export function KakaoFloatingButton() {
  if (!siteConfig.showKakaoFloatingButton) return null;
  return <KakaoChannelButton variant="floating" label="채널 문의" location="floating" />;
}

