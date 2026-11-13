import { cx } from '@/lib/cx';

export type RowLink = {
  label: string;
  href: string;
  hint: string;
  monoHint?: boolean;
};

export function RowLinks({ items, id, className }: { items: readonly RowLink[]; id?: string; className?: string }) {
  return (
    <div id={id} className={cx('flex flex-col border-t border-fg', className)}>
      {items.map(({ label, href, hint, monoHint }) => (
        <a
          key={label}
          href={href}
          className="flex min-h-16 flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-line text-row font-extrabold whitespace-nowrap no-underline"
        >
          {label}
          <span className={cx('text-dim', monoHint ? 'mono-label font-normal' : 'text-label font-light')}>{hint}</span>
        </a>
      ))}
    </div>
  );
}
