import { PUBLIC_PROJECTS } from '@/utils/constans';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Link from 'next/link';

type TProjectShowcase = {
  props: (typeof PUBLIC_PROJECTS)[0];
};
const ProjectShowcase = ({ props }: TProjectShowcase) => {
  const { name, appUrl, description, images, sourceCodeUrl, techStack, sourceCodeFiles, languages } = props;

  return (
    <div className="flex space-x-4">
      <div className="space-y-2">
        {/* Images */}
        <div className="relative">
          <div className="relative aspect-video h-min w-96 shrink-0 bg-muted">{/* TODO */}</div>
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
      <div className="space-y-2">
        {/* Name */}
        <div className="flex items-center space-x-4">
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
        <div className="text-justify text-muted-foreground">{description}</div>

        {/* Tech Stack */}
        <div className="space-y-1">
          <p className="text-sm font-semibold">Tech Stack</p>
          <div className="flex flex-wrap gap-1">
            {techStack.map((text, index) => (
              <Badge key={`name-${text}${index}`}>{text}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
