import type { Dictionary } from '../types';

export const comingSoon: Dictionary['comingSoon'] = {
  metaTitle: 'Wkrótce',
  status: 'status',
  title: 'Nowa strona już wkrótce.',
  body: 'Przebudowuję stronę wokół systemów AI, które projektuję dla firm finansowych i biur rachunkowych. Zanim ruszy, możesz umówić rozmowę lub napisać do mnie bezpośrednio.',
  contact: {
    email: 'E-mail',
  },
  releaseLog: {
    title: 'Dziennik wdrożenia',
    phases: {
      design: 'projektowanie',
      content: 'redagowanie treści',
      build: 'budowa',
      launch: 'uruchamianie',
    },
    steps: {
      design: 'Projekt',
      content: 'Treści (PL / EN)',
      build: 'Wdrożenie i testy',
      launch: 'Start',
    },
    states: { done: 'gotowe', active: 'w toku', queued: 'w kolejce' },
    expectedLaunch: 'Planowany start',
  },
};
