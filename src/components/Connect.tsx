import { Container } from "@/components";
import { Button } from "@/components/ui";
import {
  BlueSkyIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/Icons";

const Connect = () => {
  const socialHandles = [
    {
      name: "GitHub",
      Icon: GitHubIcon,
      link: "https://github.com/shekhawat-ajay",
    },
    {
      name: "LinkedIN",
      Icon: LinkedinIcon,
      link: "#",
    },
    {
      name: "Discord",
      Icon: DiscordIcon,
      link: "#",
    },
    { name: "Twitter", Icon: TwitterIcon, link: "https://x.com/meiajayhoon" },
    {
      name: "BlueSky",
      Icon: BlueSkyIcon,
      link: "https://bsky.app/profile/ajayshekhawat.bsky.social",
    },
  ];
  return (
    <Container className="relative max-w-xl">
      <div className="mt-6 px-3 pb-10 sm:px-5">
        <h2 className="text-muted-foreground font-heading text-sm">
          Where to find me (digitally)
        </h2>
        <div className="mt-6">
          <ul className="flex flex-wrap gap-2">
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
