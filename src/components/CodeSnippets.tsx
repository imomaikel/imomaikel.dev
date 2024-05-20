'use client';
import { ParallaxScroll } from './ui/parallax-scroll';
import { CODE_SNIPPETS } from '@/utils/constans';
import { FaRegLightbulb } from 'react-icons/fa';
import { bounceAnimation } from '@/lib/motion';
import SectionWrapper from './SectionWrapper';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import FullscreenImageProvider from './FullscreenImageProvider';

const CodeSnippets = () => {
  const t = useTranslations('CodeSnippets');

  return (
    <SectionWrapper>
      <motion.div className="mb-24 space-y-2 text-center">
        <motion.h3
          viewport={{ once: true }}
          whileInView="show"
          initial="hidden"
          variants={bounceAnimation({
            side: 'horizontal',
            steps: [-200, 100, 0],
            duration: 1.25,
            initialOpacity: 0.5,
          })}
          className="noTranslate relative z-50 text-3xl font-extrabold capitalize md:text-6xl"
        >
          {t('header')}
        </motion.h3>
        <motion.p
          viewport={{ once: true }}
          whileInView="show"
          initial="hidden"
          variants={bounceAnimation({
            side: 'horizontal',
            steps: [100, -50, 0],
            duration: 1.25,
            initialOpacity: 0.5,
          })}
          className="noTranslate relative z-50 text-sm text-muted-foreground md:text-base"
        >
          {t('description')}
        </motion.p>
      </motion.div>
      <div className="w-fit rounded-md bg-muted/40 p-2 md:p-10">
        <div className="mb-6 hidden items-center justify-center space-x-2 font-medium md:flex">
          <FaRegLightbulb className="h-6 w-6" />
          <p>{t('hint')}</p>
        </div>
        <FullscreenImageProvider>
          <ParallaxScroll images={CODE_SNIPPETS} />
        </FullscreenImageProvider>
      </div>
    </SectionWrapper>
  );
};

export default CodeSnippets;
