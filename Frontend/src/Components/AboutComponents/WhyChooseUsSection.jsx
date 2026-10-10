import React from "react";

function WhyChooseUs() {
  const features = [
    {
      icon: "✦",
      title: "Expert Stylists",
      description:
        "Our skilled professionals understand modern trends and create styles that perfectly suit your personality.",
    },
    {
      icon: "◇",
      title: "Premium Products",
      description:
        "We use carefully selected, high-quality beauty and hair care products for better results and lasting care.",
    },
    {
      icon: "♡",
      title: "Personalized Care",
      description:
        "Every client is different. We take time to understand your needs and provide services tailored to you.",
    },
    {
      icon: "✧",
      title: "Relaxing Experience",
      description:
        "Enjoy a welcoming and comfortable environment where you can relax, refresh and leave feeling confident.",
    },
  ];

  return (
    <>
      <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              More Than Just a{" "}
              <span className="text-[#E5B86A]">Salon</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
              From expert styling to personalized attention, we focus on
              creating an experience that makes you look and feel your best.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/40 hover:shadow-[0_15px_40px_rgba(229,184,106,0.10)]"
              >
                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#E5B86A]/30 bg-[#092328] transition duration-500 group-hover:border-[#E5B86A] group-hover:bg-[#E5B86A]">
                  <span className="text-2xl text-[#E5B86A] transition duration-500 group-hover:text-[#092328]">
                    {feature.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-semibold text-[#F1F4EF]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-7 text-[#B8C7C1] font-sans">
                  {feature.description}
                </p>

                {/* Bottom line */}
                <div className="mt-7 h-px w-12 bg-[#E5B86A] transition-all duration-500 group-hover:w-24"></div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;