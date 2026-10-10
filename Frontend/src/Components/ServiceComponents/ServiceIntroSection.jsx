import React from "react";

function ServiceIntroduction() {
  return (
    <>
      <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
                alt="Professional salon service"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
              />
            </div>

            {/* Small Badge */}
            <div className="absolute -bottom-6 left-5 rounded-xl border border-[#E5B86A]/30 bg-[#12544F] px-6 py-5 shadow-xl sm:left-8">
              <p className="text-3xl font-bold text-[#E5B86A]">
                20+
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#B8C7C1] font-sans">
                Beauty Services
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              What We Offer
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              Everything You Need
              <span className="block text-[#E5B86A]">
                To Look Your Best
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
              From a fresh haircut to a complete beauty transformation,
              our services are designed to help you look confident and
              feel your best.
            </p>

            <p className="mt-4 text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
              Our experienced professionals use modern techniques and
              premium products to deliver personalized results for every
              client.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">

              <div className="rounded-xl border border-[#B8C7C1]/10 bg-[#12544F] p-4 text-center sm:p-5">
                <h3 className="text-2xl font-bold text-[#E5B86A] sm:text-3xl">
                  10+
                </h3>
                <p className="mt-2 text-xs text-[#B8C7C1] sm:text-sm font-sans">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl border border-[#B8C7C1]/10 bg-[#12544F] p-4 text-center sm:p-5">
                <h3 className="text-2xl font-bold text-[#E5B86A] sm:text-3xl">
                  5K+
                </h3>
                <p className="mt-2 text-xs text-[#B8C7C1] sm:text-sm font-sans">
                  Happy Clients
                </p>
              </div>

              <div className="rounded-xl border border-[#B8C7C1]/10 bg-[#12544F] p-4 text-center sm:p-5">
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
    </>
  );
}

export default ServiceIntroduction;