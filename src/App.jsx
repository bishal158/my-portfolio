import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/header";
import About from "./components/About.jsx";
import { EducationAndExperience } from "./components/EducationAndExperience.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <EducationAndExperience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
