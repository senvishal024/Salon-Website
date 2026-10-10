import React from "react";

function SkinFacialServices({services}) {
  /* const services = [
    {
      title: "Classic Facial",
      description:
        "A refreshing facial treatment that cleanses, nourishes and leaves your skin feeling soft and refreshed.",
      price: "₹799",
    },
    {
      title: "Glow Facial",
      description:
        "Brighten and refresh your skin with a glow-focused facial designed for a fresh and radiant appearance.",
      price: "₹999",
    },
    {
      title: "Deep Cleansing",
      description:
        "A deep cleansing treatment that helps remove impurities and leaves your skin feeling clean and refreshed.",
      price: "₹699",
    },
    {
      title: "Skin Cleanup",
      description:
        "A gentle cleanup treatment for removing dirt and excess oil while giving your skin a fresh look.",
      price: "₹499",
    },
    {
      title: "Detan Treatment",
      description:
        "Refresh your skin with a professional detan treatment designed to improve the appearance of uneven skin tone.",
      price: "₹599",
    },
    {
      title: "Premium Skin Treatment",
      description:
        "A personalized premium treatment focused on refreshing and improving the overall appearance of your skin.",
      price: "₹1,499",
    },
  ]; */

  return (
    <>
      <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              Skin & Facial
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              Healthy Skin,
              <span className="block text-[#E5B86A]">
                Beautiful Glow
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
              Relax, refresh and give your skin the care it deserves with our
              range of professional facial and skincare services.
            </p>
          </div>

          {/* Services */}
          <div className="grid gap-6 lg:grid-cols-2">

            {services.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col gap-6 rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-6 transition-all duration-500 hover:border-[#E5B86A]/40 hover:bg-[#12544F]/90 sm:flex-row sm:items-center sm:p-7"
              >

                {/* Number */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E5B86A]/30 bg-[#092328] text-xl font-semibold text-[#E5B86A] transition duration-500 group-hover:border-[#E5B86A] group-hover:bg-[#E5B86A] group-hover:text-[#092328]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-2xl font-semibold text-[#F1F4EF]">
                      {service.name}
                    </h3>

                    <span className="text-xl font-bold text-[#E5B86A]">
                      ₹{service.price}
                    </span>
                  </div>

                  <p className="mt-3 max-w-xl text-base leading-7 text-[#B8C7C1] font-sans">
                    {service.description}
                  </p>

                  <div className="mt-5">
                    <a
                      href="/booking-page"
                      className="inline-flex items-center rounded-full border border-[#2A835F] px-5 py-2.5 text-sm font-semibold text-[#F1F4EF] transition duration-300 hover:bg-[#2A835F] hover:text-[#F1F4EF] font-sans"
                    >
                      Book Now
                    </a>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default SkinFacialServices;