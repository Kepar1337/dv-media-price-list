import type { HeroData } from '@/data/pricing';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Hero({ hero }: { hero: HeroData }) {
  return (
    <section className="hero" id="top" aria-label="Про нас">
      <div className="hero__bg" aria-hidden="true" />
      <div className="page">
        <div className="hero__grid">
          <div>
            <span className="hero__label" aria-hidden="true">
              <span className="dot" />
              <span>{hero.label}</span>
            </span>
            <h1>
              {hero.headline_pre} <em>{hero.headline_em}</em>
            </h1>
            <p className="hero__lede">{hero.supporting}</p>
            <div className="hero__ctas">
              <a className="btn btn--primary" href="#pricing">
                Дивитись канали <ArrowIcon />
              </a>
              <a className="btn btn--ghost" href="#contacts">Забронювати слот</a>
            </div>
          </div>
          <aside className="hero__aside" aria-label="Ключові показники">
            <div className="trust" role="list">
              {hero.stats.map((stat) => (
                <div className="trust__cell" key={stat.k} role="listitem">
                  <div className="trust__k">{stat.k}</div>
                  <div className="trust__v">{stat.v}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
