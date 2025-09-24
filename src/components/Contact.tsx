import Container from "@/components/Container";
import {} from "lucide-react";

const Contact = () => {
  return (
    <Container className="relative mt-5 max-w-3xl">
      <div className="max-w-xl px-3 pb-6 sm:px-5">
        <h3 className="text-muted-foreground text-sm">
          Where to find me (digitally) if you wish to
        </h3>
        <div></div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-300/10 via-transparent to-slate-300/10" />
    </Container>
  );
};

export default Contact;
