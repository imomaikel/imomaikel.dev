import { DefinitionList } from '@/components/ui/definition-list';
import { IndexLabel } from '@/components/ui/index-label';
import { RichText } from '@/components/ui/rich-text';
import { Paragraph, SectionTitle } from '@/components/ui/typography';

export type PolicySectionData = {
  title: string;
  body: readonly string[];
  facts?: ReadonlyArray<{ term: string; value: string }>;
  note?: string;
};

export function PolicySection({ n, title, body, facts, note }: PolicySectionData & { n: number }) {
  return (
    <li className="grid grid-cols-1 border-t border-line py-6 first:border-fg sm:grid-cols-[1fr_3fr]">
      <div className="pt-1 pr-5 pb-3">
        <IndexLabel n={n} />
      </div>
      <div className="flex min-w-0 flex-col gap-3.5">
        <SectionTitle>{title}</SectionTitle>
        {body.map((text) => (
          <Paragraph key={text}>
            <RichText>{text}</RichText>
          </Paragraph>
        ))}
        {facts && (
          <DefinitionList items={facts.map(({ term, value }) => ({ term, value: <RichText>{value}</RichText> }))} />
        )}
        {note && (
          <Paragraph>
            <RichText>{note}</RichText>
          </Paragraph>
        )}
      </div>
    </li>
  );
}
