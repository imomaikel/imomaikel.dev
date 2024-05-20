'use client';
import { FullscreenImageContext } from '../FullscreenImageProvider';
import { useContext, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const ParallaxScroll = ({ images, className }: { images: string[]; className?: string }) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ['start start', 'end start'], // remove this if your container is not fixed height
  });
  const a = useTranslations('Accessibility');

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const { setIsOpen, setImgUrl } = useContext(FullscreenImageContext);

  const openFullscreen = (imgUrl: string) => {
    setImgUrl(imgUrl);
    setIsOpen(true);
  };

  return (
    <div
      className={cn('relative z-50 h-[80vh] w-full items-start overflow-y-auto', className)}
      ref={gridRef}
      id="parallax-photos"
    >
      <div
        className="mx-auto grid grid-cols-1 items-start gap-10 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={'grid-1' + idx}
            >
              <Image
                src={el}
                className="!m-0 h-full w-full cursor-pointer rounded-lg object-cover object-left-top !p-0"
                height={400}
                quality={100}
                width={400}
                priority={false}
                onClick={() => openFullscreen(el)}
                alt={a('SnippetImage')}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <Image
                src={el}
                className="!m-0 h-full w-full cursor-pointer rounded-lg object-cover object-left-top !p-0"
                height={400}
                quality={100}
                width={400}
                priority={false}
                onClick={() => openFullscreen(el)}
                alt={a('SnippetImage')}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
              <Image
                src={el}
                className="!m-0 h-full w-full cursor-pointer rounded-lg object-cover object-left-top !p-0"
                height={400}
                quality={100}
                width={400}
                priority={false}
                onClick={() => openFullscreen(el)}
                alt={a('SnippetImage')}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
