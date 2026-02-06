export default function ComicsList({ comics }) {
  return (
    <section className="container mt-3">
      <div id="comics ">
        <div className="row g-0">
          {comics.map((comic, index) => (
            <figure key={index} className="comic-img-figure col-4 col-lg-2">
              <div className="comic-img-main">
                <img src={comic.thumb} alt={comic.title} />
              </div>
              <figcaption>{comic.series}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
