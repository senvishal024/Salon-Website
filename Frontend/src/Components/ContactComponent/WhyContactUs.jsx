import React from "react";

function ContactQuickInfo() {
    
  return (
    <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            We're Here For You
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
            Everything You Need,
            <span className="block text-[#E5B86A]">
              Just A Message Away
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg ">
            Whether you have a question or need help choosing a service,
            our team is always happy to assist you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="group rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#E5B86A]/40">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E5B86A] text-2xl text-[#092328]">
              ☎
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#F1F4EF]">
              Quick Response
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#B8C7C1] font-sans">
              Get a quick response from our team for your enquiries and
              appointment requests.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#E5B86A]/40">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E5B86A] text-2xl text-[#092328]">
              ✦
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#F1F4EF]">
              Expert Guidance
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#B8C7C1] font-sans">
              Not sure which service is right for you? Our professionals
              can help you choose.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#E5B86A]/40">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E5B86A] text-2xl text-[#092328]">
              ◷
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#F1F4EF]">
              Flexible Timing
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#B8C7C1] font-sans">
              Contact us to find a convenient time for your next salon
              experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#E5B86A]/40">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E5B86A] text-2xl text-[#092328]">
              ♥
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#F1F4EF]">
              Personal Care
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#B8C7C1] font-sans">
              Every client matters to us. We focus on making your visit
              comfortable and special.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactQuickInfo;