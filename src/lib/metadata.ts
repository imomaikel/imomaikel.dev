import type { Metadata } from 'next';
import { site } from '@/config/site';
import { alternateLanguages, localizedPath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

type PageMetadataOptions = {
  locale: Locale;
  path: string;
  title?: string;
  /** Keep the page out of search engines and skip canonical/hreflang. */
  noindex?: boolean;
};

export function pageMetadata({ locale, path, title, noindex = false }: PageMetadataOptions): Metadata {
  const { meta } = getDictionary(locale).common;
  return {
    title: title ?? site.name,
    description: meta.description,
    ...(noindex
      ? { robots: { index: false } }
      : {
          alternates: {
            canonical: localizedPath(locale, path),
            languages: alternateLanguages(path),
          },
        }),
  };
}

export const rootMetadata: Metadata = { metadataBase: new URL(site.url) };
