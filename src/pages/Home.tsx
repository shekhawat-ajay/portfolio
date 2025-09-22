import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Container from "@/components/Container";

const Home = () => {
  return (
    <Container className="bg-background min-h-screen max-w-full p-2 selection:bg-accent">
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-3xl -translate-x-1/2">
        {/* Left line */}
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-slate-300/20 via-slate-400/30 to-transparent" />
        {/* Right line */}
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-slate-300/20 via-slate-400/30 to-transparent" />
      </div>

      <Header />
      <About />
      <Skills />
      {/* <Projects /> */}
    </Container>
  );
};

export default Home;
