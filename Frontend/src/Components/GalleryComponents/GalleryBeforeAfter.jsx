import React from "react";

function BeforeAfter() {
  return (
    <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Real Transformations
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            Before & After
            <span className="block text-[#E5B86A]">
              See The Difference
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            Every transformation is a reflection of our creativity,
            expertise and attention to detail.
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="group overflow-hidden rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F]">
            <div className="grid grid-cols-2">

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=700&auto=format&fit=crop"
                  alt="Before hair transformation"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 rounded-full bg-[#092328]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F1F4EF]">
                  Before
                </span>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=700&auto=format&fit=crop"
                  alt="After hair transformation"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute bottom-3 right-3 rounded-full bg-[#E5B86A] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#092328]">
                  After
                </span>
              </div>

            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                Hair Styling
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#F1F4EF]">
                Complete Hair Transformation
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group overflow-hidden rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F]">
            <div className="grid grid-cols-2">

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=700&auto=format&fit=crop"
                  alt="Before makeup transformation"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 rounded-full bg-[#092328]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F1F4EF]">
                  Before
                </span>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=700&auto=format&fit=crop"
                  alt="After makeup transformation"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute bottom-3 right-3 rounded-full bg-[#E5B86A] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#092328]">
                  After
                </span>
              </div>

            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                Makeup
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#F1F4EF]">
                Glam Makeup Transformation
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group overflow-hidden rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F]">
            <div className="grid grid-cols-2">

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=700&auto=format&fit=crop"
                  alt="Before grooming transformation"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 rounded-full bg-[#092328]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F1F4EF]">
                  Before
                </span>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=700&auto=format&fit=crop"
                  alt="After grooming transformation"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute bottom-3 right-3 rounded-full bg-[#E5B86A] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#092328]">
                  After
                </span>
              </div>

            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                Grooming
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#F1F4EF]">
                Grooming & Beard Makeover
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;