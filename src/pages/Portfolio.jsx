function Portfolio() {
  return (
    <section className="px-12 py-20 mt-20">
      <div className="grid grid-cols-3 gap-[25px] max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="h-[400px] overflow-hidden rounded-xl mb-5">
          <img
            src="/portfolio/p4.webp"
            className="transition-transform duration-300 transform hover:scale-105  object-cover"
            alt=""
          />
        </div>
        <div className="h-[400px] overflow-hidden rounded-xl mb-5">
          <img
            src="/portfolio/p5.webp"
            className="transition-transform duration-300 transform hover:scale-105  object-cover"
            alt=""
          />
        </div>
        <div className="h-[400px] overflow-hidden rounded-xl mb-5">
          <img
            src="/portfolio/p6.webp"
            className="transition-transform duration-300 transform hover:scale-105  object-cover"
            alt=""
          />
        </div>
        <div className="h-[400px] overflow-hidden rounded-xl mb-5">
          <img
            src="/portfolio/D.webp"
            className="transition-transform duration-300 transform hover:scale-105  object-cover"
            alt=""
          />
        </div>
        <div className="h-[400px] overflow-hidden rounded-xl mb-5">
          <img
            src="/portfolio/just2.webp"
            className="transition-transform duration-300 transform hover:scale-105  object-cover"
            alt=""
          />
        </div>
        <div className="h-[400px] overflow-hidden rounded-xl mb-5">
          <img
            src="/portfolio/p3.webp"
            className="transition-transform duration-300 transform hover:scale-105  object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
