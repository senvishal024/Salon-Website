import React from "react";

function GroomingServices({services}) {
  /* const services = [
    {
      title: "Beard Styling",
      description:
        "Professional beard shaping and styling to create a clean look that suits your face.",
      price: "₹299",
    },
    {
      title: "Beard Trim",
      description:
        "Keep your beard neat, balanced and well-maintained with a professional trim.",
      price: "₹199",
    },
    {
      title: "Classic Shaving",
      description:
        "Enjoy a smooth and comfortable traditional shaving experience with expert care.",
      price: "₹249",
    },
    {
      title: "Head Massage",
      description:
        "Relax and refresh with a soothing head massage designed to help you unwind.",
      price: "₹399",
    },
    {
      title: "Hair & Beard Combo",
      description:
        "A complete grooming session combining a professional haircut with beard styling.",
      price: "₹699",
    },
    {
      title: "Complete Grooming",
      description:
        "A complete grooming experience including haircut, beard styling and relaxing care.",
      price: "₹999",
    },
  ];
 */
  return (
    <>
      <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              Grooming Services
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              Look Sharp,
              <span className="block text-[#E5B86A]">
                Feel Confident
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
              Professional grooming services designed to keep your look
              fresh, clean and perfectly styled.
            </p>
          </div>

          {/* Services */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#E5B86A]/40 hover:shadow-[0_15px_40px_rgba(229,184,106,0.10)]"
              >

                {/* Number */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E5B86A]/30 bg-[#092328] text-sm font-bold text-[#E5B86A] transition duration-500 group-hover:border-[#E5B86A] group-hover:bg-[#E5B86A] group-hover:text-[#092328]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-[#F1F4EF]">
                      {service.name}
                    </h3>

                    <span className="shrink-0 text-lg font-bold text-[#E5B86A]">
                      {service.price}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#B8C7C1] font-sans">
                    {service.description}
                  </p>

                  <a
                    href="/booking-page"
                    className="mt-4 inline-block text-sm font-semibold text-[#E5B86A] transition duration-300 hover:text-[#F1F4EF] font-sans"
                  >
                    Book Now →
                  </a>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default GroomingServices;