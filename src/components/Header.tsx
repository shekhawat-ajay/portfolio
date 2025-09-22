import Container from "@/components/Container";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header = () => {
  const navItems = [
    { title: "Contact", href: "/contact" },
    { title: "Blogs", href: "/blogs" },
    // { title: "Labs", href: "/labs" },
  ];

  return (
    <Container className="sticky max-w-3xl">
      <div className="relative w-full px-3 pt-4 pb-4 sm:px-5">
        <div className="flex items-center justify-between">
          <h2 className="text-muted-foreground hover:text-primary tracking-tight">
            <a href="/home">Ajay Shekhawat</a>
          </h2>

          <nav className="text-muted-foreground hidden items-center gap-4 text-sm sm:flex">
            <Button variant="outline">
              <Download />
              Download CV
            </Button>
            <ul className="flex items-center gap-5">
              {navItems.map((navItem) => (
                <li key={navItem.title} className="hover:text-primary">
                  <a href={navItem.href}>{navItem.title}</a>
                </li>
              ))}
            </ul>
            <ModeToggle />
          </nav>

          <div className="flex items-center gap-2 sm:hidden">
            <ModeToggle />
            <Menubar className="border-none">
              <MenubarMenu>
                <MenubarTrigger>
                  <Menu
                    size={16}
                    strokeWidth={2}
                    className="text-accent-foreground"
                  />
                </MenubarTrigger>
                <MenubarContent className="sm:hidden">
                  <MenubarItem>
                    <Download />
                    Download CV
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Contact</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Blogs</MenubarItem>
                  {/* <MenubarSeparator /> */}
                  {/* <MenubarItem>Labs</MenubarItem> */}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>

        {/* Full-width horizontal line */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/40 via-transparent to-slate-400/40" />
      </div>
    </Container>
  );
};

export default Header;
