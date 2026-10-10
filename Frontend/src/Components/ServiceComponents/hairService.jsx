import React from "react";
import { useNavigate } from "react-router-dom";

function HairServices({services}) {
  const navigate=useNavigate();
  /* const services = [
    {
      title: "Haircut & Styling",
      description:
        "Professional haircut and styling tailored to your face shape and personal style.",
      price: "₹499",
    },
    {
      title: "Hair Spa",
      description:
        "A relaxing hair spa treatment to nourish, hydrate and refresh your hair.",
      price: "₹899",
    },
    {
      title: "Hair Coloring",
      description:
        "Give your hair a fresh new look with professional color and expert application.",
      price: "₹1,499",
    },
    {
      title: "Hair Highlights",
      description:
        "Add dimension and personality to your look with beautifully placed highlights.",
      price: "₹1,299",
    },
    {
      title: "Keratin Treatment",
      description:
        "Smooth, manageable and naturally glossy hair with our professional keratin treatment.",
      price: "₹2,999",
    },
    {
      title: "Hair Smoothening",
      description:
        "Achieve smoother, softer and more manageable hair with our smoothening service.",
      price: "₹2,499",
    },
  ]; */

  return (
    <>
      <section
        id="services"
        className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              Hair Services
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              Style Your Hair,
              <span className="block text-[#E5B86A]">
                Your Way
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
              From everyday styling to complete hair transformations,
              discover services created to give your hair the care it deserves.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <div
                key={service._id}
                className="group flex flex-col rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/40 hover:shadow-[0_15px_40px_rgba(229,184,106,0.10)]"
              >

                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-widest text-[#E5B86A]">
                    0{index + 1}
                  </span>

                  <span className="text-2xl text-[#E5B86A]">
                    ✦
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#F1F4EF]">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-grow text-base leading-7 text-[#B8C7C1] font-sans">
                  {service.description}
                </p>

                {/* Price + Button */}
                <div className="mt-7 flex items-center justify-between border-t border-[#B8C7C1]/10 pt-5">

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#B8C7C1]">
                      Starting From
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#E5B86A] ">
                      {service.price}
                    </p>
                  </div>

                  <a
                    href="/booking-page"
                    className="rounded-full bg-[#2A835F] px-5 py-2.5 text-sm font-semibold text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] font-sans"
                   
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

export default HairServices;