import { LandingPage, landingMetadata } from '@/features/landing/landing-page';

export const metadata = landingMetadata('pl');

export default function Page() {
  return <LandingPage locale="pl" />;
}
