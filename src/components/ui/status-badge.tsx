import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';

const markers = {
  idle: 'border border-accent',
  live: 'animate-blink bg-accent',
  solid: 'bg-accent',
} as const;

export function StatusBadge({ variant = 'idle', children }: { variant?: keyof typeof markers; children: ReactNode }) {
  return (
    <span className="flex items-center gap-2.5 mono-label text-muted">
      <span aria-hidden="true" className={cx('inline-block size-2.5', markers[variant])} />
      {children}
    </span>
  );
}
