import type { Channel } from '@/data/pricing';
import { fmt } from '@/lib/format';

const StarIcon = () => (
  <svg viewBox="0 0 14 14" width="12" height="12" fill="currentColor" aria-hidden="true">
    <path d="M7 1l1.8 3.8 4.2.5-3.1 2.9.8 4.1L7 10.4 3.3 12.3l.8-4.1L1 5.3l4.2-.5L7 1z" />
  </svg>
);

const SparkIcon = () => (
  <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 1v4M7 9v4M1 7h4M9 7h4" />
  </svg>
);

const ExtIcon = () => (
  <svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 2H2v10h10V9M8 2h4v4M12 2 7 7" />
  </svg>
);

function ChannelBadge({ tag }: { tag?: string }) {
  if (tag === 'top') {
    return (
      <span className="ch-badge ch-badge--top">
        <StarIcon /> Топ-канал
      </span>
    );
  }
  if (tag === 'er') {
    return (
      <span className="ch-badge ch-badge--er">
        <SparkIcon /> Кращий ER
      </span>
    );
  }
  return null;
}

export default function ChannelCard({ channel }: { channel: Channel }) {
  const initials = channel.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <article className="ch-card" aria-label={channel.name}>
      <div className="ch-card__accent" aria-hidden="true" />
      <div className="ch-card__top">
        <div className="ch-card__av" aria-hidden="true">{initials}</div>
        <div className="ch-card__ta">
          <div className="ch-card__name-row">
            <div className="ch-card__name">{channel.name}</div>
            <ChannelBadge tag={channel.tag} />
          </div>
          <a
            className="ch-card__link"
            href={channel.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Відкрити канал ${channel.name} в Telegram`}
          >
            <ExtIcon /> {channel.handle}
          </a>
          <div className="ch-card__tags">
            <span className="chip">{channel.category}</span>
            <span className="chip chip--geo">{channel.geoFlag} {channel.geo}</span>
          </div>
        </div>
      </div>

      <div className="ch-card__stats" aria-label="Статистика каналу">
        <div className="ch-stat">
          <div className="ch-stat__v">{fmt(channel.subs)}</div>
          <div className="ch-stat__k">Підписники</div>
        </div>
        <div className="ch-stat">
          <div className="ch-stat__v">{fmt(channel.views)}</div>
          <div className="ch-stat__k">Перегляди</div>
        </div>
        <div className="ch-stat">
          <div className="ch-stat__v ch-stat__v--er">{channel.er}%</div>
          <div className="ch-stat__k">ER</div>
        </div>
      </div>

      <div className="ch-card__prices" aria-label="Ціни на рекламу">
        <div className="ch-price">
          <div className="ch-price__k">1/24</div>
          <div className="ch-price__v">₴ {fmt(channel.prices['1/24'])}</div>
        </div>
        <div className="ch-price">
          <div className="ch-price__k">2/48</div>
          <div className="ch-price__v">₴ {fmt(channel.prices['2/48'])}</div>
        </div>
        <div className="ch-price">
          <div className="ch-price__k">2/без вид.</div>
          <div className="ch-price__v">₴ {fmt(channel.prices['2/perm'])}</div>
        </div>
        <div className="ch-price ch-price--native">
          <div className="ch-price__k">Нативна</div>
          <a className="ch-price__req" href="#contacts">
            За запитом
          </a>
        </div>
      </div>
    </article>
  );
}
