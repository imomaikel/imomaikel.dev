import type { en } from './en';

/** Strip `as const` literals so other locales can supply their own strings. */
type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;
