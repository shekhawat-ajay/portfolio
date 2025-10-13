import Header from "@/components/Header";
import About from "@/components/About";
import Connect from "@/components/Connect";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui";

const Home = () => {
  return (
    <Container className="bg-background selection:bg-accent relative min-h-screen max-w-full overflow-x-hidden">
      <div className="fixed inset-x-0 mx-auto max-w-3xl">
        {/* Left line */}
        <div className="pointer-events-none absolute left-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
        {/* Right line */}
        <div className="pointer-events-none absolute right-0 h-screen w-px bg-gradient-to-b from-slate-400/15 via-slate-500/15 via-80% to-transparent" />
      </div>

      <Header />
      <Separator className="mb- bg-gradient-to-r from-slate-400/15 via-slate-500/40 to-slate-400/15" />
      <About />
      <Separator className="mb-10 bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
      <Connect />
      <Separator className="bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
      <Skills />
      <Separator className="bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
      <Projects />
      <Separator className="bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
      <div className="mt-12">
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
