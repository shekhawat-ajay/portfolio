import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog"
import NotFound from "@/pages/NotFound";
import { Routes, Route } from "react-router";

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
