import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
