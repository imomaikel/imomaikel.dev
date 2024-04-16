import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn('w-screen overflow-x-hidden', inter.className)}>
        <div className="relative flex h-full min-h-screen w-full bg-background bg-grid-small-white/[0.2]">
          <div className="pointer-events-none absolute inset-0 flex bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] md:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="overflow-x-hidden">{children}</div>
        </div>
      </body>
    </html>
  );
}
