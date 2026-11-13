import { routes } from '@/config/routes';
import { site } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({ locale: 'en', path: routes.home });

export default function Home() {
  return <main>{site.name}</main>;
}
