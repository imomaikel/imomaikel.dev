/** `{todo:text}` renders a TODO chip, `{site:key}` a value from config/site.ts. */
export const privacyPolicy = {
  title: 'Privacy policy',
  back: 'Back to home',
  controller: 'Controller',
  lastUpdated: 'Last updated',
  sections: [
    {
      title: 'Data controller',
      body: [
        'The controller of your personal data is Michał Kołodziejczyk. For matters related to data processing, you can contact me at: {site:email}.',
      ],
    },
    {
      title: 'Scope, purpose and legal basis',
      body: [
        'I process the data provided in the contact form (name, business e-mail address, message content) solely to respond to your business inquiry and evaluate potential collaboration.',
        'The legal basis is taking steps at the request of the data subject prior to entering into a contract (GDPR Art. 6(1)(b)) and the legitimate interest of the controller (GDPR Art. 6(1)(f)).',
      ],
    },
    {
      title: 'AI isolation guarantee (zero AI training policy)',
      body: [
        'No personal data or business information submitted via the contact form is used to train any Artificial Intelligence (LLM) models. Business inquiries are not processed through third-party AI provider APIs.',
      ],
    },
    {
      title: 'Data recipients and infrastructure',
      body: ['Data is processed using secure technical infrastructure:'],
      facts: [
        { term: 'Website and form hosting', value: '{site:hosting}' },
        { term: 'E-mail service provider', value: '{site:mailProvider}' },
      ],
      note: 'In the event of paid collaboration, data required for VAT invoicing is transferred to a B2B billing partner (Useme sp. z o.o.).',
    },
    {
      title: 'Retention period',
      body: [
        'Data from inquiries that do not result in a collaboration are permanently deleted from my systems 12 months after our last communication.',
      ],
    },
    {
      title: 'User rights',
      body: [
        'You have the right to request access to your data, its rectification, erasure, or restriction of processing. You also have the right to lodge a complaint with the relevant supervisory authority.',
      ],
    },
    {
      title: 'Cookies (zero tracking)',
      body: [
        'This website uses only essential technical cookies required for the proper functioning of the infrastructure. The website does not use any tracking scripts, analytics tools, or marketing pixels.',
      ],
    },
  ],
} as const;
