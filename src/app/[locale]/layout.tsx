import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Vercel from '@/components/Vercel';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'imomaikel.dev',
  description:
    "Simple software developer's portfolio of innovative projects. Explore diverse tech solutions and connect via our contact form to collaborate.",
};

const LocaleLayout = ({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) => {
  const messages = useMessages();

  return (
    <html lang={locale} className="dark scroll-smooth">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={cn('w-screen overflow-x-hidden', inter.className)}>
          <div className="relative flex h-full min-h-screen w-full bg-background bg-grid-small-white/[0.2]">
            <div className="pointer-events-none absolute inset-0 flex bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] md:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="overflow-x-hidden">{children}</div>
          </div>
          <Navbar />
          <Vercel />
        </body>
      </NextIntlClientProvider>
    </html>
  );
};

export default LocaleLayout;
