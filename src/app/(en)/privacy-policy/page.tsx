import { PrivacyPolicyPage, privacyPolicyMetadata } from '@/features/privacy-policy/privacy-policy-page';

export const metadata = privacyPolicyMetadata('en');

export default function Page() {
  return <PrivacyPolicyPage locale="en" />;
}
