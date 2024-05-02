'use client';
import { bounceAnimation, staggerContainer } from '@/lib/motion';
import { PUBLIC_PROJECTS } from '@/utils/constans';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
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
  const { name, appUrl, images, sourceCodeUrl, techStack, sourceCodeFiles, languages } = props;
  const m = useTranslations('PublicProjects.Misc');
  const t = useTranslations(`PublicProjects.${name.replace(/\./, ' ')}`);

  const description = (t.raw('description') || []) as string[];

  return (
    <motion.div
      // whileInView="show"
      // initial="hidden"
      // variants={{
      //   hidden: {},
      //   show: {},
      // }}
      // viewport={{ once: true }}
      className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0"
    >
      <motion.div className="space-y-2">
        {/* Mobile name */}
        <div className="flex flex-col items-center space-x-4 space-y-2 md:hidden">
          <motion.h4
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={bounceAnimation({ side: 'vertical', delay: 0.2 })}
            className="text-4xl font-bold"
          >
            {name}
          </motion.h4>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.1, 0.3)}
            className="flex space-x-1"
          >
            {languages.map((language) => (
              <motion.div variants={bounceAnimation({ side: 'horizontal' })} key={`mobile-${name}${language}`}>
                <Badge variant="secondary">{m(language)}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Images */}
        <div className="relative max-w-[calc(100vw-48px-32px)] rounded-md">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={bounceAnimation({ side: 'vertical', delay: 0.3 })}
            className="mt-14 aspect-video h-min shrink-0 rounded-md ring-1 ring-white/15 md:mt-0 md:w-96 lg:w-[420px] xl:w-[640px]"
          >
            <ImageSwiper urls={images} />
          </motion.div>
        </div>
        {/* Links */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={bounceAnimation({ side: 'vertical', delay: 0.6, steps: [-60, 10, 0] })}
          className="w-full"
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            <Button className="space-x-3 !py-6" variant="ghost" asChild>
              <Link href={appUrl}>
                <FaExternalLinkAlt className="h-6 w-6" />
                <div className="flex flex-col items-center justify-center">
                  <span>{m('OpenProject')}</span>
                  <span className="text-xs text-muted-foreground">{m('TryItYourself')}</span>
                </div>
              </Link>
            </Button>
            <Button className="space-x-3 !py-6" variant="ghost" asChild>
              <Link href={sourceCodeUrl}>
                <FaGithub className="h-6 w-6" />
                <div className="flex flex-col items-center justify-center">
                  <span>{m('SourceCode')}</span>
                  <span className="text-xs text-muted-foreground">{m('FileCount', { count: sourceCodeFiles })}</span>
                </div>
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="relative space-y-2">
        {/* Desktop Name */}
        <motion.div className="relative z-10 hidden items-center space-x-4 md:flex">
          <motion.h4
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={bounceAnimation({ side: 'vertical', delay: 0.2 })}
            className="text-4xl font-bold"
          >
            {name}
          </motion.h4>
          <motion.div variants={staggerContainer(0.1, 0.3)} className="flex space-x-1">
            {languages.map((language) => (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={bounceAnimation({ side: 'horizontal' })}
                key={`${name}${language}`}
              >
                <Badge variant="secondary">{m(language)}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={bounceAnimation({ side: 'vertical', delay: 0.4 })}
          className="relative z-10 max-w-3xl space-y-1.5 text-justify text-muted-foreground"
        >
          {description.map((entry, idx) => (
            <p className="text-justify" key={`description-${name}-${idx}`}>
              {entry}
            </p>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div className="relative z-10 space-y-1">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={bounceAnimation({ side: 'vertical', delay: 0.5 })}
            className="text-sm font-semibold"
          >
            {m('TechStack')}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.15, 0.6)}
            className="flex flex-wrap gap-1"
          >
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
