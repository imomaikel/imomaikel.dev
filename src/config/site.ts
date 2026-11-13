const email = 'michal03.kolodziejczyk@gmail.com';

export const site = {
  name: 'imomaikel.dev',
  url: 'https://imomaikel.dev',
  ownerName: 'Michał Kołodziejczyk',
  displayName: 'Michał (Mike) Kołodziejczyk',
  version: 'v2',
  copyrightYear: 2026,
  githubUrl: 'https://github.com/imomaikel',
  githubHandle: 'imomaikel',
  linkedinUrl: 'https://www.linkedin.com/in/kolodziejczyk-michal/',
  linkedinHandle: 'kolodziejczyk-michal',
  email,
  emailUrl: `mailto:${email}`,
  calendarUrl: 'https://calendar.app.google/5x9AMSY6JMftoZms8',
  /** ISO date of the planned launch. */
  launchDate: '2026-11-15',
  /** ISO date the privacy policy was last updated. */
  privacyPolicyUpdated: '2026-11-13',
  /** Hosting providers named in the privacy policy. */
  hosting: 'netcup GmbH, Cloudflare, Inc.',
  /** E-mail provider named in the privacy policy. */
  mailProvider: 'Google (Gmail)',
} as const;
