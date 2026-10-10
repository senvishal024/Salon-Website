import React from "react";

function OurTeam() {
  const team = [
    {
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
      name: "Aarav Sharma",
      role: "Creative Director",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
      name: "Priya Mehta",
      role: "Senior Hair Stylist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
      name: "Neha Kapoor",
      role: "Beauty Specialist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
      name: "Rohan Verma",
      role: "Style Consultant",
    },
  ];

  return (
    <>
      <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
              Meet Our Team
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl">
              The People Behind Your{" "}
              <span className="text-[#E5B86A]">Style</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
              Our talented team brings creativity, experience and passion to
              every appointment.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] transition duration-500 hover:-translate-y-2 hover:border-[#E5B86A]/40 hover:shadow-[0_15px_40px_rgba(229,184,106,0.10)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092328]/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#F1F4EF]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-wider text-[#E5B86A]">
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="mt-5 flex justify-center gap-3">
                    <a
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8C7C1]/20 text-sm text-[#B8C7C1] transition duration-300 hover:border-[#E5B86A] hover:bg-[#E5B86A] hover:text-[#092328]"
                    >
                      f
                    </a>

                    <a
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8C7C1]/20 text-sm text-[#B8C7C1] transition duration-300 hover:border-[#E5B86A] hover:bg-[#E5B86A] hover:text-[#092328]"
                    >
                      in
                    </a>

                    <a
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8C7C1]/20 text-sm text-[#B8C7C1] transition duration-300 hover:border-[#E5B86A] hover:bg-[#E5B86A] hover:text-[#092328]"
                    >
                      ig
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

export default OurTeam;