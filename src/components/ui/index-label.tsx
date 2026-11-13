import { cx } from '@/lib/cx';

export function IndexLabel({ n, prefix = '', className }: { n: number; prefix?: string; className?: string }) {
  return (
    <span className={cx('mono-label text-dim', className)}>
      {prefix}
      {String(n).padStart(2, '0')}
    </span>
  );
}
