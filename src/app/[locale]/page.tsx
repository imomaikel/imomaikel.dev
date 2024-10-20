'use server';
import PublicProjects from '@/components/PublicProjects';
import CodeSnippets from '@/components/CodeSnippets';
import CodingStats from '@/components/CodingStats';
import { getWakatimeStats } from '@/actions/waka';
import GetInTouch from '@/components/GetInTouch';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import prisma from '@/lib/prisma';

export default async function Home() {
  let [wakaData, config] = await Promise.all([prisma.wakaEntry.findMany(), prisma.config.findFirst()]);
  if (wakaData.length <= 0) {
    await getWakatimeStats();
    wakaData = await prisma.wakaEntry.findMany();
  }

  const showStats = config?.showStats ?? true;

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

      {showStats && (
        <section id="statistics">
          <CodingStats data={wakaData} />
        </section>
      )}

      <section id="get-in-touch">
        <GetInTouch />
      </section>

      <section id="code-snippets" className="mb-8">
        <CodeSnippets />
      </section>

      <Footer />
    </div>
  );
}
