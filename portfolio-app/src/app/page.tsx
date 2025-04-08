import Header from "..//components/layout/Header/Header";
import About from "../components/layout/About/About";
import Projects from "../components/layout/Projects/Projects";
import Contact from "../components/layout/Contact/Contact";
import Footer from "..//components/layout/Footer/Footer";
import "./globals.css";

export default function Homepage() {
  return (
    <div>
      <header>
        <section id="header">
          <Header />
        </section>
      </header>
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};