import Container from "@/components/Container";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <Container className="bg-background selection:bg-accent relative min-h-screen max-w-full">
      <div className="fixed inset-x-0 mx-auto max-w-3xl">
        {/* Left line */}
        <div className="pointer-events-none absolute left-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
        {/* Right line */}
        <div className="pointer-events-none absolute right-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
      </div>
      <Header />
      <div className="mx-auto mt-10 max-w-md text-center">
        <h1 className="text-highlight text-8xl font-bold">404</h1>
        <p className="text-primary mt-4 font-heading text-2xl">Page Not Found</p>
      </div>
    </Container>
  );
};

export default NotFound;
