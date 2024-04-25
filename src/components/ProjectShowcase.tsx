'use client';
import { bounceAnimation, staggerContainer } from '@/lib/motion';
import { PUBLIC_PROJECTS } from '@/utils/constans';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import ImageSwiper from './ImageSwiper';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Link from 'next/link';

type TProjectShowcase = {
  props: (typeof PUBLIC_PROJECTS)[0];
};
const ProjectShowcase = ({ props }: TProjectShowcase) => {
  const { name, appUrl, description, images, sourceCodeUrl, techStack, sourceCodeFiles, languages } = props;

  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      variants={{
        hidden: {},
        show: {},
      }}
      viewport={{ once: true }}
      className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0"
    >
      <motion.div className="space-y-2">
        {/* Mobile name */}
        <div className="flex flex-col items-center space-x-4 space-y-2 md:hidden">
          <motion.h4 variants={bounceAnimation({ side: 'vertical', delay: 0.2 })} className="text-4xl font-bold">
            {name}
          </motion.h4>
          <motion.div variants={staggerContainer(0.1, 0.3)} className="flex space-x-1">
            {languages.map((language) => (
              <motion.div variants={bounceAnimation({ side: 'horizontal' })} key={`mobile-${name}${language}`}>
                <Badge variant="secondary">{language}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Images */}
        <div className="relative max-w-[calc(100vw-48px-32px)]">
          <motion.div
            variants={bounceAnimation({ side: 'vertical', delay: 0.3 })}
            className="mt-14 aspect-video h-min shrink-0 md:mt-0 md:w-96 lg:w-[420px] xl:w-[640px]"
          >
            <ImageSwiper urls={images} />
          </motion.div>
        </div>
        {/* Links */}
        <motion.div
          variants={bounceAnimation({ side: 'vertical', delay: 0.6, steps: [-60, 10, 0] })}
          className="w-full"
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            <Button className="space-x-3 !py-6" variant="ghost" asChild>
              <Link href={appUrl}>
                <FaExternalLinkAlt className="h-6 w-6" />
                <div className="flex flex-col items-center justify-center">
                  <span>Open project</span>
                  <span className="text-xs text-muted-foreground">Try it yourself</span>
                </div>
              </Link>
            </Button>
            <Button className="space-x-3 !py-6" variant="ghost" asChild>
              <Link href={sourceCodeUrl}>
                <FaGithub className="h-6 w-6" />
                <div className="flex flex-col items-center justify-center">
                  <span>Source Code</span>
                  <span className="text-xs text-muted-foreground">Over {sourceCodeFiles} files</span>
                </div>
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="relative space-y-2">
        {/* Desktop Name */}
        <motion.div className="relative z-10 hidden items-center space-x-4 md:flex">
          <motion.h4 variants={bounceAnimation({ side: 'vertical', delay: 0.2 })} className="text-4xl font-bold">
            {name}
          </motion.h4>
          <motion.div variants={staggerContainer(0.1, 0.3)} className="flex space-x-1">
            {languages.map((language) => (
              <motion.div variants={bounceAnimation({ side: 'horizontal' })} key={`${name}${language}`}>
                <Badge variant="secondary">{language}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={bounceAnimation({ side: 'vertical', delay: 0.4 })}
          className="relative z-10 max-w-3xl space-y-2 text-justify text-muted-foreground"
        >
          {description.map((entry, idx) => (
            <p key={`description-${name}-${idx}`}>{entry}</p>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div className="relative z-10 space-y-1">
          <motion.p variants={bounceAnimation({ side: 'vertical', delay: 0.5 })} className="text-sm font-semibold">
            Tech Stack
          </motion.p>
          <motion.div variants={staggerContainer(0.15, 0.6)} className="flex flex-wrap gap-1">
            {techStack.map((text, index) => (
              <motion.div key={`name-${text}${index}`} variants={bounceAnimation({ side: 'horizontal' })}>
                <Badge>{text}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gradient */}
        <div className="absoluteCenter absolute h-[350px] w-[150px] rotate-[72deg] bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 opacity-75 blur-[125px]"></div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectShowcase;
