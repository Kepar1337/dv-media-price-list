'use client';

import { useState, useMemo } from 'react';
import type { Channel } from '@/data/pricing';
import ChannelCard from './ChannelCard';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

type SortKey = 'default' | 'subs' | 'er' | 'price';

const SORT_OPTIONS: { k: SortKey; l: string }[] = [
  { k: 'default', l: 'Мережа' },
  { k: 'subs', l: 'Підписники' },
  { k: 'er', l: 'ER' },
  { k: 'price', l: 'Ціна' },
];

export default function ChannelList({ channels }: { channels: Channel[] }) {
  const [sort, setSort] = useState<SortKey>('default');
  const [filter, setFilter] = useState('Усі');

  const categories = useMemo(
    () => ['Усі', ...Array.from(new Set(channels.map((c) => c.category)))],
    [channels],
  );

  const rows = useMemo(() => {
    let result = [...channels];
    if (filter !== 'Усі') result = result.filter((c) => c.category === filter);
    if (sort === 'subs') result.sort((a, b) => b.subs - a.subs);
    if (sort === 'er') result.sort((a, b) => b.er - a.er);
    if (sort === 'price') result.sort((a, b) => a.prices['1/24'] - b.prices['1/24']);
    return result;
  }, [channels, sort, filter]);

  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="page">
        <div className="section-head">
          <div className="section-head__left">
            <span className="eyebrow" aria-hidden="true">02 · Каталог каналів</span>
            <h2 className="section-title" id="pricing-title">
              13 каналів · усі ціни на одній сторінці.
            </h2>
          </div>
          <p className="section-lede">
            Переглядайте, порівнюйте, обирайте. Ціна за розміщення для кожного
            формату. Нативну рекламу обговорюємо індивідуально.
          </p>
        </div>

        <div className="pl-controls">
          <div className="pl-filters" role="group" aria-label="Фільтр за категорією">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter${filter === cat ? ' is-active' : ''}`}
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="pl-sort">
            <span className="pl-sort__label" id="sort-label">Сортування</span>
            <div className="seg seg--inline" role="group" aria-labelledby="sort-label">
              {SORT_OPTIONS.map((s) => (
                <button
                  key={s.k}
                  className={sort === s.k ? 'is-active' : ''}
                  aria-pressed={sort === s.k}
                  onClick={() => setSort(s.k)}
                >
                  {s.l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="ch-grid" role="list" aria-label="Каталог каналів">
          {rows.map((channel) => (
            <div key={channel.name} role="listitem">
              <ChannelCard channel={channel} />
            </div>
          ))}
        </div>

        <div className="pl-foot">
          <div>Усі ціни вказано у UAH. ПДВ не включено. Ціни дійсні до Q2 · 2026.</div>
          <a className="btn btn--sm btn--ghost" href="#contacts">
            Запитати повний медіакіт <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
