import React from "react";

function ServicePackages() {
  return (
    <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Our Packages
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            Beauty Packages
            <span className="block text-[#E5B86A]">
              Made For You
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            Choose the perfect combination of beauty and grooming services
            designed to give you more value and a complete salon experience.
          </p>
        </div>

        {/* Packages */}
        <div className="grid gap-7 lg:grid-cols-3">

          {/* Basic Package */}
          <div className="relative flex flex-col rounded-3xl border border-[#B8C7C1]/15 bg-[#12544F] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
              Basic
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-[#F1F4EF]">
              Basic Glow
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#B8C7C1]">
              A simple beauty package for a fresh and refreshed look.
            </p>

            <div className="mt-7 border-b border-[#B8C7C1]/15 pb-7">
              <span className="text-4xl font-bold text-[#E5B86A]">
                ₹1,499
              </span>
            </div>

            <div className="mt-7 space-y-4">

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Haircut & Styling
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Skin Cleanup
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Head Massage
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Beard Trim
              </p>

            </div>

            <a
              href="/booking"
              className="mt-8 rounded-full border border-[#E5B86A]/50 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#E5B86A] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328]"
            >
              Choose Package
            </a>
          </div>


          {/* Premium Package */}
          <div className="relative flex flex-col rounded-3xl border-2 border-[#E5B86A]/60 bg-[#12544F] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-2">

            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#E5B86A] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#092328]">
              Most Popular
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
              Premium
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-[#F1F4EF]">
              Premium Care
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#B8C7C1]">
              A complete beauty and grooming experience for a polished look.
            </p>

            <div className="mt-7 border-b border-[#B8C7C1]/15 pb-7">
              <span className="text-4xl font-bold text-[#E5B86A]">
                ₹2,999
              </span>
            </div>

            <div className="mt-7 space-y-4">

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Haircut & Styling
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Premium Facial
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Hair Spa
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Beard Styling
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Head Massage
              </p>

            </div>

            <a
              href="/booking"
              className="mt-8 rounded-full bg-[#2A835F] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328]"
            >
              Choose Package
            </a>
          </div>


          {/* Luxury Package */}
          <div className="relative flex flex-col rounded-3xl border border-[#B8C7C1]/15 bg-[#12544F] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
              Luxury
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-[#F1F4EF]">
              Luxury Makeover
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#B8C7C1]">
              The ultimate salon experience for a complete transformation.
            </p>

            <div className="mt-7 border-b border-[#B8C7C1]/15 pb-7">
              <span className="text-4xl font-bold text-[#E5B86A]">
                ₹4,999
              </span>
            </div>

            <div className="mt-7 space-y-4">

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Premium Hair Styling
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Luxury Facial
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Hair Treatment
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Premium Grooming
              </p>

              <p className="flex items-center gap-3 text-sm text-[#F1F4EF]">
                <span className="text-[#E5B86A]">✓</span>
                Relaxing Spa
              </p>

            </div>

            <a
              href="/booking"
              className="mt-8 rounded-full border border-[#E5B86A]/50 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#E5B86A] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328]"
            >
              Choose Package
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicePackages;