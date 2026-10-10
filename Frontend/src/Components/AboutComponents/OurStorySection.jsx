import React from "react";

function OurStory() {
  return (
    <>
      <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
                alt="Salon interior"
                className="h-[420px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[500px]"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-4 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-[#092328] bg-[#E5B86A] text-center shadow-xl sm:right-8">
              <span className="text-3xl font-bold text-[#092328]">
                10+
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#092328] font-sans">
                Years
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              Our Story
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              Where Beauty Meets
              <span className="block text-[#E5B86A]">
                Confidence
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
              <p>
                Our journey began with a simple vision — to create a salon
                where beauty, comfort and personal style come together.
              </p>

              <p>
                Over the years, we have grown into a trusted destination for
                people who believe that looking good should also feel good.
                Every service we provide is designed around your individual
                style and personality.
              </p>

              <p>
                From modern hair styling to relaxing beauty treatments, our
                experienced team focuses on quality, attention to detail and
                making every visit a memorable experience.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-xl border border-[#B8C7C1]/10 bg-[#12544F] p-5 text-center">
                <h3 className="text-3xl font-bold text-[#E5B86A]">
                  10+
                </h3>
                <p className="mt-1 text-sm text-[#B8C7C1] font-sans">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl border border-[#B8C7C1]/10 bg-[#12544F] p-5 text-center">
                <h3 className="text-3xl font-bold text-[#E5B86A]">
                  5K+
                </h3>
                <p className="mt-1 text-sm text-[#B8C7C1] font-sans">
                  Happy Clients
                </p>
              </div>

              <div className="col-span-2 rounded-xl border border-[#B8C7C1]/10 bg-[#12544F] p-5 text-center sm:col-span-1">
                <h3 className="text-3xl font-bold text-[#E5B86A]">
                  20+
                </h3>
                <p className="mt-1 text-sm text-[#B8C7C1] font-sans">
                  Beauty Services
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default OurStory;