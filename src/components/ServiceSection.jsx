export default function ServiceSection({ links }) {
  return (
    <section>
      <div className="service-section d-flex justify-content-around px-5">
        {links.map((links, index) => (
          <div key={index} className="d-flex gap-2 align-items-center flex-wrap">
            <img className="img-fluid w-25" src={links.src} alt={links.text} />
            <p>{links.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
