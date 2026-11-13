import { NotFoundPage, notFoundMetadata } from '@/features/not-found/not-found-page';
import { RootDocument } from '@/components/layout/root-document';

export const metadata = notFoundMetadata('en');

// Static hosts serve a single 404 file, so this is the English one. Polish: /pl/404/.
export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <NotFoundPage locale="en" />
    </RootDocument>
  );
}
