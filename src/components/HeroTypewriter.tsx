import { HERO_TEXTS, HERO_TEXTS_INTERVAL } from '@/utils/constans';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { useEffect, useState } from 'react';

const getRandomIndex = (currentIndex: number): number => {
  const randomIndex = Math.floor(Math.random() * HERO_TEXTS.length);
  if (randomIndex === currentIndex) return getRandomIndex(currentIndex);
  return randomIndex;
};

const HeroTypewriter = () => {
  const [textIndex, setTextIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(getRandomIndex(textIndex));
    }, HERO_TEXTS_INTERVAL);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <TypewriterEffectSmooth
      duration={1.25}
      delay={textIndex === -1 ? 1 : 0}
      words={HERO_TEXTS[textIndex === -1 ? 0 : textIndex]}
      index={textIndex}
    />
  );
};

export default HeroTypewriter;
