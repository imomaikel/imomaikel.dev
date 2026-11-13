import type { ReactNode } from 'react';

export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-2.5 font-mono text-label text-muted">
      <span aria-hidden="true" className="inline-block size-2.5 border border-accent" />
      {children}
    </span>
  );
}
