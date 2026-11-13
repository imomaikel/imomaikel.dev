export const comingSoon = {
  metaTitle: 'Coming soon',
  status: 'status: deploying',
  title: 'New site coming soon.',
  body: "I'm rebuilding this site around the AI agents I design for FinTech and accounting teams. Until it's live, you can still book a call or write to me directly.",
  bookCall: 'Book a 30-min intro call',
  calendarTodo: 'calendar link',
  contact: {
    email: 'E-mail',
    emailTodo: 'TODO address',
  },
  releaseLog: {
    title: 'Release log',
    steps: {
      design: 'Design',
      content: 'Content (EN / PL)',
      build: 'Build and testing',
      launch: 'Launch',
    },
    states: { done: 'done', active: 'in progress', queued: 'queued' },
    expectedLaunch: 'Expected launch',
    dateTodo: 'date',
  },
} as const;
