import { PUBLIC_PROJECTS } from '@/utils/constans';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import ImageSwiper from './ImageSwiper';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Link from 'next/link';

type TProjectShowcase = {
  props: (typeof PUBLIC_PROJECTS)[0];
};
const ProjectShowcase = ({ props }: TProjectShowcase) => {
  const { name, appUrl, description, images, sourceCodeUrl, techStack, sourceCodeFiles, languages } = props;

  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
      <div className="space-y-2">
        {/* Mobile name */}
        <div className="flex flex-col items-center space-x-4 space-y-2 md:hidden">
          <h4 className="text-4xl font-bold">{name}</h4>
          <div className="flex space-x-1">
            {languages.map((language) => (
              <Badge key={`${name}${language}`} variant="secondary">
                {language}
              </Badge>
            ))}
          </div>
        </div>
        {/* Images */}
        <div className="relative max-w-[calc(100vw-48px-32px)]">
          <div className="mt-14 aspect-video h-min shrink-0 md:mt-0 md:w-96 lg:w-[420px] xl:w-[640px]">
            <ImageSwiper urls={images} />
          </div>
        </div>
        {/* Links */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4">
            <Button className="space-x-3" variant="ghost" asChild>
              <Link href={sourceCodeUrl}>
                <FaExternalLinkAlt className="h-6 w-6" />
                <div className="flex flex-col items-center justify-center">
                  <span>Preview</span>
                  <span className="text-xs text-muted-foreground">Try it yourself</span>
                </div>
              </Link>
            </Button>
            <Button className="space-x-3" variant="ghost" asChild>
              <Link href={appUrl}>
                <FaGithub className="h-6 w-6" />
                <div className="flex flex-col items-center justify-center">
                  <span>Source Code</span>
                  <span className="text-xs text-muted-foreground">Over {sourceCodeFiles} files</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative space-y-2">
        {/* Desktop Name */}
        <div className="relative z-10 hidden items-center space-x-4 md:flex">
          <h4 className="text-4xl font-bold">{name}</h4>
          <div className="flex space-x-1">
            {languages.map((language) => (
              <Badge key={`${name}${language}`} variant="secondary">
                {language}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="relative z-10 max-w-3xl text-justify text-muted-foreground">{description}</div>

        {/* Tech Stack */}
        <div className="relative z-10 space-y-1">
          <p className="text-sm font-semibold">Tech Stack</p>
          <div className="flex flex-wrap gap-1">
            {techStack.map((text, index) => (
              <Badge key={`name-${text}${index}`}>{text}</Badge>
            ))}
          </div>
        </div>

        {/* Gradient */}
        <div className="absoluteCenter absolute h-[350px] w-[150px] rotate-[72deg] bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 opacity-75 blur-[125px]"></div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
