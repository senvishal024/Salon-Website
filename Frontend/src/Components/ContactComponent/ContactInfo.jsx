import React from "react";
import { useState } from "react";

function ContactInformation() {
  const [details,setDetails]=useState({name:"",phone:"",email:"",date:"",time:"",message:"",service:"",});
    const handleSubmit=async (e)=>{
      e.preventDefault();
      const response=await fetch("https://new-generation-salon-api.onrender.com/newgeneration/add-appoinment",{
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(details)
      })
      const data=await response.json();
      setDetails({name:"",phone:"",email:"",date:"",time:"",message:"",service:"",});
    }
  return (
    <section
      id="contact"
      className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Contact Us
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            We'd Love To
            <span className="block text-[#E5B86A]">
              Hear From You
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            Get in touch with us for appointments, service information,
            enquiries or any assistance you need.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">

          {/* Contact Details */}
          <div className="lg:col-span-2">

            <div className="h-full rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 sm:p-9">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
                Get In Touch
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-[#F1F4EF]">
                Let's Talk About
                <span className="block text-[#E5B86A]">
                  Your Next Look
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#B8C7C1] sm:text-base">
                Whether you're looking for a new hairstyle, beauty treatment
                or grooming service, our team is here to help you choose the
                right experience.
              </p>

              {/* Contact Items */}
              <div className="mt-9 space-y-6">

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-xl text-[#092328]">
                    ☎
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E5B86A]">
                      Phone
                    </p>

                    <p className="mt-1 text-base text-[#F1F4EF] font-sans">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-xl text-[#092328]">
                    ✉
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E5B86A]">
                      Email
                    </p>

                    <p className="mt-1 break-all text-base text-[#F1F4EF] font-sans">
                      hello@newgenerationsalon.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-xl text-[#092328]">
                    ⌖
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E5B86A]">
                      Address
                    </p>

                    <p className="mt-1 text-base leading-6 text-[#F1F4EF] font-sans">
                      Main Road, Your City,
                      <br />
                      Rajasthan, India
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5B86A] text-xl text-[#092328]">
                    ◷
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E5B86A]">
                      Opening Hours
                    </p>

                    <p className="mt-1 text-base text-[#F1F4EF] font-sans">
                      Mon - Sun: 10:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Social */}
              <div className="mt-10 border-t border-[#B8C7C1]/15 pt-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E5B86A]">
                  Follow Us
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8C7C1]/20 text-sm font-semibold text-[#F1F4EF] transition duration-300 hover:border-[#E5B86A] hover:bg-[#E5B86A] hover:text-[#092328]"
                  >
                    IG
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8C7C1]/20 text-sm font-semibold text-[#F1F4EF] transition duration-300 hover:border-[#E5B86A] hover:bg-[#E5B86A] hover:text-[#092328]"
                  >
                    FB
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8C7C1]/20 text-sm font-semibold text-[#F1F4EF] transition duration-300 hover:border-[#E5B86A] hover:bg-[#E5B86A] hover:text-[#092328]"
                  >
                    WA
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-[#B8C7C1]/10 bg-[#12544F] p-7 sm:p-9">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
                Send A Message
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-[#F1F4EF] sm:text-4xl">
                How Can We
                <span className="text-[#E5B86A]"> Help You?</span>
              </h3>

              <form className="mt-8" onSubmit={handleSubmit}>

                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#F1F4EF] font-sans">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#092328] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A] font-sans"
                      value={details.name}
                      onChange={(e)=>{
                        setDetails({
                          ...details,name:e.target.value
                        })
                      }}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#F1F4EF] font-sans">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#092328] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A] font-sans"
                      value={details.phone}
                      onChange={(e)=>{
                        setDetails({
                          ...details,phone:e.target.value
                        })
                      }}
                    />
                  </div>

                </div>

                {/* Email */}
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-[#F1F4EF] font-sans">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#092328] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A] font-sans"
                    value={details.email}
                      onChange={(e)=>{
                        setDetails({
                          ...details,email:e.target.value
                        })
                      }}
                  />
                </div>

                {/* Service */}
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-[#F1F4EF] font-sans">
                    Select Service
                  </label>

                  <select
                    className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#092328] px-4 py-3.5 text-sm text-[#B8C7C1] outline-none focus:border-[#E5B86A] font-sans"
                    value={details.service}
                      onChange={(e)=>{
                        setDetails({
                          ...details,service:e.target.value
                        })
                      }}
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option value="hair">Hair Services</option>
                    <option value="skin">Skin & Facial</option>
                    <option value="makeup">Makeup</option>
                    <option value="grooming">Grooming</option>
                    <option value="spa">Spa & Relaxation</option>
                  </select>
                </div>
                     <div className="grid gap-5 md:grid-cols-2 mt-5">

  {/* Date */}
  <input
    type="date"
    className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#092328] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A] font-sans"
    value={details.date}
    onChange={(e) => {
      setDetails({
        ...details,
        date: e.target.value
      });
    }}
  />

  {/* Time */}
  <input
    type="time"
    className="w-full rounded-xl border border-[#B8C7C1]/15 bg-[#092328] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A] font-sans"
    value={details.time}
    onChange={(e) => {
      setDetails({
        ...details,
        time: e.target.value
      });
    }}
  />

</div>
                {/* Message */}
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-[#F1F4EF] font-sans">
                    Your Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-[#B8C7C1]/15 bg-[#092328] px-4 py-3.5 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A] font-sans   "
                    value={details.message}
                      onChange={(e)=>{
                        setDetails({
                          ...details,message:e.target.value
                        })
                      }}
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-7 w-full rounded-full bg-[#2A835F] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] font-sans"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactInformation;