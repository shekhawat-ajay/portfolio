import Container from "@/components/Container";
import { Menu } from "lucide-react";
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
    { title: "Home", href: "/home" },
    { title: "Contact", href: "/contact" },
    { title: "Blogs", href: "/blogs" },
    // { title: "Labs", href: "/labs" },
    // { title: "Changelog", href: "/changelog" },
    // { title: "Projects", href: "/projects" },
    // { title: "Experience", href: "/experience" },
    // { title: "Achievements", href: "/achievements" },
  ];

  return (
    <Container className="max-w-3xl">
      <div className="relative px-3 pt-4 pb-4 sm:px-5">
        <div className="flex items-center justify-between">
          <ModeToggle />

          <nav className="text-muted-foreground hidden items-center gap-4 text-sm sm:flex">
            <ul className="flex items-center gap-5">
              {navItems.map((navItem) => (
                <li key={navItem.title} className="hover:text-primary">
                  <a href={navItem.href}>{navItem.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:hidden">
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
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/10 via-slate-500/45 to-slate-400/10" />
      </div>
    </Container>
  );
};

export default Header;
