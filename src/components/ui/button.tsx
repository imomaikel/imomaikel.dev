import Link from 'next/link';
import type { ComponentProps } from 'react';
import { cx } from '@/lib/cx';

const base = 'flex items-center font-extrabold no-underline';

const variants = {
  primary: 'bg-accent px-7 text-bg hover:bg-accent-hover hover:text-bg active:translate-y-px',
  outline: 'border border-line-strong px-6 hover:border-fg',
  compact: 'justify-center bg-accent px-3.5 text-bg hover:bg-accent-hover hover:text-bg',
} as const;

const sizes = {
  md: 'min-h-14 text-ui',
  sm: 'min-h-12 text-label',
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export function buttonClass(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cx(base, sizes[size], variants[variant], className);
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}
