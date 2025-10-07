import { Container } from "@/components";
import { Button } from "@/components/ui";
import {
  BlueSkyIcon,
  DiscordIcon,
  EmailIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./Icons";

const Connect = () => {
  const socialHandles = [
    {
      name: "Email Me",
      Icon: EmailIcon,
      link: "mailto:ajayshekhawat.dev@gmail.com",
    },
    {
      name: "GitHub",
      Icon: GitHubIcon,
      link: "https://github.com/meiajayhoon",
    },
    {
      name: "LinkedIN",
      Icon: LinkedinIcon,
      link: "https://linkedin.com/in/meiajayhoon",
    },
    /*
    {
      name: "Peerlist",
      Icon: PeerlistIcon,
      link: "https://peerlist.io/meiajayhoon",
    },
    */
    {
      name: "Discord",
      Icon: DiscordIcon,
      link: "https://discord.com/users/779936999362920448",
    },
    { name: "Twitter", Icon: TwitterIcon, link: "https://x.com/meiajayhoon" },
    { name: "BlueSky", Icon: BlueSkyIcon, link: "https://x.com/meiajayhoon" },
  ];
  return (
    <Container className="relative max-w-3xl">
      <div className="mt-5 max-w-fit px-3 pb-6 sm:px-5">
        <h2 className="text-muted-foreground font-heading mb-5 text-sm">
          Where to find me (digitally)
        </h2>
        <div>
          <ul className="flex flex-wrap gap-3">
            {socialHandles.map((handle) => (
              <li key={handle.name}>
                <a href={handle.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="hover:ring-accent-foreground cursor-pointer delay-100 hover:ring"
                  >
                    <handle.Icon className="mr-0.5 size-5" />
                    {handle.name}
                  </Button>
                </a>
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
