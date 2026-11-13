import { HomePage, homeMetadata } from '@/features/home/home-page';

export const metadata = homeMetadata('pl');

export default function Page() {
  return <HomePage locale="pl" />;
}
