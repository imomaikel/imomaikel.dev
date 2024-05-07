'use client';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  let wordsArray = words.split(' ');
  useEffect(() => {
    if (!isInView) return;
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 1.5,
        delay: stagger(0.1),
      },
    );
  }, [scope.current, isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-black opacity-0 dark:text-white">
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-semibold', className)}>
      <div className="mt-4">
        <div className="text-base leading-snug tracking-wide text-black dark:text-white md:text-2xl">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
