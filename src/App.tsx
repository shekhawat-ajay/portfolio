import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      {/* <Contact /> */}
    </ThemeProvider>
  );
}

export default App;
