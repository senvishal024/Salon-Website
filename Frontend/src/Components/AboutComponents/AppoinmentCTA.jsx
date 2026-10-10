import React from "react";
import { Link } from "react-router-dom";

function AppointmentCTA() {
  return (
    <>
      <section className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#E5B86A]/20 bg-[#12544F] px-6 py-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.20)] sm:px-10 lg:px-20">

            {/* Decorative Elements */}
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[#E5B86A]/20"></div>

            <div className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full border border-[#E5B86A]/20"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-3xl">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
                Your Next Look Starts Here
              </p>

              <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl lg:text-6xl">
                Ready to Feel
                <span className="block text-[#E5B86A]">
                  Your Best?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B8C7C1] sm:text-lg">
                Treat yourself to a beauty experience designed around you.
                Book your appointment today and let our experts bring your
                perfect style to life.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                

                <Link
                  to="/contact-page"
                  className="w-full rounded-full border border-[#E5B86A] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#E5B86A] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] sm:w-auto font-sans"
                >
                  Contact Us
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppointmentCTA;