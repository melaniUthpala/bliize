/* ── Footer ── */
export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <div className="footer-logo-wrap"><BliizeLogo color="white" width={110} /></div>
          <p className="footer-about">Elit commodo nec urna erat morbi at hac turpis aliquam. In tristique elit nibh turpis. Lacus volutpat ipsum convallis tellus pellentesque etiam.</p>
          <div className="footer-social">
            {['fa-facebook-f','fa-twitter','fa-linkedin-in','fa-instagram'].map((ic,i)=>(
              <a key={i} href="#" className="f-soc"><i className={`fab ${ic}`}/></a>
            ))}
          </div>
        </div>
        <div>
          <div className="f-head">Contact</div>
          <div className="f-contact-row"><i className="fas fa-envelope"/>bliize@gmail.com</div>
          <div className="f-contact-row"><i className="fas fa-phone"/>+(208) 555-0112</div>
          <div className="f-contact-row"><i className="fas fa-map-marker-alt"/>4517 Washington Ave.<br/>Manchter, Kentucky 495</div>
        </div>
        <div>
          <div className="f-head">Quick Link</div>
          <ul className="f-links">
            {['About Us','Services','Projects','Blog','Contact'].map((l,i)=>(
              <li key={i}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="f-head">Newsletter</div>
          <div className="nl-wrap">
            <input type="email" className="nl-input" placeholder="Your Email..."/>
            <button className="nl-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <p>Copyright © 2025 Bliize. All Rights Reserved.</p>
        <div className="footer-btm-links">
          {['privacy & Policy','Terms','About us','Login'].map((l,i)=>(
            <a key={i} href="#">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
