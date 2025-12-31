import './Main.css'
import Projects from './sections/Projects'
import Home from './sections/Home'

import { useEffect } from 'react';

export default function Main({ setActiveSection }) {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);
  return (
    <main className="main">
      <Home />
      <Projects />

      <section id="blog" className="section">
        <h2 className="section-title">$ cat blog/</h2>
        <p className="section-text">Work in progress.</p>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">$ cat contact.txt</h2>
        <p className="section-text">Work in progress.</p>
      </section>
    </main>
  );
}
