'use client';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { bounceAnimation } from '@/lib/motion';
import SectionWrapper from './SectionWrapper';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import React from 'react';

const AboutMe = () => {
  const t = useTranslations('AboutMe');
  const texts = t.raw('texts') as string[];

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
      <div className="relative z-50 mx-auto max-w-screen-xl">
        {texts.map((text, idx) => (
          <TextGenerateEffect key={`text-${idx}`} words={text} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
