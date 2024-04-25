'use client';
import FullscreenImageProvider from './FullscreenImageProvider';
import { PUBLIC_PROJECTS } from '@/utils/constans';
import { TracingBeam } from './ui/tracing-beam';
import ProjectShowcase from './ProjectShowcase';
import { bounceAnimation } from '@/lib/motion';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const PublicProjects = () => {
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
          Public projects
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
          Some of my projects that source code is shared on GitHub
        </motion.p>
      </motion.div>
      <FullscreenImageProvider>
        <TracingBeam className="w-fit pl-8 3xl:pl-0">
          <div className="flex flex-1 flex-col space-y-32">
            {PUBLIC_PROJECTS.map((projectDetails) => (
              <ProjectShowcase key={`project-${projectDetails.name}`} props={projectDetails} />
            ))}
          </div>
        </TracingBeam>
      </FullscreenImageProvider>
    </SectionWrapper>
  );
};

export default PublicProjects;
