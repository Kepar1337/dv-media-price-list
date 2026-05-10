import type { BrandData } from '@/data/pricing';

export default function Footer({ brand }: { brand: BrandData }) {
  return (
    <footer className="page ftr">
      <div>© 2026 {brand.name} · Реклама в Telegram</div>
      <nav className="ftr__links" aria-label="Додаткові посилання">
        <a href="#contacts">Медіакіт</a>
        <a href="#faq">Умови</a>
        <a href="#contacts">Конфіденційність</a>
      </nav>
      <div>v1.0 · Ціни оновлено — квітень 2026</div>
    </footer>
  );
}
