import type { ComponentProps, ReactNode } from 'react';
import { cx } from '@/lib/cx';

export function Panel({
  as: Tag = 'div',
  className,
  ...props
}: ComponentProps<'div'> & { as?: 'div' | 'nav' | 'aside' }) {
  return <Tag className={cx('flex flex-col border border-line bg-panel', className)} {...props} />;
}

export function PanelHeader({
  title,
  titleId,
  meta,
  action,
}: {
  title: ReactNode;
  titleId?: string;
  meta?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap justify-between gap-2 px-5 py-3.5">
      <h2 id={titleId} className="m-0 text-title font-extrabold">
        {title}
      </h2>
      {meta && <span className="mono-label text-dim">{meta}</span>}
      {action}
    </div>
  );
}
