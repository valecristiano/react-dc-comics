const navbarLinks = [
  {
    url: "#",
    text: "CHARACTERS",
    isActive: false,
  },
  {
    url: "#",
    text: "COMICS",
    isActive: true,
  },
  {
    url: "#",
    text: "MOVIES",
    isActive: false,
  },
  {
    url: "#",
    text: "TV",
    isActive: false,
  },
  {
    url: "#",
    text: "GAMES",
    isActive: false,
  },
  {
    url: "#",
    text: "COLLECTIBLES",
    isActive: false,
  },
  {
    url: "#",
    text: "VIDEOS",
    isActive: false,
  },
  {
    url: "#",
    text: "FANS",
    isActive: false,
  },
  {
    url: "#",
    text: "NEWS",
    isActive: false,
  },
  {
    url: "#",
    text: "SHOP",
    isActive: false,
  },
];

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white">
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
                <li key={index} className={"nav-item" + link.isActive ? " link-active" : ""}>
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
