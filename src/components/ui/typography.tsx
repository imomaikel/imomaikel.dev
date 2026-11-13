import type { ComponentProps } from 'react';
import { cx } from '@/lib/cx';

const titleSizes = {
  xl: 'text-[clamp(40px,5.4vw,80px)] leading-[0.98]',
  lg: 'text-[clamp(36px,4.4vw,64px)] leading-none',
} as const;

export function PageTitle({
  size = 'xl',
  className,
  ...props
}: ComponentProps<'h1'> & { size?: keyof typeof titleSizes }) {
  return (
    <h1
      className={cx(
        'm-0 font-extrabold tracking-[-0.035em] text-balance [overflow-wrap:normal] [word-break:normal] [hyphens:none]',
        titleSizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function SectionTitle({ className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cx(
        'm-0 text-[clamp(22px,2vw,28px)] leading-[1.15] font-extrabold tracking-[-0.01em] text-balance [overflow-wrap:normal] [hyphens:none]',
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

export function Paragraph({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cx('m-0 max-w-[40em] text-pretty text-muted', className)} {...props} />;
}
