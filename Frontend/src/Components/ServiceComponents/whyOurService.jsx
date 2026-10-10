import React from "react";

function WhyOurServices() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-fixed px-6 py-24 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#092328]/85"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            Why Our Services?
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            We combine professional expertise, premium products and
            personalized care to give you an experience that goes beyond
            ordinary salon services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="group rounded-2xl border border-[#B8C7C1]/15 bg-[#12544F]/90 p-7 text-center backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E5B86A]/40 bg-[#092328] text-2xl text-[#E5B86A] transition duration-300 group-hover:bg-[#E5B86A] group-hover:text-[#092328]">
              ✦
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#F1F4EF]">
              Experienced Professionals
            </h3>

            <p className="text-sm leading-6 text-[#B8C7C1] font-sans">
              Our skilled beauty professionals bring experience, creativity
              and attention to detail to every service.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl border border-[#B8C7C1]/15 bg-[#12544F]/90 p-7 text-center backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E5B86A]/40 bg-[#092328] text-2xl text-[#E5B86A] transition duration-300 group-hover:bg-[#E5B86A] group-hover:text-[#092328]">
              ♢
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#F1F4EF]">
              Premium Products
            </h3>

            <p className="text-sm leading-6 text-[#B8C7C1] font-sans">
              We use carefully selected premium products that deliver
              beautiful results while caring for your hair and skin.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border border-[#B8C7C1]/15 bg-[#12544F]/90 p-7 text-center backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E5B86A]/40 bg-[#092328] text-2xl text-[#E5B86A] transition duration-300 group-hover:bg-[#E5B86A] group-hover:text-[#092328]">
              ♡
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#F1F4EF]">
              Personalized Approach
            </h3>

            <p className="text-sm leading-6 text-[#B8C7C1] font-sans">
              Every client is different, so we personalize our services
              according to your style, preferences and needs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group rounded-2xl border border-[#B8C7C1]/15 bg-[#12544F]/90 p-7 text-center backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E5B86A]/40 bg-[#092328] text-2xl text-[#E5B86A] transition duration-300 group-hover:bg-[#E5B86A] group-hover:text-[#092328]">
              ✓
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#F1F4EF]">
              Hygiene & Comfort
            </h3>

            <p className="text-sm leading-6 text-[#B8C7C1] font-sans">
              A clean, comfortable and relaxing environment is maintained
              so you can enjoy every visit with complete peace of mind.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyOurServices;