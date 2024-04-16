import { PUBLIC_PROJECTS } from '@/utils/constans';
import { TracingBeam } from './ui/tracing-beam';
import ProjectShowcase from './ProjectShowcase';
import SectionWrapper from './SectionWrapper';

const PublicProjects = () => {
  return (
    <SectionWrapper>
      <div className="mb-24 space-y-2 text-center">
        <h3 className="text-3xl font-extrabold capitalize md:text-6xl">Public projects</h3>
        <p className="px-12 text-sm text-muted-foreground md:text-base">
          Some of my projects that source code is shared on GitHub
        </p>
      </div>
      <TracingBeam className="w-fit pl-8 3xl:pl-0">
        <div className="flex flex-1 flex-col space-y-32">
          {PUBLIC_PROJECTS.map((projectDetails) => (
            <ProjectShowcase key={`project-${projectDetails.name}`} props={projectDetails} />
          ))}
        </div>
      </TracingBeam>
    </SectionWrapper>
  );
};

export default PublicProjects;
