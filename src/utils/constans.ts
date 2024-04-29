import { TNavItem } from '@/components/ui/floating-navbar';
import { FaHome, FaRegLightbulb } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { IoCodeSlash } from 'react-icons/io5';
import { ImStatsDots } from 'react-icons/im';

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
] as const;
type TTechStack = (typeof TECH_STACKS)[number];

type TLanguage = 'Polish' | 'English';
export const PUBLIC_PROJECTS: {
  name: string;
  description: string[];
  techStack: TTechStack[];
  images: `/${string}`[];
  sourceCodeUrl: string;
  sourceCodeFiles: number;
  appUrl: string;
  languages: TLanguage[];
}[] = [
  {
    name: 'Oleje Sawiniec',
    description: [
      'Introducing a web store tailored for the Polish market, offering a curated selection of 100% natural oils, seeds, and flour for home use. Developed for discerning consumers, the website ensures a seamless user experience, allowing easy browsing, filtering, and sorting of products.',
      'Key features include integration with CashBill for secure payments, user account creation for wishlists, and a robust admin panel for comprehensive insights and control over operations. From sales tracking to user behavior analysis, the admin panel offers data-driven tools for business optimization.',
      'As a software developer, my focus has been on crafting a solution that exceeds client requirements, promising a seamless shopping experience for Polish consumers seeking high-quality natural products for their homes.',
    ],
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
    description: [
      'This project, initiated in March 2019 during my early stages as a software developer, has been an ongoing evolution. It revolves around a web store and web panel for the game "ARK: Survival Evolved & Ascended"',
      'The web panel provides users with access to their in-game logs and the ability to open tickets automatically on Discord. It also enables real-time messaging on both the website and Discord via socket.io.',
      'An essential aspect of the project is the admin panel, granting administrators control over the website, Discord bot behavior, and configuration adjustments.',
      'The focal point of the website is the web store, integrated with the Tebex Headless API. Here, users can purchase items and seamlessly receive them in-game.',
      'Throughout its development, this project has allowed me to hone my skills as a software developer, tackling complex functionalities and integrating various technologies to create a comprehensive solution for the gaming community.',
    ],
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
    description: [
      'Presenting an innovative application designed for both Windows and Linux platforms, aimed at seamlessly viewing images and videos. The application not only allows effortless browsing of media files but also enables users to zoom in on videos while they are playing - a unique feature that enhances the viewing experience.',
      'Currently in the developmental phase, this project is continually evolving. In the pipeline are additional features such as file sorting, deletion capabilities, user settings customization, and much more.',
      'Through this project, I am not only exploring my passion for software development but also striving to create a user-friendly solution that enhances the way individuals interact with their media files. Stay tuned for updates as the project progresses towards its full potential.',
    ],
    techStack: ['Electron', 'React', 'Framer Motion', 'Vite', 'Zoom Pan Pinch'],
    images: ['/gainllery/landing.webp', '/gainllery/image.webp', '/gainllery/video.webp'],
    // TODO
    languages: ['English'],
    sourceCodeFiles: 30,
    sourceCodeUrl: 'https://github.com/imomaikel/gainllery',
    appUrl: 'https://github.com/imomaikel/gainllery/releases',
  },
  {
    name: 'imomaikel.dev',
    description: [
      'Introducing my online portfolio website - a showcase of my professional journey and accomplishments as a software developer. Here, visitors can explore my public projects, read testimonials from satisfied clients and collaborators, and get in touch with me via a convenient contact form.',
      'The website also provides insights into the tech stack I utilize, offering transparency into my approach to development. Additionally, visitors can learn more about me, my background, and my passion for creating innovative solutions through software.',
      "Designed with functionality in mind, my portfolio website serves as a gateway for potential clients, employers, and fellow developers to discover my work and connect with me. Explore, engage, and let's embark on exciting opportunities together.",
    ],
    techStack: ['Next.js', 'React', 'Framer Motion', 'Prisma', 'Hook Form', 'Zod'],
    images: ['/imomaikel.dev/landing.webp'],
    // TODO
    languages: ['English', 'Polish'],
    sourceCodeFiles: 33,
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
    link: '#get-in-touch',
    name: 'Contact',
    icon: BiMessageDetail,
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
];

export const CODE_SNIPPETS = [
  '/snippets/14.png',
  '/snippets/4.png',
  '/snippets/17.png',
  '/snippets/21.png',
  '/snippets/3.png',
  '/snippets/20.png',
  '/snippets/6.png',
  '/snippets/15.png',
  '/snippets/12.png',
  '/snippets/10.png',
  '/snippets/1.png',
  '/snippets/24.png',
  '/snippets/16.png',
  '/snippets/8.png',
  '/snippets/5.png',
  '/snippets/9.png',
  '/snippets/11.png',
  '/snippets/7.png',
  '/snippets/2.png',
  '/snippets/13.png',
  '/snippets/23.png',
  '/snippets/19.png',
  '/snippets/22.png',
  '/snippets/18.png',
];
