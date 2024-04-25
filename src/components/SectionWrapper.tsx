import { cn } from '@/lib/utils';

type TSectionWrapper = {
  children: React.ReactNode;
  className?: string;
};
const SectionWrapper = ({ children, className }: TSectionWrapper) => {
  return (
    <div className="mx-auto flex min-h-[50vh] w-screen max-w-screen-2xl flex-col items-center justify-center px-6 py-32">
      <div className={cn('w-full', className)}>{children}</div>
    </div>
  );
};

export default SectionWrapper;
