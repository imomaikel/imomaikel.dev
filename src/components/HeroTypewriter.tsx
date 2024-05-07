import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { HERO_TEXTS_INTERVAL } from '@/utils/constans';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const getRandomIndex = (currentIndex: number, texts: string[]): number => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  if (randomIndex === currentIndex) return getRandomIndex(currentIndex, texts);
  return randomIndex;
};

const HeroTypewriter = () => {
  const [textIndex, setTextIndex] = useState(-1);
  const t = useTranslations('Hero');
  const texts = t.raw('texts') as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(getRandomIndex(textIndex, texts));
    }, HERO_TEXTS_INTERVAL);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textIndex]);

  return (
    <TypewriterEffectSmooth
      duration={1.25}
      delay={textIndex === -1 ? 1 : 0}
      sentence={texts[textIndex === -1 ? 0 : textIndex]}
      index={textIndex}
    />
  );
};

export default HeroTypewriter;
