import type { ComponentProps } from 'react';
import { cx } from '@/lib/cx';

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cx('mx-auto w-full max-w-[90rem] px-5', className)} {...props} />;
}
