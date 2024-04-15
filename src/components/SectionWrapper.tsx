'use server';

type TSectionWrapper = {
  children: React.ReactNode;
};
const SectionWrapper = async ({ children }: TSectionWrapper) => {
  return (
    <div className="mx-auto flex min-h-[50vh] w-screen max-w-screen-2xl flex-col items-center justify-center px-6 py-32">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default SectionWrapper;
