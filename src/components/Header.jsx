const navbarLinks = [
  {
    url: "#",
    text: "CHARACTERS",
  },
  {
    url: "#",
    text: "COMICS",
  },
  {
    url: "#",
    text: "MOVIES",
  },
  {
    url: "#",
    text: "TV",
  },
  {
    url: "#",
    text: "GAMES",
  },
  {
    url: "#",
    text: "COLLECTIBLES",
  },
  {
    url: "#",
    text: "VIDEOS",
  },
  {
    url: "#",
    text: "FANS",
  },
  {
    url: "#",
    text: "NEWS",
  },
  {
    url: "#",
    text: "SHOP",
  },
];

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white mb-4">
        <div className="container">
          <a className="navbar-brand" href="">
            <img src="/dc-logo.png" alt="logoDc" height={50} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navbarLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link active" aria-current="page" href={link.url}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
