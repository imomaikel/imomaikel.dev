export const home = {
  hero: {
    status: 'building software since 2019',
    title: 'Cut the manual work. Keep every decision on record.',
    lead: 'I design and build AI agents for FinTech and accounting teams. Each agent replaces a manual process, runs at a predictable cost, and keeps an audit trail of every decision.',
    freeFitCheck: 'Free fit check',
    metricsTitle: 'Active deployment · live metrics',
    fullReport: 'Full report',
    metrics: [
      { label: 'Processed cases', value: '20,667', unit: '' },
      { label: 'AI execution time', value: '< 6', unit: 'seconds' },
      { label: 'API Cost', value: '< 0.01', unit: 'EUR / case' },
    ],
  },
  problems: {
    title: 'Problems',
    lead: 'Manual processes an agent can take over. Each one grows your headcount in step with your volume.',
    items: [
      {
        title: 'Analysts retype claims, KYC and policy documents.',
        cost: 'Hours grow with every new customer. Keying errors surface at audit.',
      },
      {
        title: 'Payment and ledger exceptions are matched by hand in spreadsheets.',
        cost: 'Close takes days. The method lives in one or two people.',
      },
      {
        title: 'Shared inboxes are sorted and routed by hand.',
        cost: 'Response time follows inbox size, not priority. SLA breaches are found afterwards.',
      },
    ],
  },
  stack: {
    title: 'Stack',
  },
} as const;
