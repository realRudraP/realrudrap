import './Main.css'
export default function Main() {
  return (
    <main className="main">
      <section id="home" className="section">
        <h2 className="section-title">$ whoami</h2>
        <p className="section-text">
          cybersecurity student focused on backend systems,
          security, and infrastructure.
        </p>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">$ ls projects/</h2>
        <p className="section-text">Work in progress.</p>
      </section>

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
