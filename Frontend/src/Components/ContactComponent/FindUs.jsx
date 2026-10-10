import React from "react";

function FindUs() {
  return (
    <section className="w-full bg-[#092328] px-5 py-20 sm:px-6 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Find Us
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            Come Visit
            <span className="block text-[#E5B86A]">
              Our Salon
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            We're ready to welcome you. Visit us for a relaxing and
            personalized beauty experience.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid overflow-hidden rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F] lg:grid-cols-2">

          {/* ================= LOCATION DETAILS ================= */}
          <div className="p-7 sm:p-10 lg:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
              Our Location
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#F1F4EF] sm:text-4xl">
              We'd Love To
              <span className="block text-[#E5B86A]">
                Welcome You
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#B8C7C1] sm:text-base">
              Visit our salon and enjoy professional beauty services in a
              comfortable, modern and welcoming environment.
            </p>

            {/* Address */}
            <div className="mt-9 flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-xl text-[#092328]">
                ⌖
              </div>

              <div>
                <h4 className="font-semibold text-[#F1F4EF]">
                  Salon Address
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#B8C7C1] font-sans">
                  Main Road, Udaipur,
                  <br />
                  Rajasthan, India
                </p>
              </div>

            </div>

            {/* Opening Hours */}
            <div className="mt-7 flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-xl text-[#092328]">
                ◷
              </div>

              <div>
                <h4 className="font-semibold text-[#F1F4EF]">
                  Opening Hours
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#B8C7C1] font-sans">
                  Monday - Sunday
                  <br />
                  10:00 AM - 9:00 PM
                </p>
              </div>

            </div>

            {/* Contact */}
            <div className="mt-7 flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-xl text-[#092328]">
                ☎
              </div>

              <div>
                <h4 className="font-semibold text-[#F1F4EF]">
                  Call Us
                </h4>

                <p className="mt-1 text-sm text-[#B8C7C1] font-sans">
                  +91 98765 43210
                </p>
              </div>

            </div>

            {/* Get Directions */}
            <a
              href="https://maps.app.goo.gl/raocX27qAfPuMgrg7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#2A835F] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] font-sans"
            >
              Get Directions
            </a>

          </div>

          {/* ================= GOOGLE MAP ================= */}
          <div className="min-h-[400px] overflow-hidden lg:min-h-[550px]">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.1734343232315!2d73.654572575362!3d24.583210078111335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e54c5b05511d%3A0xd9d9ce94dedafa12!2sNew%20Generation%20Familysalon!5e0!3m2!1sen!2sin!4v1788419128914!5m2!1sen!2sin"
              className="h-[400px] w-full border-0 lg:h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="New Generation Salon Location"
            ></iframe>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FindUs;