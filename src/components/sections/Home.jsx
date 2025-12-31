import './Home.css'
export default function Home() {
  return (
    <section id="home" className="section">
      <h2 className="section-title">$ whoami</h2>

      <p className="section-text">
        Cybersecurity student focused on backend systems, infrastructure, and the
        parts of Linux people usually discover only after something breaks.
      </p>

      <p className="section-text">
        I like systems that are predictable, observable, and boring in production.
        Most of my work revolves around understanding <em>why</em> something behaves
        the way it does before trying to optimize or exploit it.
      </p>

      <p className="section-text">
        I am not interested in chasing frameworks. I am interested in building
        things that survive contact with reality.
      </p>

      <p className="section-meta">
        December 2025. Still allergic to unnecessary abstractions.
      </p>

       <h2 className="section-title">$ cat ~/.links</h2>

  <ul className="links-list">
    <li>
      <span>[github]</span>
      <a href="https://github.com/realRudraP" target="_blank" rel="noreferrer">
        github.com/realRudraP
      </a>
    </li>
    <li>
      <span>[linkedin]</span>
      <a href="https://linkedin.com/in/rudraponkshe" target="_blank" rel="noreferrer">
        linkedin.com/in/rudraponkshe
      </a>
    </li>
    <li>
      <span>[email]</span>
      <a href="mailto:rudra.ponkshe@protonmail.com">
        rudra.ponkshe@protonmail.com
      </a>
    </li>
  </ul>
    </section>

    
    

  )
}