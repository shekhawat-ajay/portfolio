import { ModeToggle } from "@/components/ModeToggle";
import Container from "./Container";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blogs", href: "/blogs" },
  ];

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container className="sticky max-w-4xl">
      <div className="relative w-full pt-5 pb-5 px-5">
        <div className="flex items-center justify-between">
          <ModeToggle />

          <nav className="text-muted-foreground hidden items-center gap-4 text-sm sm:flex">
            <ul className="flex gap-5">
              {navItems.map((navItem) => (
                <li key={navItem.title}>
                  <a href={navItem.href}>{navItem.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            className="sm:hidden"
            variant="secondary"
            size="sm"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </Button>
        </div>

        {open && (
          <nav className="absolute top-15 right-5 z-10 w-48 rounded-md bg-secondary p-5 text-sm text-muted-foreground shadow-lg sm:hidden">
            <ul className="flex flex-col gap-5">
              {navItems.map((navItem) => (
                <li key={navItem.title}>
                  <a href={navItem.href}>{navItem.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {/* Full-width horizontal line */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/40 via-transparent to-slate-400/40" />
      </div>
    </Container>
  );
};

export default Header;
