import './Main.css'
import Projects from './sections/Projects'
import Home from './sections/Home'

export default function Main() {
  return (
    <main className="main">
      <Home/>
      <Projects/>
      
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
