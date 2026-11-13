import { ComingSoonPage, comingSoonMetadata } from '@/features/coming-soon/coming-soon-page';

export const metadata = comingSoonMetadata('pl');

export default function Page() {
  return <ComingSoonPage locale="pl" />;
}
