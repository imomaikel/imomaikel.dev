import { HomePage, homeMetadata } from '@/features/home/home-page';

export const metadata = homeMetadata('en');

export default function Page() {
  return <HomePage locale="en" />;
}
