import React from "react";

function SpaRelaxation({services}) {
/*   const services = [
    {
      title: "Relaxing Head Massage",
      description:
        "A soothing massage to help release tension and leave you feeling refreshed.",
      price: "₹399",
    },
    {
      title: "Body Spa",
      description:
        "Relax your body with a calming spa experience designed for complete relaxation.",
      price: "₹1,499",
    },
    {
      title: "Aromatherapy",
      description:
        "Enjoy a relaxing experience with soothing aromas and gentle therapeutic care.",
      price: "₹999",
    },
    {
      title: "Relaxation Treatment",
      description:
        "Take a break from your busy day with a personalized relaxing treatment.",
      price: "₹799",
    },
  ]; */

  return (
    <section
      className="relative w-full bg-cover bg-center bg-fixed px-6 py-20 md:px-12 lg:px-20 lg:py-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#092328]/85"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Spa & Relaxation
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            Relax Your Body,
            <span className="block text-[#E5B86A]">
              Refresh Your Mind
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#B8C7C1] sm:text-lg">
            Give yourself a moment to slow down. Enjoy a peaceful spa
            experience designed to help you unwind, refresh and feel your best.
          </p>
        </div>

        {/* Services */}
       
        <div className="mx-auto max-w-5xl space-y-5">
          {/* Service 1 */}
           {services.map((service,index) => (
          
          <div className="group rounded-2xl border border-[#B8C7C1]/15 bg-[#12544F]/90 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#E5B86A]/50" key={index}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex gap-4">
                <span className="text-sm font-bold text-[#E5B86A]">
                  {index+1}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-[#F1F4EF] sm:text-xl">
                    {service.name}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#B8C7C1] font-sans">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:gap-8">
                <span className="text-lg font-bold text-[#E5B86A]">
                  ₹{service.price}
                </span>

                <a
                  href="/booking-page"
                  className="text-sm font-semibold text-[#E5B86A] transition duration-300 hover:text-[#F1F4EF] font-sans"
                >
                  Book Now →
                </a>
              </div>

            </div>
          </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/booking-page"
            className="inline-flex rounded-full bg-[#2A835F] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] font-sans"
          >
            Book Your Relaxation
          </a>
        </div>

      </div>
    </section>
  );
}

export default SpaRelaxation;