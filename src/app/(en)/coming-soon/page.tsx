import { notFound } from 'next/navigation';
import { comingSoonPreview } from '@/config/features';
import { ComingSoonPage, comingSoonMetadata } from '@/features/coming-soon/coming-soon-page';

export const metadata = comingSoonMetadata('en');

export default function Page() {
  if (!comingSoonPreview) notFound();
  return <ComingSoonPage locale="en" />;
}
