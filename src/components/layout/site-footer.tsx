import Link from 'next/link';
import { site } from '@/config/site';
import { routeHref } from '@/config/routes';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { Container } from '@/components/ui/container';

const linkClass = 'flex min-h-12 items-center';

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2 text-muted">
        <span className="py-2">
          © {site.copyrightYear} {site.ownerName}
        </span>
        <nav aria-label={dict.common.footer.profilesLabel} className="flex flex-wrap gap-x-6">
          <a href={site.linkedinUrl} className={linkClass}>
            LinkedIn
          </a>
          <a href={site.githubUrl} className={linkClass}>
            GitHub
          </a>
          <Link href={routeHref(locale, 'privacyPolicy')} className={linkClass}>
            {dict.common.footer.privacyPolicy}
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
