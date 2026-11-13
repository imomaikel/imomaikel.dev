import { IndexLabel } from '@/components/ui/index-label';
import { Section } from '@/components/ui/section';
import { Paragraph, SectionTitle } from '@/components/ui/typography';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

export function ProblemsSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.problems;
  return (
    <Section id="problems" labelledBy="h-problems" containerClassName="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-3.5 pt-14 pr-6 pb-4">
        <SectionTitle id="h-problems" size="lg">
          {t.title}
        </SectionTitle>
        <Paragraph className="max-w-[26em]">{t.lead}</Paragraph>
      </div>
      <ol className="m-0 list-none p-0 py-14">
        {t.items.map(({ title, cost }, i) => (
          <li key={title} className="flex gap-5 border-t border-line py-5">
            <IndexLabel n={i + 1} prefix="P-" className="flex-none pt-1" />
            <div className="flex flex-col gap-2">
              <span className="text-row leading-tight font-extrabold">{title}</span>
              <span className="text-muted">{cost}</span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
