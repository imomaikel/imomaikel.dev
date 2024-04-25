'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ImageZoom from './ImageZoom';
import { cn } from '@/lib/utils';

export const ParallaxScroll = ({ images, className }: { images: string[]; className?: string }) => {
  const [mobileView, setMobileView] = useState(false);
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ['start start', 'end start'], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  useEffect(() => {
    const checkWidth = () => {
      setMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkWidth);
    checkWidth();

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div
      className={cn('relative z-50 h-[80vh] max-h-[1080px] w-full items-start overflow-y-auto', className)}
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
              <ImageZoom src={el} mobileView={mobileView} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <ImageZoom src={el} mobileView={mobileView} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
              <ImageZoom src={el} mobileView={mobileView} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
