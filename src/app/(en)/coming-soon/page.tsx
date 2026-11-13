import { ComingSoonPage, comingSoonMetadata } from '@/features/coming-soon/coming-soon-page';

export const metadata = comingSoonMetadata('en');

export default function Page() {
  return <ComingSoonPage locale="en" />;
}
