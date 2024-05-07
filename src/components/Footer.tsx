'use client';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const a = useTranslations('Accessibility');

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="custom-shape-divider-bottom-1715091348">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"
        ></path>
      </svg>
      <div className="absolute right-[10%] top-1/2 md:right-[20%] xl:right-[25%]">
        <span className="font-medium tracking-wide">imomaikel.dev 2024</span>
      </div>
      <div
        className="absolute right-[10%] top-[80%] md:right-[20%] xl:right-[15%] xl:top-1/2"
        role="button"
        aria-label={a('ScrollToTheTop')}
        onClick={handleScroll}
      >
        <span className="text-muted-foreground hover:underline">{a('ScrollToTheTop')}</span>
      </div>
    </div>
  );
};

export default Footer;
