export const locales = ['en', 'pl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const intlLocale: Record<Locale, string> = { en: 'en-GB', pl: 'pl-PL' };

const prefix = (locale: Locale) => (locale === defaultLocale ? '' : `/${locale}`);

export function localizedPath(locale: Locale, path: string = '/'): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return `${prefix(locale)}${clean}`;
}

export function alternateLanguages(path: string = '/') {
  return {
    ...Object.fromEntries(locales.map((l) => [l, localizedPath(l, path)] as const)),
    'x-default': localizedPath(defaultLocale, path),
  };
}
