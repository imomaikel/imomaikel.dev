// https://ui.aceternity.com/components/typewriter-effect
'use client';

import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: 'easeInOut',
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`hidden text-black opacity-0 dark:text-white`, word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div className={cn('text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl', className)}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn('inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10', cursorClassName)}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  sentence,
  className,
  cursorClassName,
  duration = 2,
  delay = 1,
  index,
}: {
  index: number;
  sentence: string;
  className?: string;
  cursorClassName?: string;
  duration?: number;
  delay?: number;
}) => {
  const words = sentence.split(' ');
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      word,
      text: word.split(''),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={cn(`text-black dark:text-white`)}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn('relative my-6 flex items-center', className)}>
      <motion.div
        key={`animate-${index}`}
        className="flex items-center overflow-hidden"
        initial={{
          width: '0%',
        }}
        animate={{
          width: 'fit-content',
        }}
        transition={{
          duration,
          ease: 'linear',
          delay,
        }}
      >
        <div
          className="lg:text:1xl md:text-md text-xs font-bold sm:text-base xl:text-3xl"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}{' '}
        </div>{' '}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn('block h-4 w-[4px] rounded-sm bg-primary sm:h-6 xl:h-12', cursorClassName)}
      ></motion.span>
    </div>
  );
};
