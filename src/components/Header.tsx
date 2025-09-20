import { ModeToggle } from "@/components/ModeToggle";
import Container from "@/components/Container";
import { useState } from "react";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { title: "Contact", href: "/contact" },
    { title: "Blogs", href: "/blogs" },
  ];

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container className="sticky max-w-4xl">
      <div className="relative w-full px-5 pt-4 pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-muted-foreground tracking-tight">Ajay Shekhawat</h2>

          <nav className="text-muted-foreground hidden items-center gap-4 text-sm sm:flex">
            <Button variant="outline">
              <Download />
              Download CV
            </Button>
            <ul className="flex items-center gap-5">
              {navItems.map((navItem) => (
                <li key={navItem.title}>
                  <a href={navItem.href}>{navItem.title}</a>
                </li>
              ))}
            </ul>
            <ModeToggle />
          </nav>

          <div className="flex items-center gap-2 sm:hidden">
            <ModeToggle />

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {open && (
          <nav className="bg-secondary text-muted-foreground absolute top-15 right-5 z-10 w-48 rounded-md p-5 text-sm shadow-lg sm:hidden">
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline">
                <Download />
                Download CV
              </Button>
              <ul className="flex flex-col gap-2">
                {navItems.map((navItem) => (
                  <li key={navItem.title}>
                    <a href={navItem.href}>{navItem.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}

        {/* Full-width horizontal line */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/40 via-transparent to-slate-400/40" />
      </div>
    </Container>
  );
};

export default Header;
