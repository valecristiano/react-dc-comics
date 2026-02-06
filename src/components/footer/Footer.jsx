import FooterCard from "./FooterCard";
import SocialFooter from "./SocialFooter";

export default function Footer({ links }) {
  return (
    <footer>
      <section>
        <div className="footer">
          <div className="footer-bg text-white">
            <div className="container d-flex justify-content-between pt-3 pb-5 ">
              <div className="row mb-4">
                {links.map((linkTitle, index) => (
                  <div key={index} className="col-6 col-md-3">
                    <h6>{linkTitle.title}</h6>
                    <ul className="list-unstyled text-secondary">
                      {linkTitle.menuLinks.map((link, index) => (
                        <FooterCard key={index} href={link.href} text={link.text} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <img src="public/dc-logo-bg.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <SocialFooter />
    </footer>
  );
}
