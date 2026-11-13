export const comingSoon = {
  metaTitle: 'Coming soon',
  status: 'status',
  title: 'New site coming soon.',
  body: "I'm rebuilding this site around the AI agents I design for FinTech and accounting teams. Until it's live, you can still book a call or write to me directly.",
  contact: {
    email: 'E-mail',
  },
  releaseLog: {
    title: 'Release log',
    phases: {
      design: 'designing',
      content: 'writing content',
      build: 'building',
      launch: 'launching',
    },
    steps: {
      design: 'Design',
      content: 'Content (EN / PL)',
      build: 'Build and testing',
      launch: 'Launch',
    },
    states: { done: 'done', active: 'in progress', queued: 'queued' },
    expectedLaunch: 'Expected launch',
  },
} as const;
