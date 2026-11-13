import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';

const variants = {
  meta: { list: 'max-w-[420px]', term: 'flex-none basis-[190px] text-dim', detail: '' },
  facts: { list: 'max-w-[40em]', term: 'flex-[1_1_240px] text-fg', detail: 'flex-[1_1_200px]' },
} as const;

export type DefinitionItem = { term: string; value: ReactNode };

export function DefinitionList({
  items,
  variant = 'facts',
}: {
  items: readonly DefinitionItem[];
  variant?: keyof typeof variants;
}) {
  const v = variants[variant];
  return (
    <dl className={cx('m-0 border-t border-line', v.list)}>
      {items.map(({ term, value }) => (
        <div key={term} className="flex flex-wrap gap-x-4 gap-y-1 border-b border-line py-3">
          <dt className={v.term}>{term}</dt>
          <dd className={cx('m-0', v.detail)}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
