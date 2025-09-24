import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Container from "@/components/Container";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <Container className="bg-background selection:bg-accent relative min-h-screen max-w-full overflow-x-hidden p-2">
      <div className="fixed inset-x-0 mx-auto max-w-3xl">
        {/* Left line */}
        <div className="pointer-events-none absolute left-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 to-transparent" />
        {/* Right line */}
        <div className="pointer-events-none absolute right-0 h-screen w-px bg-gradient-to-b from-slate-400/10 via-slate-500/10 to-transparent" />
      </div>

      <Header />
      <About />
      <Contact />
      <Skills />
      <Projects />
    </Container>
  );
};

export default Home;
