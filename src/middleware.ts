import createMiddleware from 'next-intl/middleware';

// TODO
export default createMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'pl'],
  localePrefix: 'always',
  localeDetection: false,
});

export const config = {
  matcher: ['/', '/(en|pl)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
