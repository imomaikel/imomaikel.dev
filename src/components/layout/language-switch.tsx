import Link from 'next/link';
import { cx } from '@/lib/cx';
import { localizedPath, locales, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

export function LanguageSwitch({ locale, path }: { locale: Locale; path: string }) {
  const dict = getDictionary(locale);
  return (
    <nav aria-label={dict.common.language.label} className="flex flex-none whitespace-nowrap">
      {locales.map((l) => {
        const current = l === locale;
        return (
          <Link
            key={l}
            href={localizedPath(l, path)}
            hrefLang={l}
            lang={l}
            aria-current={current ? 'page' : undefined}
            className={cx(
              'flex min-h-12 min-w-12 items-center justify-center hover:text-fg-bright',
              current
                ? 'font-extrabold text-fg underline underline-offset-[6px]'
                : 'font-light text-muted no-underline',
            )}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
