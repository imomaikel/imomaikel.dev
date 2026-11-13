import type { Dictionary } from '../types';

export const comingSoon: Dictionary['comingSoon'] = {
  metaTitle: 'Wkrótce',
  status: 'status: wdrażanie',
  title: 'Nowa strona już wkrótce.',
  body: 'Przebudowuję stronę wokół systemów AI, które projektuję dla firm finansowych i biur rachunkowych. Zanim ruszy, możesz umówić rozmowę lub napisać do mnie bezpośrednio.',
  bookCall: 'Umów 30-minutową rozmowę',
  calendarTodo: 'link do kalendarza',
  contact: {
    email: 'E-mail',
    emailTodo: 'TODO adres',
  },
  releaseLog: {
    title: 'Dziennik wdrożenia',
    steps: {
      design: 'Projekt',
      content: 'Treści (PL / EN)',
      build: 'Wdrożenie i testy',
      launch: 'Start',
    },
    states: { done: 'gotowe', active: 'w toku', queued: 'w kolejce' },
    expectedLaunch: 'Planowany start',
    dateTodo: 'data',
  },
};
