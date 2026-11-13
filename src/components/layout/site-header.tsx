import Link from 'next/link';
import { site } from '@/config/site';
import { routeHref, sectionHref } from '@/config/routes';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { LanguageSwitch } from './language-switch';

const [firstName, lastName] = site.ownerName.split(' ');

export function SiteHeader({ locale, path, cta = false }: { locale: Locale; path: string; cta?: boolean }) {
  const dict = getDictionary(locale);
  return (
    <header className="border-b border-line bg-bg">
      <Container className="flex min-h-14 flex-nowrap items-center gap-x-2 px-4 whitespace-nowrap sm:px-5">
        <Link
          href={routeHref(locale, 'home')}
          aria-label={`${site.ownerName} · ${dict.common.header.homeLabel}`}
          className="flex min-h-14 flex-none items-center text-label font-extrabold whitespace-nowrap no-underline sm:text-ui"
        >
          <span aria-hidden="true" className="hidden sm:inline">
            {site.ownerName}
          </span>
          <span aria-hidden="true" className="hidden min-[420px]:inline sm:hidden">
            {lastName}
          </span>
          <span aria-hidden="true" className="min-[420px]:hidden">
            {firstName[0]}
            {lastName[0]}
          </span>
        </Link>
        <span aria-hidden="true" className="min-w-0 flex-1" />
        <LanguageSwitch locale={locale} path={path} />
        {cta && (
          <ButtonLink
            variant="compact"
            size="sm"
            href={sectionHref(locale, 'contact')}
            className="flex-none whitespace-nowrap"
          >
            {dict.common.header.bookCall}
          </ButtonLink>
        )}
      </Container>
    </header>
  );
}
