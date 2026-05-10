import type { BrandData } from '@/data/pricing';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Header({ brand }: { brand: BrandData }) {
  return (
    <header className="hdr">
      <div className="page hdr__inner">
        <a href="#top" className="brand" aria-label={brand.name}>
          <span className="brand__mark" aria-hidden="true">{brand.mark}</span>
          <span className="brand__name">{brand.name}</span>
          <span className="brand__tag">{brand.tagline}</span>
        </a>
        <nav className="nav" aria-label="Навігація по сторінці">
          <a href="#formats">Формати</a>
          <a href="#pricing">Канали</a>
          <a href="#packages">Пакети</a>
          <a href="#services">Послуги</a>
          <a href="#faq">FAQ</a>
          <a href="#contacts">Контакти</a>
        </nav>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a className="btn btn--sm btn--ghost" href="#pricing">Каталог</a>
          <a className="btn btn--sm btn--primary" href="#contacts">
            Забронювати <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
