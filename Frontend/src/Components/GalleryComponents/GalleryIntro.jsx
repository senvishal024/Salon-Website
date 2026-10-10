import React from "react";

function GalleryIntroduction() {
  return (
    <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Images */}
        <div className="relative min-h-[500px]">

          {/* Main Image */}
          <div className="absolute left-0 top-0 w-[72%] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop"
              alt="Salon beauty styling"
              className="h-[380px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px]"
            />
          </div>

          {/* Second Image */}
          <div className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-3xl border-8 border-[#092328]">
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop"
              alt="Professional salon makeup"
              className="h-[260px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[300px]"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute bottom-20 left-5 rounded-2xl border border-[#E5B86A]/30 bg-[#12544F] px-5 py-4 shadow-xl sm:left-8">
            <p className="text-3xl font-bold text-[#E5B86A]">
              10+
            </p>

            <p className="mt-1 text-xs uppercase tracking-wider text-[#B8C7C1] font-sans">
              Years Experience
            </p>
          </div>

        </div>

        {/* Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Explore Our Work
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
            Moments Of Beauty,
            <span className="block text-[#E5B86A]">
              Style & Confidence
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
            Take a look at some of our favourite transformations and salon
            experiences. From beautiful hairstyles to detailed makeup and
            grooming, every look reflects our passion for beauty.
          </p>

          <p className="mt-4 text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
            Our gallery showcases the creativity, care and attention to detail
            that goes into every service we provide.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">

            <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-4 text-center sm:p-5">
              <h3 className="text-2xl font-bold text-[#E5B86A] sm:text-3xl">
                500+
              </h3>

              <p className="mt-2 text-xs text-[#B8C7C1] sm:text-sm font-sans">
                Transformations
              </p>
            </div>

            <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-4 text-center sm:p-5">
              <h3 className="text-2xl font-bold text-[#E5B86A] sm:text-3xl">
                20+
              </h3>

              <p className="mt-2 text-xs text-[#B8C7C1] sm:text-sm font-sans">
                Beauty Services
              </p>
            </div>

            <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-4 text-center sm:p-5">
              <h3 className="text-2xl font-bold text-[#E5B86A] sm:text-3xl">
                4.9
              </h3>

              <p className="mt-2 text-xs text-[#B8C7C1] sm:text-sm font-sans">
                Client Rating
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GalleryIntroduction;