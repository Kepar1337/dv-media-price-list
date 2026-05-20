import type { Channel } from '@/data/pricing';
import { fmt } from '@/lib/format';
import { StarIcon, SparkIcon, ExtIcon, ArrowIcon } from './icons';
import { Flag } from './Flag';

function bookingHref(channelName: string, format?: string): string {
  const params = new URLSearchParams({ channel: channelName });
  if (format) params.set('format', format);
  return `/?${params.toString()}#contacts`;
}

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
            rel="noopener noreferrer"
            aria-label={`Відкрити канал ${channel.name} в Telegram`}
          >
            <ExtIcon /> Відкрити в Telegram
          </a>
          <div className="ch-card__tags">
            <span className="chip">{channel.category}</span>
            <span className="chip chip--geo">
              <Flag geo={channel.geo} /> {channel.geo}
            </span>
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
          <a className="ch-price__req" href={bookingHref(channel.name, 'Нативна реклама')}>
            За запитом
          </a>
        </div>
      </div>

      <a
        className="btn btn--sm btn--ghost ch-card__cta"
        href={bookingHref(channel.name)}
        aria-label={`Забронювати рекламу в каналі ${channel.name}`}
      >
        Забронювати <ArrowIcon />
      </a>
    </article>
  );
}
