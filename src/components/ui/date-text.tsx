import type { Locale } from '@/i18n/config';
import { formatDate } from '@/lib/format-date';

export function DateText({ date, locale, className }: { date: string; locale: Locale; className?: string }) {
  return (
    <time dateTime={date} className={className}>
      {formatDate(date, locale)}
    </time>
  );
}
