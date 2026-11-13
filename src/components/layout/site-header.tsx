import Link from 'next/link';
import { routeHref, sectionHref, sectionIds } from '@/config/routes';
import { site } from '@/config/site';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { LanguageSwitch } from './language-switch';
import { MobileMenu } from './mobile-menu';

const [firstName, lastName] = site.ownerName.split(' ');

export function SiteHeader({
  locale,
  path,
  cta = false,
  sections = false,
}: {
  locale: Locale;
  path: string;
  cta?: boolean;
  sections?: boolean;
}) {
  const { header, nav } = getDictionary(locale).common;
  const items = sectionIds.map((id) => ({ href: sectionHref(locale, id), label: nav[id] }));
  return (
    <header className="relative z-10 border-b border-line bg-bg">
      <Container className="flex min-h-14 flex-nowrap items-center gap-x-2 px-4 whitespace-nowrap sm:px-5">
        <Link
          href={routeHref(locale, 'home')}
          aria-label={`${site.ownerName} · ${header.homeLabel}`}
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
        {sections && (
          <nav aria-label={header.sectionsLabel} className="ml-11 hidden flex-none items-center gap-x-[22px] xl:flex">
            {items.map(({ href, label }) => (
              <Link key={href} href={href} className="flex min-h-12 items-center text-muted no-underline hover:text-fg">
                {label}
              </Link>
            ))}
          </nav>
        )}
        <span aria-hidden="true" className="min-w-0 flex-1" />
        {sections && <MobileMenu items={items} label={header.menu} panelLabel={header.sectionsLabel} />}
        <LanguageSwitch locale={locale} path={path} />
        {cta && (
          <ButtonLink
            variant="compact"
            size="sm"
            href={sectionHref(locale, 'contact')}
            className="flex-none whitespace-nowrap"
          >
            {header.bookCall}
          </ButtonLink>
        )}
      </Container>
    </header>
  );
}
