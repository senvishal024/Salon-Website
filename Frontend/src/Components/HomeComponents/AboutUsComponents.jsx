import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutUsComponents() {
  const navigate=useNavigate();
  return (
    <>
           <section className="bg-[#092328] px-6 py-20 md:px-12 lg:px-20">
            
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        
        {/* Left - Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
              alt="Salon Interior"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-105 md:h-[550px]"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-3 rounded-xl border border-[#EC994B]/30 bg-[#092328] px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] md:-right-6">
            <p className="text-4xl font-bold text-[#E5B86A]">10+</p>
            <p className="mt-1 text-sm text-[#B8C7C1] font-sans">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Right - Content */}
        <div className="text-[#F1EEE9]">

          {/* Small Heading */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[1px] w-10 bg-[##E5B86A]"></span>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#E5B86A]">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl text-[#F1F4EF]">
            Where Beauty Meets
            <span className="block text-[#E5B86A]">
              Confidence
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 font-sans text-[#B8C7C1]">
            We believe that beauty is more than just an appearance. It's
            about feeling confident, refreshed, and truly yourself. Our salon
            brings together experienced professionals, premium products, and
            a relaxing atmosphere to create an experience you'll love.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 font-sans text-[#B8C7C1]">
            From modern hair styling to personalized beauty treatments, every
            service is carefully designed around your unique style and needs.
          </p>

          {/* Stats */}
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-y border-[#B8C7C1]/30 py-6">

            <div>
              <h3 className="text-2xl font-semibold text-[#F1F4EF]">
                10+
              </h3>
              <p className="mt-1 text-xs text-[#B8C7C1] font-sans">
                Years
              </p>
            </div>

            <div className="border-x border-[#73777B]/30 px-4">
              <h3 className="text-2xl font-semibold text-[#F1F4EF]">
                5K+
              </h3>
              <p className="mt-1 text-xs text-[#B8C7C1] font-sans">
                Happy Clients
              </p>
            </div>

            <div className="pl-4">
              <h3 className="text-2xl font-semibold text-[#F1F4EF]">
                20+
              </h3>
              <p className="mt-1 text-xs text-[#B8C7C1] font-sans">
                Beauty Services
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="mt-8 rounded-full bg-[#EC994B] px-7 py-3.5 text-sm font-semibold text-[#15133C] transition duration-300 hover:bg-[#F1EEE9] hover:shadow-[0_8px_30px_rgba(236,153,75,0.25)] font-sans"
          onClick={()=>navigate("/about-page")}>
            Discover Our Story
          </button>

        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUsComponents
