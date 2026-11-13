import { intlLocale, type Locale } from '@/i18n/config';

export function formatDate(isoDate: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(isoDate));
}
