import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Container from "@/components/Container";

const Home = () => {
  return (
    <Container className="bg-background selection:bg-accent relative min-h-screen max-w-full overflow-x-hidden p-2">
      <div className="fixed inset-x-0 mx-auto max-w-3xl">
        {/* Left line */}
        <div className="pointer-events-none absolute left-0 h-screen w-px bg-gradient-to-b from-slate-400/25 via-slate-500/25 via-80% to-transparent" />
        {/* Right line */}
        <div className="pointer-events-none absolute right-0 h-screen w-px bg-gradient-to-b from-slate-400/15 via-slate-500/15 via-80% to-transparent" />
      </div>

      <Header />
      <About />
      <Connect />
      <Skills />
      <Projects />
    </Container>
  );
};

export default Home;
