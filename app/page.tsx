import { Hero, About, Music, Education, Contact, Footer } from "@/components/Sections";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Music />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
