import ComicsCards from "./ComicsCard";

export default function ComicsList({ comics }) {
  return (
    <section className="container mt-3">
      <div id="comics ">
        <div className="row g-0">
          {comics.map((comic) => (
            <ComicsCards key={comic.id} src={comic.thumb} alt={comic.title} series={comic.series} />
          ))}
        </div>
      </div>
    </section>
  );
}
