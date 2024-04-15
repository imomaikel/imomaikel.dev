import { PUBLIC_PROJECTS } from '@/utils/constans';
import { TracingBeam } from './ui/tracing-beam';
import ProjectShowcase from './ProjectShowcase';
import SectionWrapper from './SectionWrapper';

const PublicProjects = () => {
  return (
    <SectionWrapper>
      <div className="mb-12 space-y-1 text-center">
        <h3 className="text-6xl font-extrabold capitalize">Public projects</h3>
        <p className="text-muted-foreground">Some of my projects that source code is shared on GitHub</p>
      </div>
      <TracingBeam className="w-fit">
        <div className="flex flex-col space-y-24">
          {PUBLIC_PROJECTS.map((projectDetails) => (
            <ProjectShowcase key={`project-${projectDetails.name}`} props={projectDetails} />
          ))}
        </div>
      </TracingBeam>
    </SectionWrapper>
  );
};

export default PublicProjects;
