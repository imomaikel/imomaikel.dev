import Link from 'next/link';
import { SplitSection } from '@/components/layout/split-section';
import { ButtonLink } from '@/components/ui/button';
import { ButtonRow } from '@/components/ui/button-row';
import { Panel, PanelHeader } from '@/components/ui/panel';
import { StatusBadge } from '@/components/ui/status-badge';
import { TodoChip } from '@/components/ui/todo-chip';
import { Lead, PageTitle } from '@/components/ui/typography';
import { sectionHref } from '@/config/routes';
import { site } from '@/config/site';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

export function HeroSection({ locale }: { locale: Locale }) {
  const { common, home } = getDictionary(locale);
  const t = home.hero;
  return (
    <SplitSection
      compact
      className="border-b border-line"
      labelledBy="h1"
      status={
        <>
          <span className="text-ui font-extrabold">
            {site.displayName} · {common.role}
          </span>
          <StatusBadge variant="solid">{t.status}</StatusBadge>
        </>
      }
      aside={
        <Panel as="aside" aria-labelledby="hero-metrics">
          <PanelHeader
            title={t.metricsTitle}
            titleId="hero-metrics"
            action={
              <Link href={sectionHref(locale, 'poc')} className="-my-3.5 flex min-h-12 items-center text-muted">
                {t.fullReport}
              </Link>
            }
          />
          {t.metrics.map(({ label, value, unit }) => (
            <div
              key={label}
              className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1.5 border-t border-line px-5 py-[22px]"
            >
              <span className="text-ui text-muted">{label}</span>
              <span className="flex items-baseline gap-2.5 font-mono">
                <span className="text-[clamp(44px,4.6vw,68px)] leading-none font-medium whitespace-nowrap text-accent">
                  {value}
                </span>
                <span className="text-row text-muted">{unit}</span>
              </span>
            </div>
          ))}
        </Panel>
      }
    >
      <PageTitle id="h1" size="md">
        {t.title}
      </PageTitle>
      <Lead className="max-w-[34em]">{t.lead}</Lead>
      <ButtonRow>
        <ButtonLink variant="primary" href={sectionHref(locale, 'contact')}>
          {common.cta.bookIntroCall}
        </ButtonLink>
        <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-muted">
          {t.freeFitCheck} · <TodoChip>{common.cta.calendarTodo}</TodoChip>
        </span>
      </ButtonRow>
    </SplitSection>
  );
}
