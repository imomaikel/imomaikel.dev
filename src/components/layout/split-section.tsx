import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';
import { cx } from '@/lib/cx';

export function SplitSection({
  id,
  labelledBy,
  status,
  aside,
  compact = false,
  className,
  children,
}: {
  id?: string;
  labelledBy: string;
  status: ReactNode;
  aside?: ReactNode;
  compact?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx('flex flex-auto', className)}>
      <Container className="grid flex-auto [grid-template-columns:repeat(auto-fit,minmax(min(100%,520px),1fr))] content-center">
        <div className="col-span-full flex flex-wrap items-center gap-x-5 gap-y-2 pt-14 pb-7">{status}</div>
        <div className={cx('flex min-w-0 flex-col gap-7 pr-gutter', compact ? 'pb-12' : 'pb-14')}>{children}</div>
        {aside && <div className={cx('self-start', compact ? 'mb-12' : 'mb-14')}>{aside}</div>}
      </Container>
    </section>
  );
}
