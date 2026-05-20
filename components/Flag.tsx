type GeoCode = 'UA' | 'DE' | 'PL' | 'EU';

const SIZE_W = 16;
const SIZE_H = 12;

function FlagUA() {
  return (
    <>
      <rect width="16" height="6" fill="#005BBB" />
      <rect y="6" width="16" height="6" fill="#FFD500" />
    </>
  );
}

function FlagDE() {
  return (
    <>
      <rect width="16" height="4" fill="#000" />
      <rect y="4" width="16" height="4" fill="#DD0000" />
      <rect y="8" width="16" height="4" fill="#FFCE00" />
    </>
  );
}

function FlagPL() {
  return (
    <>
      <rect width="16" height="6" fill="#fff" />
      <rect y="6" width="16" height="6" fill="#DC143C" />
    </>
  );
}

function FlagEU() {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r = 3.6;
    const cx = 8 + r * Math.cos(angle);
    const cy = 6 + r * Math.sin(angle);
    return <circle key={i} cx={cx} cy={cy} r={0.55} fill="#FFCC00" />;
  });
  return (
    <>
      <rect width="16" height="12" fill="#003399" />
      {stars}
    </>
  );
}

const FLAGS: Record<GeoCode, () => React.ReactElement> = {
  UA: FlagUA,
  DE: FlagDE,
  PL: FlagPL,
  EU: FlagEU,
};

export function Flag({ geo, className }: { geo: string; className?: string }) {
  const Inner = FLAGS[geo as GeoCode];
  if (!Inner) return null;
  return (
    <svg
      viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
      width={SIZE_W}
      height={SIZE_H}
      className={className}
      aria-hidden="true"
      style={{ display: 'block', borderRadius: 1 }}
    >
      <Inner />
    </svg>
  );
}
