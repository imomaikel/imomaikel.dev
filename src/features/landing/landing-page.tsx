import { notFound } from 'next/navigation';
import { landing } from '@/config/features';
import { ComingSoonPage, comingSoonMetadata } from '@/features/coming-soon/coming-soon-page';
import { HomePage, homeMetadata } from '@/features/home/home-page';
import type { Locale } from '@/i18n/config';
import { pageMetadata } from '@/lib/metadata';

export function landingMetadata(locale: Locale) {
  if (landing === 'home') return homeMetadata(locale);
  if (landing === 'comingSoon') return comingSoonMetadata(locale, 'home');
  return pageMetadata({ locale, page: 'home', noindex: true });
}

export function LandingPage({ locale }: { locale: Locale }) {
  if (landing === 'home') return <HomePage locale={locale} />;
  if (landing === 'comingSoon') return <ComingSoonPage locale={locale} at="home" />;
  notFound();
}
