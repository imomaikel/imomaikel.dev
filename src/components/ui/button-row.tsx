import type { ComponentProps } from 'react';
import { cx } from '@/lib/cx';

export function ButtonRow({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cx('flex flex-wrap items-center gap-x-5 gap-y-3', className)} {...props} />;
}
