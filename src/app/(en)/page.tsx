import { LandingPage, landingMetadata } from '@/features/landing/landing-page';

export const metadata = landingMetadata('en');

export default function Page() {
  return <LandingPage locale="en" />;
}
