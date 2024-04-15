'use client';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { BiSolidChevronsDown } from 'react-icons/bi';
import HeroTypewriter from './HeroTypewriter';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const vpHeight = isMounted ? window.innerHeight : null;
  const height = vpHeight ? (vpHeight >= 420 ? vpHeight : '420px') : '100vh';

  return (
    <div style={{ height }}>
      <HeroHighlight className="flex w-screen flex-col items-center justify-center px-6">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-center"
        >
          <div className="space-x-2 text-xl font-bold leading-[36px] md:text-4xl md:leading-[56px] lg:text-5xl lg:leading-[76px] 2xl:leading-loose">
            <span>Your</span>
            <Highlight duration={0.75}>place</Highlight>
            <span>to transform</span>
            <span>ideas into</span>
            <span>a</span>
            <Highlight duration={1} className="text-nowrap">
              digital masterpiece
            </Highlight>
          </div>
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
        >
          <div>
            <HeroTypewriter />
          </div>
        </motion.h2>
        <div className="relative mb-6">
          <motion.div className="flex flex-col items-center space-y-2">
            <motion.span
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: [-40, 5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-xs font-semibold tracking-wide text-muted-foreground md:text-sm"
            >
              Quality provided by
            </motion.span>
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: [40, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
            >
              <Image src="/signature.png" width={168} height={39} alt="signature" loading="eager" />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="w-full max-w-sm"
        >
          <HoverBorderGradient
            className="flex w-full items-center justify-center rounded-full"
            containerClassName="w-full"
            as="button"
          >
            <BiSolidChevronsDown className="mr-2 h-8 w-8" />
            <span className="font-bold">Explore More</span>
          </HoverBorderGradient>
        </motion.div>
      </HeroHighlight>
    </div>
  );
};

export default Hero;