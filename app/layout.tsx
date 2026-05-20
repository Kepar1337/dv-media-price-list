import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { getSiteUrl } from '@/lib/siteUrl';
import { pricingData } from '@/data/pricing';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-ui',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = getSiteUrl();
const TITLE = 'DV Media Group — рекламний прайс-лист Telegram';
const DESCRIPTION =
  'Прайс-лист рекламних розміщень у Telegram-каналах DV Media Group. 13 каналів, 587K підписників, 4 формати реклами.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'реклама в Telegram',
    'Telegram канали',
    'медіа-кіт',
    'прайс-лист реклами',
    'DV Media Group',
    'таргетована реклама',
    'українські Telegram канали',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'DV Media Group',
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#09090B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: pricingData.brand.name,
    url: SITE_URL,
    description: DESCRIPTION,
    contactPoint: pricingData.contacts.direct.map((c) => ({
      '@type': 'ContactPoint',
      contactType: c.label,
      url: c.href,
    })),
    sameAs: pricingData.contacts.direct
      .filter((c) => c.href.startsWith('http'))
      .map((c) => c.href),
  };

  return (
    <html
      lang="uk"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
