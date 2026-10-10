import React from "react";

function ExperienceStats() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              Our Experience
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              Experience You Can{" "}
              <span className="text-[#E5B86A]">Trust</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
              Years of experience, thousands of happy clients and a passion
              for beauty define everything we do.
            </p>
          </div>

          {/* Stats */}
          <div className="grid overflow-hidden rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F]/90 sm:grid-cols-2 lg:grid-cols-4">

            {/* Stat 1 */}
            <div className="group border-b border-[#B8C7C1]/10 p-8 text-center transition duration-500 hover:bg-[#12544F] sm:border-r lg:border-b-0">
              <div className="mb-4 text-4xl text-[#E5B86A]">
                ✦
              </div>

              <h3 className="text-5xl font-bold text-[#F1F4EF] transition duration-500 group-hover:text-[#E5B86A]">
                10+
              </h3>

              <p className="mt-3 text-sm uppercase tracking-widest text-[#B8C7C1] font-sans">
                Years Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group border-b border-[#B8C7C1]/10 p-8 text-center transition duration-500 hover:bg-[#12544F] lg:border-b-0 lg:border-r">
              <div className="mb-4 text-4xl text-[#E5B86A]">
                ♡
              </div>

              <h3 className="text-5xl font-bold text-[#F1F4EF] transition duration-500 group-hover:text-[#E5B86A] font-sans">
                5K+
              </h3>

              <p className="mt-3 text-sm uppercase tracking-widest text-[#B8C7C1] font-sans">
                Happy Clients
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group border-b border-[#B8C7C1]/10 p-8 text-center transition duration-500 hover:bg-[#12544F] sm:border-r lg:border-b-0 lg:border-r">
              <div className="mb-4 text-4xl text-[#E5B86A]">
                ✧
              </div>

              <h3 className="text-5xl font-bold text-[#F1F4EF] transition duration-500 group-hover:text-[#E5B86A]">
                20+
              </h3>

              <p className="mt-3 text-sm uppercase tracking-widest text-[#B8C7C1] font-sans">
                Beauty Services
              </p>
            </div>

            {/* Stat 4 */}
            <div className="group p-8 text-center transition duration-500 hover:bg-[#12544F]">
              <div className="mb-4 text-4xl text-[#E5B86A]">
                ★
              </div>

              <h3 className="text-5xl font-bold text-[#F1F4EF] transition duration-500 group-hover:text-[#E5B86A]">
                4.9
              </h3>

              <p className="mt-3 text-sm uppercase tracking-widest text-[#B8C7C1] font-sans">
                Client Rating
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default ExperienceStats;