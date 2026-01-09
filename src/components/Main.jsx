import './Main.css'
import Projects from './sections/Projects'
import Home from './sections/Home'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import GnuPg from './sections/GnuPg'
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
      <Blog/>
      <Contact/>
      <GnuPg/>
    </main>
  );
}
