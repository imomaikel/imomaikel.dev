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

type TECH_STACK = 'Next.js';

type TLanguage = 'Polish' | 'English';
export const PUBLIC_PROJECTS: {
  name: string;
  description: string;
  techStack: TECH_STACK[];
  images: `/${string}`[];
  sourceCodeUrl: string;
  sourceCodeFiles: number;
  appUrl: string;
  languages: TLanguage[];
}[] = [
  {
    name: 'Project #1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    techStack: ['Next.js', 'Next.js', 'Next.js', 'Next.js', 'Next.js', 'Next.js', 'Next.js', 'Next.js'],
    images: ['/temp1.jpg', '/temp2.jpg', '/temp3.jpg'],
    sourceCodeUrl: 'https://github.com',
    appUrl: 'https://github.com',
    sourceCodeFiles: 200,
    languages: ['English', 'Polish'],
  },
  {
    name: 'Project #1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    techStack: ['Next.js'],
    images: ['/temp1.jpg', '/temp2.jpg', '/temp3.jpg'],
    sourceCodeFiles: 100,
    sourceCodeUrl: 'https://github.com',
    appUrl: 'https://github.com',
    languages: ['Polish'],
  },
];
