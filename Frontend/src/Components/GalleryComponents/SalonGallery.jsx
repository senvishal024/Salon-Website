import React from "react";

function OurSalon() {
  return (
    <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Visit Our Salon
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            More Than A Salon,
            <span className="block text-[#E5B86A]">
              It's An Experience
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            Step into a space designed for beauty, comfort and relaxation.
            Every detail is thoughtfully created to make your visit special.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop"
                alt="Salon interior"
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[350px]"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop"
                alt="Salon styling area"
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[350px]"
              />
            </div>

            <div className="col-span-2 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop"
                alt="Professional salon"
                className="h-[240px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[300px]"
              />
            </div>

          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
              Your Comfort Matters
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#F1F4EF] sm:text-4xl">
              A Beautiful Space
              <span className="block text-[#E5B86A]">
                For Your Beauty Journey
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
              Our salon is designed to give you more than just professional
              beauty services. From the moment you walk in, we want you to
              feel comfortable, relaxed and confident.
            </p>

            <p className="mt-4 text-base leading-8 text-[#B8C7C1] sm:text-lg font-sans">
              Our modern interiors, hygienic environment and welcoming
              atmosphere create the perfect setting for your beauty and
              grooming experience.
            </p>

            {/* Features */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B86A] text-lg text-[#092328]">
                  ✦
                </div>

                <h4 className="font-semibold text-[#F1F4EF]">
                  Modern Interiors
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#B8C7C1] font-sans">
                  A stylish and comfortable environment for every visit.
                </p>
              </div>

              <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B86A] text-lg text-[#092328]">
                  ✦
                </div>

                <h4 className="font-semibold text-[#F1F4EF]">
                  Hygienic Space
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#B8C7C1] font-sans">
                  Clean and hygienic surroundings for your peace of mind.
                </p>
              </div>

              <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B86A] text-lg text-[#092328]">
                  ✦
                </div>

                <h4 className="font-semibold text-[#F1F4EF]">
                  Relaxing Ambience
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#B8C7C1] font-sans">
                  A peaceful atmosphere where you can truly unwind.
                </p>
              </div>

              <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B86A] text-lg text-[#092328]">
                  ✦
                </div>

                <h4 className="font-semibold text-[#F1F4EF]">
                  Professional Care
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#B8C7C1] font-sans">
                  Experienced professionals focused on your needs.
                </p>
              </div>

            </div>

            {/* Button */}
            <div className="mt-9">
              <a
                href="/booking"
                className="inline-flex rounded-full bg-[#2A835F] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] font-sans"
              >
                Book Your Visit
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 

export default OurSalon;