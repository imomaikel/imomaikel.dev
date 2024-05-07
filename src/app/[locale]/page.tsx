'use server';
import PublicProjects from '@/components/PublicProjects';
import CodeSnippets from '@/components/CodeSnippets';
import CodingStats from '@/components/CodingStats';
import { getWakatimeStats } from '@/actions/waka';
import GetInTouch from '@/components/GetInTouch';
import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import prisma from '@/lib/prisma';

export default async function Home() {
  let wakaData = await prisma.wakaEntry.findMany();
  if (wakaData.length <= 0) {
    await getWakatimeStats();
    wakaData = await prisma.wakaEntry.findMany();
  }
  return (
    <div className="flex flex-col">
      <section>
        <Hero />
      </section>

      <section id="public-projects">
        <PublicProjects />
      </section>

      <section id="about-me">
        <AboutMe />
      </section>

      <section id="statistics">
        <CodingStats data={wakaData} />
      </section>

      <section id="code-snippets">
        <CodeSnippets />
      </section>

      <section id="get-in-touch">
        <GetInTouch />
      </section>
    </div>
  );
}
