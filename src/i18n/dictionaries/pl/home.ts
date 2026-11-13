import type { Dictionary } from '../types';

export const home: Dictionary['home'] = {
  hero: {
    status: 'buduję oprogramowanie od 2019',
    title: 'Koniec z ręczną pracą. Każda decyzja udokumentowana.',
    lead: 'Projektuję i wdrażam systemy AI dla firm finansowych i biur rachunkowych. Każdy program przejmuje jeden proces, działa za przewidywalny koszt i zapisuje historię decyzji.',
    freeFitCheck: 'Bezpłatna konsultacja',
    metricsTitle: 'Wdrożenie produkcyjne · dane rzeczywiste',
    fullReport: 'Pełny raport',
    metrics: [
      { label: 'Przetworzone sprawy', value: '20 667', unit: '' },
      { label: 'Czas wykonania przez AI', value: '< 6', unit: 'sekund' },
      { label: 'Koszt API', value: '~0,02', unit: 'PLN / sprawę' },
    ],
  },
  problems: {
    title: 'Problemy',
    lead: 'Ręczne procesy, które może przejąć system AI. Każdy z nich wymaga zatrudniania kolejnych osób, gdy rośnie skala.',
    items: [
      {
        title: 'Pracownicy ręcznie przepisują faktury, zgłoszenia szkód i dokumenty tożsamości (KYC).',
        cost: 'Liczba godzin rośnie z każdym nowym klientem. Błędy wychodzą na jaw dopiero przy audycie.',
      },
      {
        title: 'Wyjątki w płatnościach i księgowaniach są uzgadniane ręcznie w arkuszach.',
        cost: 'Zamknięcie miesiąca trwa dni. Wiedza, jak to zrobić, jest w głowach jednej lub dwóch osób.',
      },
      {
        title: 'Wspólne skrzynki e-mail są sortowane i rozdzielane ręcznie.',
        cost: 'Czas odpowiedzi zależy od liczby wiadomości, a nie od priorytetu. O niedotrzymaniu terminów dowiadujesz się po fakcie.',
      },
    ],
  },
  stack: {
    title: 'Technologie',
  },
};
