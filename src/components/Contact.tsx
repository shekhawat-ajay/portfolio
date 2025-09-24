import Container from "@/components/Container";
import { Button } from "./ui/button";

const Contact = () => {
  const socialHandles = [
    { name: "Email Me", path: "/google-gmail.svg" },
    { name: "Twitter", path: "/x-light.svg" },
    { name: "GitHub", path: "/github.svg" },
    { name: "LinkedIN", path: "/linkedin-icon.svg" },
    { name: "Peerlist", path: "/peerlist.webp" },
  ];
  return (
    <Container className="relative mt-5 max-w-3xl">
      <div className="max-w-xl px-3 pb-6 sm:px-5">
        <h3 className="text-muted-foreground text-sm mb-5">
          Where to find me (digitally) if you wish to
        </h3>
        <div>
          <ul className="flex flex-wrap gap-3">
            {socialHandles.map((handle) => (
              <li key={handle.name}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="hover:ring-accent-foreground delay-100 hover:ring"
                >
                  <img src={handle.path} alt="" width={15} />
                  {handle.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-300/10 via-transparent to-slate-300/10" />
    </Container>
  );
};

export default Contact;
