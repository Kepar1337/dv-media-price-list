import type { Service } from '@/data/pricing';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Services({ services }: { services: Service[] }) {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="page">
        <div className="section-head">
          <div className="section-head__left">
            <span className="eyebrow" aria-hidden="true">04 · Послуги</span>
            <h2 className="section-title" id="services-title">
              Більше, ніж одне розміщення.
            </h2>
          </div>
          <p className="section-lede">
            Повний цикл послуг для власників каналів, брендів та агентств. Кожен
            запит обговорюється окремо.
          </p>
        </div>

        <div className="svcs" role="list">
          {services.map((svc, i) => (
            <div key={svc.name} className="svc" role="listitem">
              <div className="svc__head">
                <div className="svc__idx" aria-hidden="true">0{i + 1}</div>
                <div className="svc__name">{svc.name}</div>
              </div>
              <p className="svc__desc">{svc.desc}</p>
              <a className="svc__link" href="#contacts">
                Обговорити <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
