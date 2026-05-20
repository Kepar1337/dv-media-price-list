import type { HeroData } from '@/data/pricing';
import { ArrowIcon } from './icons';

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
