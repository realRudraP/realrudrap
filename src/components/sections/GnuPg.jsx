import './GnuPg.css'
export default function GnuPg() {
    return (<section className="gnupg" id='gnupg'>
        <div className="terminal-session">
  <pre className="terminal-block">
    $ ls ~/.gnupg/
    pubkey.asc
    fingerprint.txt
    usage.txt
  </pre>

  <pre className="terminal-block">
    $ cat ~/.gnupg/fingerprint.txt
    487C BA67 0E9E FAC4 5E51 887E BAB4 6EFD 748E DA73
  </pre>

  <pre className="terminal-block">
    $ cat ~/.gnupg/usage.txt
    - commit signing
    - encrypted email
    - identity verification
  </pre>
</div>

    </section>
    )
}