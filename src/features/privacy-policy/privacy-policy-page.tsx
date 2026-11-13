import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { DefinitionList } from '@/components/ui/definition-list';
import { RichText } from '@/components/ui/rich-text';
import { Section } from '@/components/ui/section';
import { PageTitle } from '@/components/ui/typography';
import { routeHref, routes } from '@/config/routes';
import { site } from '@/config/site';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import { PolicySection } from './policy-section';

export function privacyPolicyMetadata(locale: Locale) {
  return pageMetadata({ locale, page: 'privacyPolicy', title: getDictionary(locale).privacyPolicy.title });
}

export function PrivacyPolicyPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).privacyPolicy;
  return (
    <PageShell locale={locale} path={routes.privacyPolicy} cta>
      <Section
        labelledBy="h1"
        bordered={false}
        className="min-w-0 flex-auto"
        containerClassName="grid grid-cols-1 lg:grid-cols-3"
      >
        <div className="flex min-w-0 flex-col gap-6 pt-14 pr-gutter pb-6">
          <Link href={routeHref(locale, 'home')} className="flex min-h-12 items-center self-start text-muted">
            ← {t.back}
          </Link>
          <PageTitle id="h1" size="lg">
            {t.title}
          </PageTitle>
          <DefinitionList
            variant="meta"
            items={[
              { term: t.controller, value: site.ownerName },
              { term: t.lastUpdated, value: <RichText>{t.lastUpdatedValue}</RichText> },
            ]}
          />
        </div>
        <ol className="m-0 min-w-0 list-none p-0 pt-14 pb-16 lg:col-span-2">
          {t.sections.map((section, i) => (
            <PolicySection key={section.title} n={i + 1} {...section} />
          ))}
        </ol>
      </Section>
    </PageShell>
  );
}
