import type { RouteKey } from './routes';

export const features: { home: boolean; comingSoon: boolean } = {
  home: false,
  comingSoon: true,
};

/**
 * What is served at / and /pl/:
 * - home on: the home page
 * - home off, comingSoon on: the coming soon page
 * - both off: a 404
 */
export const landing: Extract<RouteKey, 'home' | 'comingSoon'> | null = features.home
  ? 'home'
  : features.comingSoon
    ? 'comingSoon'
    : null;

/** /coming-soon/ is only served as a separate preview while the home page is live. */
export const comingSoonPreview = features.home && features.comingSoon;
