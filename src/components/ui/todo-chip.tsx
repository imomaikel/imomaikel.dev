import type { ReactNode } from 'react';

export function TodoChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-baseline gap-2.5 border border-dashed border-line-dashed px-2 text-muted">
      <span className="mono-label text-dim">TODO</span>
      {children}
    </span>
  );
}
