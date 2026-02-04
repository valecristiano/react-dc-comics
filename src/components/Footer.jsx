export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-bg text-white">
          <div className="container d-flex justify-content-between pt-3 pb-5 ">
            <div>
              <h6>DC COMICS</h6>
              <ul className="list-unstyled text-secondary">
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
              <h6>SHOP</h6>
              <ul className="list-unstyled text-secondary">
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>
            <div>
              <h6>DC</h6>
              <ul className="list-unstyled text-secondary">
                <li>Terms of Use</li>
                <li>Privacy policy</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Ratings</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h6>SITES</h6>
              <ul className="list-unstyled text-secondary">
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
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
