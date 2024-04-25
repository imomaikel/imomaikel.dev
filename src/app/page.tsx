import PublicProjects from '@/components/PublicProjects';
import GetInTouch from '@/components/GetInTouch';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="mb-[100vh] flex flex-col">
      <section>
        <Hero />
      </section>

      <section id="public-projects">
        <PublicProjects />
      </section>

      <section id="get-in-touch">
        <GetInTouch />
      </section>
    </div>
  );
}
