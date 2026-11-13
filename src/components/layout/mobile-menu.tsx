'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/container';

type MenuItem = { href: string; label: string };

export function MobileMenu({
  items,
  label,
  panelLabel,
}: {
  items: readonly MenuItem[];
  label: string;
  panelLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      button.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="menu-panel"
        onClick={() => setOpen((v) => !v)}
        className="hidden min-h-12 min-w-12 flex-none cursor-pointer border border-line-strong bg-transparent px-3 text-label font-extrabold whitespace-nowrap text-fg hover:border-fg xs:block xl:hidden"
      >
        {label}
      </button>
      <nav
        id="menu-panel"
        hidden={!open}
        aria-label={panelLabel}
        className="absolute inset-x-0 top-full border-b border-line bg-bg xl:hidden"
      >
        <Container className="flex flex-col">
          {items.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex min-h-[52px] items-center border-t border-line text-ui whitespace-nowrap no-underline"
            >
              {label}
            </a>
          ))}
        </Container>
      </nav>
    </>
  );
}
