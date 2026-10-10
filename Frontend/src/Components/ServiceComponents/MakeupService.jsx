import React from "react";

function MakeupServices({services}) {
 /*  const services = [
    {
      title: "Party Makeup",
      description:
        "A glamorous yet natural look designed to make you stand out at parties and special occasions.",
      price: "₹1,499",
    },
    {
      title: "Bridal Makeup",
      description:
        "A complete bridal look customized to your style, outfit and special day.",
      price: "₹5,999",
    },
    {
      title: "Engagement Makeup",
      description:
        "An elegant and polished makeup look perfect for your engagement ceremony.",
      price: "₹2,499",
    },
    {
      title: "HD Makeup",
      description:
        "A flawless, camera-ready makeup look with a lightweight and natural finish.",
      price: "₹2,999",
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
              Makeup Services
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              Your Look,
              <span className="block text-[#E5B86A]">
                Perfectly Defined
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
              From subtle elegance to glamorous transformations, our makeup
              artists create looks that make every special moment memorable.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/40 hover:shadow-[0_15px_40px_rgba(229,184,106,0.12)]"
              >

                {/* Decorative Number */}
                <span className="absolute -right-2 -top-5 text-8xl font-bold text-[#E5B86A]/5 transition duration-500 group-hover:text-[#E5B86A]/10">
                  {index + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#092328] text-2xl text-[#E5B86A]">
                  ✦
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-[#F1F4EF]">
                    {service.name}
                  </h3>

                  <p className="mt-4 min-h-[112px] text-base leading-7 text-[#B8C7C1] font-sans">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 border-t border-[#B8C7C1]/10 pt-5">
                    <p className="text-xs uppercase tracking-wider text-[#B8C7C1]">
                      Starting From
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#E5B86A]">
                      {service.price}
                    </p>
                  </div>

                  {/* Button */}
                  <a
                    href="/booking-page"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#2A835F] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] font-sans"
                  >
                    Book Now
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

export default MakeupServices;