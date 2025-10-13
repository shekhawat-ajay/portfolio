import { Footer } from "@/components";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Separator } from "@/components/ui";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <Container className="bg-background selection:bg-accent relative min-h-screen max-w-full overflow-x-hidden">
      <div className="fixed inset-x-0 mx-auto max-w-3xl">
        {/* Left line */}
        <div className="pointer-events-none absolute left-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
        {/* Right line */}
        <div className="pointer-events-none absolute right-0 h-screen w-px bg-gradient-to-b from-slate-400/30 via-slate-500/30 via-80% to-transparent" />
      </div>

      <Header />

      <div className="item-center mx-auto mt-20 mb-10 flex h-64 max-w-md flex-col justify-center gap-5 sm:h-96">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-highlight font- text-3xl">404</h1>
          <Separator orientation="vertical" className="" />
          <h2 className="text-muted-foreground font-heading">
            This page couldn't be found.
          </h2>
        </div>
        <div className="text-muted-foreground mx-auto text-sm font-light">
          <NavLink to={"/"}>
            Go to the <span className="text-highlight">Home page</span>
          </NavLink>
        </div>
      </div>
      <Separator className="mb-10 bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
      <Footer />
    </Container>
  );
};

export default NotFound;
