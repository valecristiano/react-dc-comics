export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-bg d-flex">
          <div className="container text-white">Dc Comics</div>
          <img src="public/dc-logo-bg.png" alt="" />
        </div>
      </div>

      <div id="follow-us">
        <div className="container d-flex justify-content-between align-items-center py-3 ">
          <button>SIGN-UP NOW</button>
          <div className="icons">
            <a href="#" className="px-3">
              FOLLOW US
            </a>
            <a href="#" className="px-1">
              <img src="public/footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#" className="px-1">
              <img src="public/footer-twitter.png" alt="Twitter" />
            </a>
            <a href="#" className="px-1">
              <img src="public/footer-youtube.png" alt="Youtube" />
            </a>
            <a href="#" className="px-1">
              <img src="public/footer-pinterest.png" alt="Pinterest" />
            </a>
            <a href="#" className="px-1">
              <img src="public/footer-periscope.png" alt="Periscope" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
