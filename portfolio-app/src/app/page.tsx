'use client';
import { useEffect, useState } from "react";
import Header from "..//components/layout/Header/Header";
import About from "../components/layout/About/About";
import Projects from "../components/layout/Projects/Projects";
import Contact from "../components/layout/Contact/Contact";
import Footer from "..//components/layout/Footer/Footer";
import "./globals.css";

export default function Homepage() {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    const goToTop = document.getElementById("header");
    const goToAbout = document.getElementById("about");
    const goToProjects = document.getElementById("projects");
    const goToContact = document.getElementById("contact");

    if (goToTop && goToAbout && goToProjects && goToContact) {
      setIsMounted(true);
    };
  }, []);

  function scrollToTop() {
    if (mounted) {
      const goToTop = document.getElementById("header");
      goToTop?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  };

  function scrollToAbout() {
    if (mounted) {
      const goToAbout = document.getElementById("about");
      goToAbout?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  };

  function scrollToProjects() {
    if (mounted) {
      const goToProjects = document.getElementById("projects");
      goToProjects?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  };

  function scrollToContact() {
    if (mounted) {
      const goToContact = document.getElementById("contact");
      goToContact?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  };

  return (
    <div>
      <header>
        <section id="header">
          <Header scrollToTop={scrollToTop} scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} />
        </section>
      </header>
      <main>
        <section id="about" className="section-padding">
          <About />
        </section>
        <section id="projects" className="section-padding">
          <Projects />
        </section>
        <section id="contact" className="section-padding">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};