import { TNavItem } from '@/components/ui/floating-navbar';
import { FaHome, FaRegLightbulb } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';

export const HERO_TEXTS = [
  "Scroll Down and Let's Uncover the Possibilities Together!",
  "Scroll Down and Let's Amplify Your Impact!",
  "Scroll Down and Let's Amplify Your Voice!",
  "Scroll Down and Let's Architect Your Digital Empire!",
  "Scroll Down and Let's Architect Your Path to Greatness!",
  "Scroll Down and Let's Bring Your Vision to Life!",
  "Scroll Down and Let's Build Your Empire!",
  "Scroll Down and Let's Build Your Tomorrow!",
  "Scroll Down and Let's Champion Your Cause!",
  "Scroll Down and Let's Champion Your Dreams!",
  "Scroll Down and Let's Champion Your Success!",
  "Scroll Down and Let's Craft Your Digital Saga!",
  "Scroll Down and Let's Craft Your Legacy!",
  "Scroll Down and Let's Craft Your Success Story!",
  "Scroll Down and Let's Create Your Masterpiece!",
  "Scroll Down and Let's Cultivate Your Creativity!",
  "Scroll Down and Let's Cultivate Your Curiosity!",
  "Scroll Down and Let's Cultivate Your Growth!",
  "Scroll Down and Let's Cultivate Your Passion!",
  "Scroll Down and Let's Curate Your Adventure!",
  "Scroll Down and Let's Dance with Your Dreams!",
  "Scroll Down and Let's Design Your Future!",
  "Scroll Down and Let's Discover Your Brilliance!",
  "Scroll Down and Let's Drive Your Innovation!",
  "Scroll Down and Let's Elevate Your Experience!",
  "Scroll Down and Let's Elevate Your Vision!",
  "Scroll Down and Let's Embark on Your Journey!",
  "Scroll Down and Let's Embrace Your Potential!",
  "Scroll Down and Let's Empower Your Journey!",
  "Scroll Down and Let's Empower Your Potential!",
  "Scroll Down and Let's Empower Your Story!",
  "Scroll Down and Let's Energize Your Endeavors!",
  "Scroll Down and Let's Engineer Your Digital Revolution!",
  "Scroll Down and Let's Enrich Your Experience!",
  "Scroll Down and Let's Explore Your Potential!",
  "Scroll Down and Let's Forge Your Future!",
  "Scroll Down and Let's Fuel Your Ambition!",
  "Scroll Down and Let's Fuel Your Fire!",
  "Scroll Down and Let's Harmonize Your Ambitions!",
  "Scroll Down and Let's Ignite Your Creativity!",
  "Scroll Down and Let's Ignite Your Digital Innovation!",
  "Scroll Down and Let's Ignite Your Passion!",
  "Scroll Down and Let's Illuminate Your Dreams!",
  "Scroll Down and Let's Illuminate Your Path!",
  "Scroll Down and Let's Innovate Your World!",
  "Scroll Down and Let's Inspire Your Evolution!",
  "Scroll Down and Let's Inspire Your Growth!",
  "Scroll Down and Let's Inspire Your Journey!",
  "Scroll Down and Let's Manifest Your Goals!",
  "Scroll Down and Let's Navigate Your Destiny!",
  "Scroll Down and Let's Navigate Your Dreams!",
  "Scroll Down and Let's Nurture Your Potential!",
  "Scroll Down and Let's Paint Your Canvas of Success!",
  "Scroll Down and Let's Pioneer Your Digital Frontier!",
  "Scroll Down and Let's Script Your Digital Renaissance!",
  "Scroll Down and Let's Script Your Digital Symphony!",
  "Scroll Down and Let's Sculpt Your Success!",
  "Scroll Down and Let's Shape Your Destiny!",
  "Scroll Down and Let's Shape Your Legacy!",
  "Scroll Down and Let's Shape Your Reality!",
  "Scroll Down and Let's Spark Your Imagination!",
  "Scroll Down and Let's Unleash Your Power!",
  "Scroll Down and Let's Write Your Saga of Achievement!",
].map((text) => text.split(' ').map((word) => ({ text: word })));

export const HERO_TEXTS_INTERVAL = 4_000;

const TECH_STACKS = [
  'Next.js',
  'Auth.js',
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
    name: 'Olejesawiniec',
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
];
