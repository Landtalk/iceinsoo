type AdSlotProps = { placement?: string; enabled?: boolean };

/** 애드센스 도입 시 enabled와 광고 코드를 연결하기 위한 비활성 슬롯입니다. */
export function AdSlot({ placement = "content", enabled = false }: AdSlotProps) {
  if (!enabled) return null;
  return <aside className="ad-slot" aria-label="광고" data-placement={placement} />;
}

