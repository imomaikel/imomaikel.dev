import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/config';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export function PageShell({
  locale,
  path,
  cta,
  sections,
  children,
}: {
  locale: Locale;
  path: string;
  cta?: boolean;
  sections?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} path={path} cta={cta} sections={sections} />
      <main className="flex flex-auto flex-col">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
