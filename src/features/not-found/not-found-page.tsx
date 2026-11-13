import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { SplitSection } from '@/components/layout/split-section';
import { ButtonLink } from '@/components/ui/button';
import { Panel, PanelHeader } from '@/components/ui/panel';
import { StatusBadge } from '@/components/ui/status-badge';
import { Lead, PageTitle } from '@/components/ui/typography';
import { routeHref, routes, sectionHref, sectionIds } from '@/config/routes';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';

export function notFoundMetadata(locale: Locale) {
  return pageMetadata({
    locale,
    path: routes.notFound,
    title: getDictionary(locale).notFound.metaTitle,
    noindex: true,
  });
}

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;
  return (
    <PageShell locale={locale} path={routes.notFound} cta>
      <SplitSection
        labelledBy="h1"
        status={<StatusBadge>{t.status}</StatusBadge>}
        aside={
          <Panel as="nav" aria-labelledby="h-go">
            <PanelHeader title={t.whereNext} titleId="h-go" meta={t.errorCode} />
            <ul className="m-0 list-none p-0">
              {sectionIds.map((id, i) => (
                <li key={id} className="border-t border-line">
                  <Link
                    href={sectionHref(locale, id)}
                    className="flex min-h-[60px] items-center gap-4 px-5 text-ui no-underline hover:bg-panel-hover hover:text-fg-bright"
                  >
                    <span className="font-mono text-label text-dim">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-auto">{t.links[id]}</span>
                    <span aria-hidden="true" className="text-dim">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>
        }
      >
        <PageTitle id="h1">{t.title}</PageTitle>
        <Lead>{t.body}</Lead>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <ButtonLink variant="primary" href={routeHref(locale, 'home')}>
            {t.backHome}
          </ButtonLink>
          <ButtonLink variant="outline" href={sectionHref(locale, 'contact')}>
            {t.reportLink}
          </ButtonLink>
        </div>
      </SplitSection>
    </PageShell>
  );
}
