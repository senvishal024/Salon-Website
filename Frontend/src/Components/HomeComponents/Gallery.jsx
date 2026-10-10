import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate=useNavigate();
  const images = [
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <section className="bg-[#092328] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#EC994B]"></span>

            <span className="text-sm uppercase tracking-[0.25em] text-[#EC994B]">
              Our Gallery
            </span>

            <span className="h-px w-10 bg-[#EC994B]"></span>
          </div>

          <h2 className="text-4xl font-semibold text-[#F1EEE9] md:text-5xl">
            A Glimpse of Our{" "}
            <span className="text-[#EC994B]">Work</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#73777B]">
            Explore our salon, beauty transformations and the moments
            that make every visit special.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-xl ${
                index === 0 || index === 3
                  ? "md:row-span-2"
                  : ""
              }`}
            >
              <img
                src={image}
                alt={`Salon Gallery ${index + 1}`}
                className={`h-full min-h-[220px] w-full object-cover transition duration-700 group-hover:scale-110 ${
                  index === 0 || index === 3
                    ? "md:min-h-[460px]"
                    : ""
                }`}
              />
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <button className="rounded-full border border-[#EC994B] px-7 py-3 text-sm font-medium text-[#EC994B] transition duration-300 hover:bg-[#EC994B] hover:text-[#15133C] font-sans"
          onClick={()=>navigate("/gallery-page")}>
            View Full Gallery
          </button>
        </div>

      </div>
    </section>
  );
}

export default Gallery;