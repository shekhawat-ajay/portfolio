import { Container } from "@/components";
import { Button } from "@/components/ui";

const Footer = () => {
  const socialHandles = [ 
    { name: "GitHub", path: "/github.svg", link: "github.com", size: 17 },
    { name: "LinkedIN", path: "/linkedin.svg", link: "linkedIN.com", size: 17 },
    { name: "Discord", path: "/discord.svg", link: "Discord.com", size: 17 },
    { name: "BlueSky", path: "/bluesky.svg", link: "BlueSky.com", size: 17 },
    { name: "Twitter", path: "/x-light.svg", link: "twitter.com", size: 12 },
  ];
  return (
    <Container className="relative max-w-3xl">
      <div className="max-w-md mx-auto">
        <div className="mt-10 mb-5">
          <ul className="flex justify-center flex-wrap gap-3">
            {socialHandles.map((handle) => (
              <li key={handle.name}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="hover:ring-accent-foreground cursor-pointer delay-100 hover:ring"
                >
                  <img src={handle.path} alt={handle.name} width={handle.size} />
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted-foreground text-balance text-center text-xs font-light mb-10">
          © {new Date().getFullYear()} Ajay Shekhawat. All rights reserved
          (even the bugs).
        </p>
      </div>
    </Container>
  );
};

export default Footer;
