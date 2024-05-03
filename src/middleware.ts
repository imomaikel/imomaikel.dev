import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'pl'],
  localePrefix: 'as-needed',
  localeDetection: false,
});

export const config = {
  matcher: ['/', '/(!api|en|pl)/:path*', '/((?!api|!_next|_vercel|.*\\..*).*)'],
};
