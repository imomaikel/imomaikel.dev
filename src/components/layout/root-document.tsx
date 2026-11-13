import { Geist, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/config';
import '@/app/globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  display: 'swap',
});

// One root layout per locale so the static HTML carries the right `lang`.
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

export function createRootLayout(locale: Locale) {
  return function RootLayout({ children }: { children: ReactNode }) {
    return <RootDocument locale={locale}>{children}</RootDocument>;
  };
}
