import Container from "@/components/Container";
import { Input } from "@/components/ui/input";

Container;
const GetInTouch = () => {
  return (
    <Container className="relative max-w-3xl">
      <h2 className="font-heading text-primary mx-auto mt-10 max-w-md pb-10 text-center text-3xl">
        Let's work <span className="text-highlight">together!</span>
      </h2>
      <div className="mx-auto flex max-w-md flex-col gap-2 pb-10">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Subject" />
        <Input type="text" placeholder="Message" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
    </Container>
  );
};

export default GetInTouch;
