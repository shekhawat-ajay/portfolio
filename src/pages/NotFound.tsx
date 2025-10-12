import Container from "@/components/Container";
import Header from "@/components/Header";
import { Separator } from "@/components/ui";

const NotFound = () => {
  return (
    <Container className="bg-background selection:bg-accent relative min-h-screen max-w-full overflow-hidden">
      <div className="fixed inset-x-0 mx-auto max-w-3xl">
        {/* Left line */}
        <div className="pointer-events-none absolute left-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
        {/* Right line */}
        <div className="pointer-events-none absolute right-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
      </div>
      <Header />
      <div className="mx-auto max-w-md flex mt-20 item-center justify-center">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-highlight text-3xl font-">404</h1>
          <Separator orientation="vertical" className="" />
          <h2 className="text-muted-foreground   font-heading">
            This page couldn't be found.
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
