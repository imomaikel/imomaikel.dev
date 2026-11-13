import type { Dictionary } from '../types';

export const privacyPolicy: Dictionary['privacyPolicy'] = {
  title: 'Polityka prywatności',
  back: 'Powrót na stronę główną',
  controller: 'Administrator',
  lastUpdated: 'Ostatnia aktualizacja',
  lastUpdatedValue: '{todo:data}',
  sections: [
    {
      title: 'Administrator danych',
      body: [
        'Administratorem Twoich danych osobowych jest Michał Kołodziejczyk. W sprawach związanych z przetwarzaniem danych możesz kontaktować się pod adresem: {todo:adres e-mail}.',
      ],
    },
    {
      title: 'Zakres, cel i podstawa przetwarzania',
      body: [
        'Przetwarzam dane podane w formularzu kontaktowym (imię i nazwisko, służbowy adres e-mail, treść wiadomości) wyłącznie w celu udzielenia odpowiedzi na Twoje zapytanie biznesowe oraz oceny możliwości podjęcia współpracy.',
        'Podstawą prawną jest podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (Art. 6 ust. 1 lit. b RODO) oraz prawnie uzasadniony interes administratora (Art. 6 ust. 1 lit. f RODO).',
      ],
    },
    {
      title: 'Gwarancja izolacji AI (zero AI training policy)',
      body: [
        'Żadne dane osobowe ani informacje biznesowe przekazywane przez formularz kontaktowy nie są wykorzystywane do trenowania jakichkolwiek modeli sztucznej inteligencji (LLM). Zapytania ofertowe nie są procesowane przez zewnętrzne interfejsy API dostawców AI.',
      ],
    },
    {
      title: 'Odbiorcy danych i infrastruktura',
      body: ['Dane przetwarzane są z wykorzystaniem bezpiecznej infrastruktury technicznej:'],
      facts: [
        { term: 'Hosting strony i formularza', value: '{todo:dostawca}' },
        { term: 'Dostawca usług poczty e-mail', value: '{todo:dostawca}' },
      ],
      note: 'W przypadku nawiązania płatnej współpracy, dane niezbędne do wystawienia faktury VAT przekazywane są partnerowi rozliczeniowemu B2B (Useme sp. z o.o.).',
    },
    {
      title: 'Okres retencji',
      body: [
        'Dane pochodzące z zapytań, które nie zakończyły się podjęciem współpracy, są trwale usuwane z moich systemów po upływie 12 miesięcy od naszej ostatniej komunikacji.',
      ],
    },
    {
      title: 'Prawa użytkownika',
      body: [
        'Masz pełne prawo do żądania dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania. Przysługuje Ci również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).',
      ],
    },
    {
      title: 'Pliki cookies (zero tracking)',
      body: [
        'Strona wykorzystuje wyłącznie niezbędne pliki cookies techniczne wymagane do poprawnego działania infrastruktury serwera i formularza. Strona nie używa skryptów śledzących, analitycznych (np. Google Analytics) ani pikseli marketingowych.',
      ],
    },
  ],
};
