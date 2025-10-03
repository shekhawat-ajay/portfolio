import { Container } from "@/components";
import { Button } from "@/components/ui";

const Connect = () => {
  const socialHandles = [
    {
      name: "Email Me",
      path: "/google-gmail.svg",
      link: "email.com",
      size: 17,
    },
    { name: "GitHub", path: "/github.svg", link: "github.com", size: 17 },
    { name: "LinkedIN", path: "/linkedin.svg", link: "linkedIN.com", size: 17 },
    {
      name: "Peerlist",
      path: "/peerlist.webp",
      link: "peerlist.com",
      size: 17,
    },
    { name: "Discord", path: "/discord.svg", link: "Discord.com", size: 17 },
    { name: "BlueSky", path: "/bluesky.svg", link: "BlueSky.com", size: 17 },
    { name: "Twitter", path: "/x-light.svg", link: "twitter.com", size: 12 },
  ];
  return (
    <Container className="relative max-w-3xl">
      <div className="mt-5 max-w-lg px-3 pb-6 sm:px-5">
        <h2 className="text-muted-foreground font-heading mb-5 text-sm">
          Where to find me (digitally) if you wish to
        </h2>
        <div>
          <ul className="flex flex-wrap gap-3">
            {socialHandles.map((handle) => (
              <li key={handle.name}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="hover:ring-accent-foreground cursor-pointer delay-100 hover:ring"
                >
                  <img src={handle.path} alt="" width={handle.size} />
                  {handle.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
    </Container>
  );
};

export default Connect;
