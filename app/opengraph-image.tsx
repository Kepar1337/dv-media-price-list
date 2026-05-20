import { ImageResponse } from 'next/og';

export const alt = 'DV Media Group — рекламний прайс-лист Telegram';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#09090B',
          backgroundImage:
            'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(59,130,246,0.18), transparent 60%)',
          color: '#E4E4E7',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#18181B',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#E4E4E7',
              fontSize: 22,
              fontWeight: 700,
              borderRadius: 12,
            }}
          >
            DV
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>DV Media Group</div>
            <div style={{ fontSize: 16, color: '#A1A1AA' }}>Telegram · 2026</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              border: '1px solid rgba(59,130,246,0.35)',
              borderRadius: 999,
              fontSize: 16,
              color: '#3B82F6',
              alignSelf: 'flex-start',
            }}
          >
            Рекламна мережа · Telegram · 2026
          </div>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#E4E4E7',
              maxWidth: 1000,
            }}
          >
            Рекламний прайс-лист.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 56, color: '#D4D4D8' }}>
          <Stat k="Підписників у мережі" v="587K" />
          <Stat k="Середнє охоплення" v="~68K" />
          <Stat k="Середній ER" v="13,6%" />
          <Stat k="Каналів" v="13" />
        </div>
      </div>
    ),
    { ...size },
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontSize: 14, color: '#A1A1AA', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {k}
      </div>
      <div style={{ fontSize: 32, fontWeight: 700, color: '#E4E4E7' }}>{v}</div>
    </div>
  );
}
