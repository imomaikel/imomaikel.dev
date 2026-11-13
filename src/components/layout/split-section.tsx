import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';

export function SplitSection({
  labelledBy,
  status,
  aside,
  children,
}: {
  labelledBy: string;
  status: ReactNode;
  aside: ReactNode;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={labelledBy} className="flex flex-auto">
      <Container className="grid flex-auto [grid-template-columns:repeat(auto-fit,minmax(min(100%,520px),1fr))] content-center">
        <div className="col-span-full flex flex-wrap items-center gap-x-5 gap-y-2 pt-14 pb-7">{status}</div>
        <div className="flex min-w-0 flex-col gap-7 pr-[clamp(0px,2.5vw,32px)] pb-14">{children}</div>
        <div className="mb-14 self-start">{aside}</div>
      </Container>
    </section>
  );
}
