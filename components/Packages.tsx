import type { Package } from '@/data/pricing';
import { fmt } from '@/lib/format';
import { ArrowIcon, CheckIcon } from './icons';

export default function Packages({ packages }: { packages: Package[] }) {
  return (
    <section className="section" id="packages" aria-labelledby="packages-title">
      <div className="page">
        <div className="section-head">
          <div className="section-head__left">
            <span className="eyebrow" aria-hidden="true">03 · Пакети</span>
            <h2 className="section-title" id="packages-title">
              Комбіновані розміщення.
            </h2>
            <span className="section-note">Приклад — фінальні пакети уточнюються.</span>
          </div>
          <p className="section-lede">
            Популярні комбінації з готовою ціною для швидкого бронювання. Усі пакети
            адаптуються під задачу.
          </p>
        </div>

        <div className="pkgs">
          {packages.map((pkg, i) => {
            const featured = i === 1;
            return (
              <article key={pkg.name} className={`pkg${featured ? ' pkg--featured' : ''}`}>
                {featured && <div className="pkg__tag">Найчастіше</div>}
                <h3 className="pkg__name">{pkg.name}</h3>
                <p className="pkg__for">{pkg.for}</p>

                <div className="pkg__price-row">
                  <div className="pkg__price">
                    ₴ {fmt(pkg.price)}
                  </div>
                  <div className="pkg__turnaround">
                    Терміни
                    <span>{pkg.turnaround}</span>
                  </div>
                </div>

                <ul className="pkg__includes" aria-label="Що включено">
                  {pkg.includes.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className={`btn${featured ? ' btn--primary' : ''} pkg__cta`}
                  href="#contacts"
                >
                  {featured ? 'Замовити пакет' : `Обрати «${pkg.name}»`} <ArrowIcon />
                </a>
                {pkg.note && <div className="pkg__note">{pkg.note}</div>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
