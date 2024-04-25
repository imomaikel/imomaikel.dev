import PublicProjects from '@/components/PublicProjects';
import CodeSnippets from '@/components/CodeSnippets';
import GetInTouch from '@/components/GetInTouch';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section>
        <Hero />
      </section>

      <section id="public-projects">
        <PublicProjects />
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
