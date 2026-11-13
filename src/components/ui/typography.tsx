import type { ComponentProps } from 'react';
import { cx } from '@/lib/cx';

export function PageTitle({ className, ...props }: ComponentProps<'h1'>) {
  return (
    <h1
      className={cx(
        'm-0 text-[clamp(40px,5.4vw,80px)] leading-[0.98] font-extrabold tracking-[-0.035em] text-balance [overflow-wrap:normal] [word-break:normal] [hyphens:none]',
        className,
      )}
      {...props}
    />
  );
}

export function Lead({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p className={cx('m-0 max-w-[30em] text-[clamp(18px,1.5vw,21px)] text-pretty text-muted', className)} {...props} />
  );
}
