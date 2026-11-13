import { NotFoundPage, notFoundMetadata } from '@/features/not-found/not-found-page';

export const metadata = notFoundMetadata('pl');

export default function PolishNotFound() {
  return <NotFoundPage locale="pl" />;
}
