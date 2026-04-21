export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">

        <div>
          <h2>Bliizë</h2>
          <p className="footer-about">
            Elit commodo nec urna erat morbi at hac turpis aliquam.
            In tristique elit nibh turpis.
          </p>

          <div className="footer-social">
            {['fa-facebook-f','fa-twitter','fa-linkedin-in','fa-instagram'].map((ic,i)=>(
              <a key={i} className="f-soc" href="#"><i className={`fab ${ic}`}></i></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="f-head">Contact</h4>
          <p className="f-contact-row">bliize@gmail.com</p>
          <p className="f-contact-row">+(208) 555-0112</p>
        </div>

        <div>
          <h4 className="f-head">Quick Links</h4>
          <ul className="f-links">
            {['About','Services','Projects','Blog','Contact'].map((l,i)=>(
              <li key={i}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="f-head">Newsletter</h4>
          <div className="nl-wrap">
            <input className="nl-input" placeholder="Email" />
            <button className="nl-btn">Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-btm">
        <p>© 2025 Bliizë. All Rights Reserved.</p>

        <div className="footer-btm-links">
          {['Privacy','Terms','About','Login'].map((l,i)=>(
            <a key={i} href="#">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}