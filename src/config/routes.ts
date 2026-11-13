import { localizedPath, type Locale } from '@/i18n/config';

export const routes = {
  home: '/',
  privacyPolicy: '/privacy-policy/',
  comingSoon: '/coming-soon/',
  notFound: '/404/',
} as const;
export type RouteKey = keyof typeof routes;

export const sectionIds = ['problems', 'poc', 'process', 'security', 'contact'] as const;
export type SectionId = (typeof sectionIds)[number];

export function routeHref(locale: Locale, key: RouteKey): string {
  return localizedPath(locale, routes[key]);
}

export function sectionHref(locale: Locale, id: SectionId): string {
  return `${routeHref(locale, 'home')}#${id}`;
}
