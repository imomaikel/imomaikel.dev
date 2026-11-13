import { Section } from '@/components/ui/section';
import { SectionTitle } from '@/components/ui/typography';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { stack } from './stack';

export function StackSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.stack;
  return (
    <Section id="stack" labelledBy="h-stack" containerClassName="flex flex-wrap items-center gap-x-8 gap-y-4 py-7">
      <SectionTitle id="h-stack" size="xs" className="flex-none">
        {t.title}
      </SectionTitle>
      <ul className="m-0 flex flex-1 basis-[400px] list-none flex-wrap border-l border-line p-0">
        {stack.map((name) => (
          <li key={name} className="-mb-px border-y border-r border-line px-4 py-2.5 mono-label text-fg">
            {name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
