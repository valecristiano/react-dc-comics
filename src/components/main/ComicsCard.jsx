export default function ComicsCards({ src, alt, series }) {
  return (
    <figure className="comic-img-figure col-4 col-lg-2">
      <div className="comic-img-main">
        <img src={src} alt={alt} />
      </div>
      <figcaption>{series}</figcaption>
    </figure>
  );
}
