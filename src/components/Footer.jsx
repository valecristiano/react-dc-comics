const footerLinks = [
  {
    title: "CD COMICS",
    menuLinks: [
      { url: "#", text: "Characters" },
      { url: "#", text: "Comics" },
      { url: "#", text: "Movies" },
      { url: "#", text: "TV" },
      { url: "#", text: "Games" },
      { url: "#", text: "Videos" },
      { url: "#", text: "News" },
    ],
  },
  {
    title: "SHOP",
    menuLinks: [
      { url: "#", text: "Shop DC" },
      { url: "#", text: "Shop DC Collectibles" },
    ],
  },
  {
    title: "DC",
    menuLinks: [
      { url: "#", text: "Terms of Use" },
      { url: "#", text: "Privacy policy" },
      { url: "#", text: "Ad Choices" },
      { url: "#", text: "Advertising" },
      { url: "#", text: "Jobs" },
      { url: "#", text: "Subscriptions" },
      { url: "#", text: "Talent Workshops" },
      { url: "#", text: "CPSC Certificates" },
      { url: "#", text: "Ratings" },
      { url: "#", text: "Shop Help" },
      { url: "#", text: "Contact Us" },
    ],
  },
  {
    title: "SITES",
    menuLinks: [
      { url: "#", text: "DC" },
      { url: "#", text: "MAD Magazine" },
      { url: "#", text: "DC Kids" },
      { url: "#", text: "DC Universe" },
      { url: "#", text: "DC Power Visa" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-bg text-white">
          <div className="container d-flex justify-content-between pt-3 pb-5 ">
            <div className="row mb-4">
              {footerLinks.map((linkTitle, index) => (
                <div key={index} className="col-6 col-md-3">
                  <h6>{linkTitle.title}</h6>
                  <ul className="list-unstyled text-secondary">
                    {linkTitle.menuLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <img src="public/dc-logo-bg.png" alt="" />
          </div>
        </div>
      </div>

      <div id="follow-us" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center py-3 ">
          <button className="btn btn-outline-primary text-white p-2 rounded-0 border-2">SIGN-UP NOW!</button>
          <div className="icons d-flex align-items-center">
            <a href="#" className="px-3 text-decoration-none fw-bold fs-6">
              FOLLOW US
            </a>
            <a href="#" className="px-1">
              <img src="/footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#" className="px-1">
              <img src="/footer-twitter.png" alt="Twitter" />
            </a>
            <a href="#" className="px-1">
              <img src="/footer-youtube.png" alt="Youtube" />
            </a>
            <a href="#" className="px-1">
              <img src="/footer-pinterest.png" alt="Pinterest" />
            </a>
            <a href="#" className="px-1">
              <img src="/footer-periscope.png" alt="Periscope" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
