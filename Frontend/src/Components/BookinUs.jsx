import React from "react";
import Navbar from "./NavBar";

function Booking() {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen w-full bg-[#092328] px-5 py-24 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Book Your Visit
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            Your Beauty
            <span className="block text-[#E5B86A]">
              Starts Here
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            Choose your preferred service and schedule your appointment
            with our professional salon team.
          </p>
        </div>

        {/* Booking Card */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#E5B86A]/20 bg-[#12544F] shadow-2xl">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left Content */}
            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">

              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[#E5B86A]/10"></div>

              <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full border border-[#E5B86A]/10"></div>

              <div className="relative z-10">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
                  New Generation Salon
                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#F1F4EF] sm:text-4xl">
                  Let's Make Your
                  <span className="block text-[#E5B86A]">
                    Perfect Look
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-[#B8C7C1] sm:text-base">
                  Experience professional beauty and grooming services
                  tailored specially for you.
                </p>

                {/* Highlights */}
                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-[#092328]">
                      ✦
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#F1F4EF]">
                        Professional Services
                      </h4>
                      <p className="mt-1 text-sm text-[#B8C7C1]">
                        Expert care for your beauty needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-[#092328]">
                      ✦
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#F1F4EF]">
                        Premium Experience
                      </h4>
                      <p className="mt-1 text-sm text-[#B8C7C1]">
                        Comfort, quality and personalized care.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-[#092328]">
                      ✦
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#F1F4EF]">
                        Flexible Appointments
                      </h4>
                      <p className="mt-1 text-sm text-[#B8C7C1]">
                        Choose a convenient time for your visit.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Form */}
            <div className="border-t border-[#B8C7C1]/10 bg-[#092328]/40 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
                  Appointment Details
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[#F1F4EF] sm:text-3xl">
                  Book Your Appointment
                </h3>
              </div>

              <form className="space-y-5">

                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#F1F4EF]">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#12544F] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#F1F4EF]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#12544F] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A]"
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#F1F4EF]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#12544F] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A]"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#F1F4EF]">
                    Select Service
                  </label>

                  <select
                    className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#12544F] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none focus:border-[#E5B86A]"
                  >
                    <option className="bg-[#092328]">
                      Choose a service
                    </option>
                    <option className="bg-[#092328]">Hair Services</option>
                    <option className="bg-[#092328]">Skin & Facial</option>
                    <option className="bg-[#092328]">Makeup</option>
                    <option className="bg-[#092328]">Grooming</option>
                    <option className="bg-[#092328]">Spa & Relaxation</option>
                  </select>
                </div>

                {/* Date + Time */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#F1F4EF]">
                      Preferred Date
                    </label>

                    <input
                      type="date"
                      className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#12544F] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none focus:border-[#E5B86A]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#F1F4EF]">
                      Preferred Time
                    </label>

                    <input
                      type="time"
                      className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#12544F] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none focus:border-[#E5B86A]"
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#F1F4EF]">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us anything you'd like us to know..."
                    className="w-full resize-none rounded-xl border border-[#B8C7C1]/15 bg-[#12544F] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A]"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#2A835F] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328]"
                >
                  Confirm Appointment
                </button>

              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  );
}

export default Booking;