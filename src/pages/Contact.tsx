import Container from "@/components/Container";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const Contact = () => {
  return (
    <Container className="bg-background selection:bg-accent relative min-h-screen max-w-full overflow-x-hidden">
      <div className="fixed inset-x-0 mx-auto max-w-3xl">
        {/* Left line */}
        <div className="pointer-events-none absolute left-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
        {/* Right line */}
        <div className="pointer-events-none absolute right-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
      </div>

      <Header />
      <GetInTouch />
      <Toaster richColors />
    </Container>
  );
};

export default Contact;
