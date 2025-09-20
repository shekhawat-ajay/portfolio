import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
