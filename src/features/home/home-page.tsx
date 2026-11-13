import { PageShell } from '@/components/layout/page-shell';
import { routes } from '@/config/routes';
import type { Locale } from '@/i18n/config';
import { pageMetadata } from '@/lib/metadata';
import { HeroSection } from './hero-section';
import { ProblemsSection } from './problems-section';
import { StackSection } from './stack-section';

export function homeMetadata(locale: Locale) {
  return pageMetadata({ locale, page: 'home' });
}

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} path={routes.home} cta sections>
      <HeroSection locale={locale} />
      <ProblemsSection locale={locale} />
      <StackSection locale={locale} />
    </PageShell>
  );
}
