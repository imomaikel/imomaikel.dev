import { PageShell } from '@/components/layout/page-shell';
import { SplitSection } from '@/components/layout/split-section';
import { ButtonLink } from '@/components/ui/button';
import { ButtonRow } from '@/components/ui/button-row';
import { RowLinks, type RowLink } from '@/components/ui/row-links';
import { StatusBadge } from '@/components/ui/status-badge';
import { TodoChip } from '@/components/ui/todo-chip';
import { Lead, PageTitle } from '@/components/ui/typography';
import { routes } from '@/config/routes';
import { site } from '@/config/site';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import { ReleaseLog } from './release-log';

export function comingSoonMetadata(locale: Locale) {
  return pageMetadata({ locale, page: 'comingSoon', title: getDictionary(locale).comingSoon.metaTitle });
}

export function ComingSoonPage({ locale }: { locale: Locale }) {
  const { common, comingSoon: t } = getDictionary(locale);
  const contact: RowLink[] = [
    { label: t.contact.email, href: site.emailUrl, hint: t.contact.emailTodo },
    { label: 'LinkedIn', href: site.linkedinUrl, hint: site.linkedinHandle, monoHint: true },
    { label: 'GitHub', href: site.githubUrl, hint: site.githubHandle, monoHint: true },
  ];
  return (
    <PageShell locale={locale} path={routes.comingSoon}>
      <SplitSection
        labelledBy="h1"
        status={
          <>
            <span className="text-ui font-extrabold">
              {site.displayName} · {common.role}
            </span>
            <StatusBadge variant="live">{t.status}</StatusBadge>
          </>
        }
        aside={<ReleaseLog locale={locale} />}
      >
        <PageTitle id="h1">{t.title}</PageTitle>
        <Lead>{t.body}</Lead>
        <ButtonRow>
          <ButtonLink variant="primary" href={site.calendarUrl}>
            {t.bookCall}
          </ButtonLink>
          <TodoChip>{t.calendarTodo}</TodoChip>
        </ButtonRow>
        <RowLinks items={contact} className="max-w-[520px]" />
      </SplitSection>
    </PageShell>
  );
}
