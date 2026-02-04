export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="">
              <img src="public/dc-logo.png" alt="logoDc" height={50} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    CHARACTERS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    COMICS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    MOVIES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    TV
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    GAMES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    COLLECTIBLES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    VIDEOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    FANS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    NEWS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    SHOP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
