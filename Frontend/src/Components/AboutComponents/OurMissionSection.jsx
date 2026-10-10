import React from "react";

function MissionVision() {
  return (
    <>
      <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              What Drives Us
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              Our Mission &{" "}
              <span className="text-[#E5B86A]">Vision</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
              We believe beauty is more than appearance. It is about
              confidence, individuality and feeling your absolute best.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-7 md:grid-cols-2">

            {/* Mission */}
            <div className="group rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/40 hover:shadow-[0_15px_40px_rgba(229,184,106,0.10)] sm:p-10">

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#E5B86A]/10">
                <span className="text-2xl text-[#E5B86A]">
                  ✦
                </span>
              </div>

              <h3 className="mb-4 text-3xl font-semibold text-[#F1F4EF]">
                Our Mission
              </h3>

              <p className="text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
                Our mission is to provide exceptional beauty and grooming
                experiences that make every client feel confident,
                comfortable and valued. We combine modern techniques,
                quality products and personalized care to deliver results
                that truly match your personality.
              </p>

              <div className="mt-7 h-px w-20 bg-[#E5B86A] transition-all duration-500 group-hover:w-32"></div>
            </div>

            {/* Vision */}
            <div className="group rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/40 hover:shadow-[0_15px_40px_rgba(229,184,106,0.10)] sm:p-10">

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#E5B86A]/10">
                <span className="text-2xl text-[#E5B86A]">
                  ◇
                </span>
              </div>

              <h3 className="mb-4 text-3xl font-semibold text-[#F1F4EF]">
                Our Vision
              </h3>

              <p className="text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
                Our vision is to become a leading destination for modern
                beauty and styling where innovation, creativity and
                personalized service come together. We aim to continuously
                evolve while creating experiences our clients love to return
                to.
              </p>

              <div className="mt-7 h-px w-20 bg-[#E5B86A] transition-all duration-500 group-hover:w-32"></div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default MissionVision;