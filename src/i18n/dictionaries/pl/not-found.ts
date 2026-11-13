import type { Dictionary } from '../types';

export const notFound: Dictionary['notFound'] = {
  metaTitle: 'Nie znaleziono strony',
  status: 'status: 404 · nie znaleziono',
  title: 'Ta strona nie istnieje.',
  body: 'Link mógł się zdezaktualizować albo w adresie jest literówka. Nic nie zginęło: wszystko na tej stronie jest o jedno kliknięcie stąd.',
  backHome: 'Wróć na stronę główną',
  reportLink: 'Zgłoś niedziałający link',
  whereNext: 'Dokąd dalej',
  errorCode: 'ERR-404',
  links: {
    problems: 'Problemy',
    poc: 'Case study',
    process: 'Współpraca',
    security: 'Bezpieczeństwo',
    contact: 'Kontakt',
  },
};
