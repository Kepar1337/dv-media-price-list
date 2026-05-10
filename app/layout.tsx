import type { Metadata } from 'next';
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'DV Media Group — рекламний прайс-лист Telegram',
  description:
    'Прайс-лист рекламних розміщень у Telegram-каналах DV Media Group. 13 каналів, 587K підписників, 4 формати реклами.',
  openGraph: {
    title: 'DV Media Group — рекламний прайс-лист Telegram',
    description:
      'Прайс-лист рекламних розміщень у Telegram-каналах DV Media Group. 13 каналів, 587K підписників, 4 формати реклами.',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
