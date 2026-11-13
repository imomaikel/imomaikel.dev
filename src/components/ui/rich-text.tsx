import { Fragment } from 'react';
import { site } from '@/config/site';
import { TodoChip } from './todo-chip';

const TOKEN = /\{(todo|site):([^}]+)\}/g;

type SiteKey = keyof typeof site;

const hrefs: Partial<Record<SiteKey, string>> = { email: site.emailUrl };

function siteValue(key: string): { text: string; href?: string } {
  if (!(key in site)) throw new Error(`Unknown {site:${key}} token in copy`);
  return { text: String(site[key as SiteKey]), href: hrefs[key as SiteKey] };
}

/** Plain text with `{todo:text}` chips and `{site:key}` values from `config/site.ts`. */
export function RichText({ children }: { children: string }) {
  const parts = children.split(TOKEN);
  const nodes = [];
  for (let i = 0; i < parts.length; i += 3) {
    nodes.push(<Fragment key={i}>{parts[i]}</Fragment>);
    const [kind, value] = [parts[i + 1], parts[i + 2]];
    if (kind === 'todo') nodes.push(<TodoChip key={i + 1}>{value}</TodoChip>);
    if (kind === 'site') {
      const { text, href } = siteValue(value);
      nodes.push(
        href ? (
          <a key={i + 1} href={href}>
            {text}
          </a>
        ) : (
          <Fragment key={i + 1}>{text}</Fragment>
        ),
      );
    }
  }
  return nodes;
}
