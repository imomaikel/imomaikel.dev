import type { Locale } from '../config';
import { en } from './en';
import { pl } from './pl';
import type { Dictionary } from './types';

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, pl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
