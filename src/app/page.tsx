import { Container } from "@/components/layout/Container";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Page() {
  return (
    <main>
      <Container className="py-10 sm:py-14">
        <Hero />
        <About />
        <Projects />
      </Container>
    </main>
  );
}
