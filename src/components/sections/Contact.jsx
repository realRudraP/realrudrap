import './Contact.css'
export default function Contact(){
return(
<section className="contact">
  <div className="contact-terminal">
    <div className="cmd">$ cat ~/contact.txt</div>

    <div className="contact-entry">
      <span className="label">Email</span>
      <a href="mailto:rudra.ponkshe@protonmail.com">
        rudra.ponkshe@protonmail.com
      </a>
    </div>

    <div className="contact-entry">
      <span className="label">PGP</span>
      <span className="value mono">
        487C BA67 0E9E FAC4 5E51 887E BAB4 6EFD 748E DA73
      </span>
    </div>

    <div className="contact-entry">
      <span className="label">Keybase</span>
      <a href="https://keybase.io/l1tmus">keybase.io/l1tmus</a>
    </div>

    <div className="contact-entry">
      <span className="label">GitHub</span>
      <a href="https://github.com/realRudraP">github.com/realRudraP</a>
    </div>

    <div className="contact-entry">
      <span className="label">LinkedIn</span>
      <a href="https://linkedin.com/in/rudraponkshe">
        linkedin.com/in/rudraponkshe
      </a>
    </div>
  </div>
</section>


)
}