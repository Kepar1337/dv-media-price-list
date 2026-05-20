import type { BrandData } from '@/data/pricing';

export default function Footer({ brand }: { brand: BrandData }) {
  const year = new Date().getFullYear();
  return (
    <footer className="page ftr">
      <div>© {year} {brand.name} · Реклама в Telegram</div>
      <nav className="ftr__links" aria-label="Додаткові посилання">
        <a href="#pricing">Канали</a>
        <a href="#packages">Пакети</a>
        <a href="#faq">FAQ</a>
        <a href="#contacts">Контакти</a>
      </nav>
      <div>{brand.tagline}</div>
    </footer>
  );
}
