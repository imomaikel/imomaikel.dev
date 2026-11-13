import { PrivacyPolicyPage, privacyPolicyMetadata } from '@/features/privacy-policy/privacy-policy-page';

export const metadata = privacyPolicyMetadata('pl');

export default function Page() {
  return <PrivacyPolicyPage locale="pl" />;
}
