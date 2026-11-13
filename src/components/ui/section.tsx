import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import { Container } from './container';

export function Section({
  id,
  labelledBy,
  bordered = true,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  labelledBy: string;
  bordered?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx(bordered && 'border-b border-line', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
