import type { AdFormat } from '@/data/pricing';

export default function AdFormats({ formats }: { formats: AdFormat[] }) {
  return (
    <section className="section" id="formats" aria-labelledby="formats-title">
      <div className="page">
        <div className="section-head">
          <div className="section-head__left">
            <span className="eyebrow" aria-hidden="true">01 · Формати реклами</span>
            <h2 className="section-title" id="formats-title">
              Чотири стандартизовані формати.
            </h2>
          </div>
          <p className="section-lede">
            Однакові чотири опції для кожного каналу. Обираєте формат, далі обираєте
            канал або сет — ціна рахується по каналу.
          </p>
        </div>

        <div className="formats" role="list">
          {formats.map((f, i) => (
            <div key={f.code} className="format" role="listitem">
              <div className="format__code">
                <span className="format__idx">0{i + 1}</span>
                <span className="format__name">{f.name}</span>
              </div>
              <div className="format__desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
