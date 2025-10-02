import { ThemeProvider } from "@/components/theme-provider";
import { Routes, Route } from "react-router";
import { Home, Contact, Blog, NotFound } from "@/pages";

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
