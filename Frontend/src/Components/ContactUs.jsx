
import { useState } from "react";

function ContactUs() {
  const [details,setDetails]=useState({name:"",phone:"",email:"",date:"",time:"",message:"",service:"",});
  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log("add appoinment click")
    console.log("click before fetch")
    const response=await fetch("http://localhost:5000/newgeneration/add-appoinment",{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(details)
    })
    console.log("after fetchc")
    const data=await response.json();
    console.log("data",data)
    setDetails({name:"",phone:"",email:"",date:"",time:"",message:"",service:"",});
  }

  return (
    <section className="bg-[#092328] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#EC994B]"></span>

            <span className="text-sm uppercase tracking-[0.25em] text-[#EC994B]">
              Contact Us
            </span>

            <span className="h-px w-10 bg-[#EC994B]"></span>
          </div>

          <h2 className="text-4xl font-semibold text-[#F1EEE9] md:text-5xl">
            Let's Make You{" "}
            <span className="text-[#EC994B]">Feel Beautiful</span>
          </h2>

          <p className="mt-5 text-[#73777B]">
            Have a question or want to book an appointment?
            Get in touch with our team today.
          </p>

        </div>

        {/* Content */}
        <div className="grid overflow-hidden rounded-2xl border-1 border-[#B8C7C1]/50 bg-[#12544F] lg:grid-cols-2">

          {/* Contact Information */}
          <div className="p-8 md:p-12">

            <h3 className="text-2xl font-semibold text-[#F1EEE9]">
              Get In Touch
            </h3>

            <p className="mt-4 max-w-md leading-7 text-[#B8C7C1]">
              We're here to help you with appointments, services,
              pricing, or any questions you may have.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-7">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EC994B]/10 text-[#EC994B]">
                  📍
                </div>

                <div>
                  <h4 className="font-medium text-[#F1EEE9]">
                    Visit Us
                  </h4>
                  <p className="mt-1 text-sm text-[#B8C7C1] font-sans ">
                    123 Beauty Street, Udaipur, Rajasthan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EC994B]/10 text-[#EC994B]">
                  📞
                </div>

                <div>
                  <h4 className="font-medium text-[#F1EEE9]">
                    Call Us
                  </h4>
                  <p className="mt-1 text-sm text-[#B8C7C1] font-sans">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EC994B]/10 text-[#EC994B]">
                  ✉
                </div>

                <div>
                  <h4 className="font-medium text-[#F1EEE9]">
                    Email Us
                  </h4>
                  <p className="mt-1 text-sm text-[#B8C7C1] font-sans">
                    hello@ngsalon.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EC994B]/10 text-[#EC994B]">
                  🕒
                </div>

                <div>
                  <h4 className="font-medium text-[#F1EEE9]">
                    Opening Hours
                  </h4>
                  <p className="mt-1 text-sm text-[#B8C7C1] font-sans">
                    Mon - Sun: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#092328] p-8 md:p-12">

            <h3 className="text-2xl font-semibold text-[#F1EEE9]">
              Book An Appointment
            </h3>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={details.name}
                  onChange={(e)=>{
                    setDetails({
                      ...details,name:e.target.value
                    })
                  }}
                  className="w-full rounded-lg border border-[#73777B]/30 bg-transparent px-4 py-3 text-sm text-[#F1EEE9] outline-none placeholder:text-[#B8C7C1] focus:border-[#E5B86A] font-sans"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={details.phone}
                  onChange={(e)=>{
                    setDetails({
                      ...details,phone:e.target.value
                    })
                  }}
                  className="w-full rounded-lg border border-[#73777B]/30 bg-transparent px-4 py-3 text-sm text-[#F1EEE9] outline-none placeholder:text-[#B8C7C1] focus:border-[#E5B86A] font-sans"
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={details.email}
                onChange={(e)=>{
                  setDetails({
                    ...details,email:e.target.value
                  })
                }}
                className="w-full rounded-lg border border-[#73777B]/30 bg-transparent px-4 py-3 text-sm text-[#F1EEE9] outline-none placeholder:text-[#B8C7C1] focus:border-[#E5B86A] font-sans"
              />
                
              <select
                className="w-full rounded-lg border border-[#73777B]/30 bg-[#092328] px-4 py-3 text-sm text-[#B8C7C1] outline-none focus:border-[#E5B86A] font-sans"
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
                <div className="grid gap-5 md:grid-cols-2">

                    {/* Date */}
                    <input
                        type="date"
                        className="w-full rounded-lg border border-[#73777B]/30 bg-transparent px-4 py-3 text-sm text-[#B8C7C1] outline-none focus:border-[#E5B86A] font-sans"
                        value={details.date}
                        onChange={(e)=>{
                          setDetails({
                            ...details,date:e.target.value
                          })
                        }}
                    />

                    {/* Time */}
                    <input
                        type="time"
                        className="w-full rounded-lg border border-[#73777B]/30 bg-transparent px-4 py-3 text-sm text-[#B8C7C1] outline-none focus:border-[#E5B86A] font-sans"
                        value={details.time}
                        onChange={(e)=>{
                          setDetails({
                            ...details,time:e.target.value
                          })
                        }}
                    />

                    </div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-[#73777B]/30 bg-transparent px-4 py-3 text-sm text-[#F1EEE9] outline-none placeholder:text-[#B8C7C1] focus:border-[#E5B86A] font-sans"
                value={details.message}
                onChange={(e)=>{
                  setDetails({
                    ...details,message:e.target.value
                  })
                }}
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#E5B86A] py-3.5 text-sm font-semibold text-[#15133C] transition duration-300 hover:bg-[#F1EEE9] font-sans"
              >
                Send Appointment Request
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;