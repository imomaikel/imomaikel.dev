import { TNavItem } from '@/components/ui/floating-navbar';
import { FaHome, FaRegLightbulb } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { IoCodeSlash } from 'react-icons/io5';
import { ImStatsDots } from 'react-icons/im';
import { FaPerson } from 'react-icons/fa6';

export const HERO_TEXTS_INTERVAL = 4_000;

const TECH_STACKS = [
  'Next.js',
  'Auth.js',
  'NextAuth.js',
  'CashBill',
  'Drag and Drop',
  'Hook Form',
  'Prisma',
  'Facebook Pixel',
  'tRPC',
  'bcrypt',
  'Framer Motion',
  'React',
  'Nodemailer',
  'Recharts',
  'Zod',
  'Zustand',
  'Express',
  'Discord.js',
  'MySQL',
  'RCON',
  'Handlebars',
  'Socket.io',
  'Tebex',
  'Electron',
  'Vite',
  'Zoom Pan Pinch',
  'Internationalization',
] as const;
type TTechStack = (typeof TECH_STACKS)[number];

type TLanguage = 'Polish' | 'English';
export const PUBLIC_PROJECTS: {
  name: string;
  techStack: TTechStack[];
  images: `/${string}`[];
  sourceCodeUrl: string;
  sourceCodeFiles: number;
  appUrl: string;
  languages: TLanguage[];
}[] = [
  {
    name: 'Oleje Sawiniec',
    techStack: [
      'Next.js',
      'Auth.js',
      'tRPC',
      'Nodemailer',
      'CashBill',
      'Facebook Pixel',
      'React',
      'Drag and Drop',
      'Hook Form',
      'Prisma',
      'bcrypt',
      'Framer Motion',
      'Recharts',
      'Zod',
      'Zustand',
    ],
    images: ['/olejesawiniec/landing.webp', '/olejesawiniec/shop.webp', '/olejesawiniec/product.webp'],
    sourceCodeFiles: 190,
    languages: ['Polish'],
    appUrl: 'https://olejesawiniec.pl',
    sourceCodeUrl: 'https://github.com/imomaikel/olejesawiniec',
  },
  {
    name: 'EliteCore',
    techStack: [
      'React',
      'Next.js',
      'NextAuth.js',
      'Express',
      'Socket.io',
      'Tebex',
      'tRPC',
      'MySQL',
      'Discord.js',
      'Hook Form',
      'Framer Motion',
      'Zod',
      'Zustand',
      'Prisma',
      'Handlebars',
      'RCON',
    ],
    images: ['/elitecore/landing.webp', '/elitecore/shop.webp', '/elitecore/product.webp', '/elitecore/ticket.webp'],
    sourceCodeFiles: 320,
    languages: ['English'],
    appUrl: 'https://elitecorepvp.com/',
    sourceCodeUrl: 'https://github.com/imomaikel/elitecore-app',
  },
  {
    name: 'Gainllery',
    techStack: ['Electron', 'React', 'Framer Motion', 'Vite', 'Zoom Pan Pinch'],
    images: ['/gainllery/landing.webp', '/gainllery/image.webp', '/gainllery/video.webp'],
    languages: ['English'],
    sourceCodeFiles: 30,
    sourceCodeUrl: 'https://github.com/imomaikel/gainllery',
    appUrl: 'https://github.com/imomaikel/gainllery/releases',
  },
  {
    name: 'imomaikel.dev',
    techStack: ['Next.js', 'React', 'Internationalization', 'Framer Motion', 'Prisma', 'Hook Form', 'Zod'],
    images: ['/imomaikel.dev/landing.webp'],
    languages: ['English', 'Polish'],
    sourceCodeFiles: 44,
    sourceCodeUrl: 'https://github.com/imomaikel/imomaikel.dev',
    appUrl: 'https://imomaikel.dev',
  },
];

export const NAV_ITEMS: TNavItem[] = [
  {
    link: '/',
    name: 'Home',
    icon: FaHome,
  },
  {
    link: '#public-projects',
    name: 'Projects',
    icon: FaRegLightbulb,
  },
  {
    link: '#about-me',
    name: 'About me',
    icon: FaPerson,
  },
  {
    link: '#statistics',
    name: 'Stats',
    icon: ImStatsDots,
  },
  {
    link: '#code-snippets',
    name: 'Snippets',
    icon: IoCodeSlash,
  },
  {
    link: '#get-in-touch',
    name: 'Contact',
    icon: BiMessageDetail,
  },
];

export const CODE_SNIPPETS = [
  '/snippets/14.webp',
  '/snippets/4.webp',
  '/snippets/17.webp',
  '/snippets/21.webp',
  '/snippets/3.webp',
  '/snippets/20.webp',
  '/snippets/6.webp',
  '/snippets/15.webp',
  '/snippets/12.webp',
  '/snippets/10.webp',
  '/snippets/1.webp',
  '/snippets/24.webp',
  '/snippets/16.webp',
  '/snippets/8.webp',
  '/snippets/5.webp',
  '/snippets/9.webp',
  '/snippets/11.webp',
  '/snippets/7.webp',
  '/snippets/2.webp',
  '/snippets/13.webp',
  '/snippets/23.webp',
  '/snippets/19.webp',
  '/snippets/22.webp',
  '/snippets/18.webp',
];

// TODO EliteCore - python app
