import './Home.css'
export default function Home() {
  return (
    <section className="whoami">
  <div className="whoami-prose">
    <p>
      Cybersecurity student focused on backend systems, infrastructure,
      and the parts of Linux people usually discover only after something breaks.
    </p>

    <p>
      I prefer systems that are predictable, observable, and boring in production.
      Most of my work revolves around understanding <em>why</em> something behaves
      the way it does before trying to optimize or exploit it.
    </p>

    <p>
      I am not interested in chasing frameworks.
      I am interested in building things that survive contact with reality.
    </p>
  </div>

  <div className="whoami-terminal">
    <div className="cmd">$ id</div>
    <pre className="output">
uid=1000(rudra) groups=systems,security,linux
    </pre>

    <div className="cmd">$ gpg --list-keys</div>
    <pre className="output">
pub   ed25519 2025-12-28 [SC]<br></br>
      487C BA67 0E9E FAC4 5E51 887E BAB4 6EFD 748E DA73 <br></br>
uid   Rudra Ponkshe &lt;rudra.ponkshe@protonmail.com&gt;
    </pre>

    <div className="whoami-links">
      <span>[keybase]</span>
      <a href="https://keybase.io/litmus">keybase.io/litmus</a>
    </div>

    <div className="whoami-links">
      <span>[gpg]</span>
      <a href="/gpg-key.asc">download public key</a>
    </div>
  </div>
  <p className="muted">
  This key is used for commit signing and encrypted communication.
</p>

</section>

  )
}