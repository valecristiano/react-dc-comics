export default function SocialFooter() {
  return (
    <section>
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
    </section>
  );
}
