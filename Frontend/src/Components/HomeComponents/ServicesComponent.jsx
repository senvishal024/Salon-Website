import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function ServicesComponent() {
  const navigate=useNavigate();
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetchServices();
  },[])
  const fetchServices=async ()=>{
    const response =await fetch("http://localhost:5000/newgeneration/show-services",{
      credentials:"include",
    })
    const data=await response.json();
    setServices(data);
  }
  /* const services = [
    {
      name: "Hair Cut & Styling",
      description: "Professional haircut with personalized styling.",
      price: "₹499",
    },
    {
      name: "Hair Spa",
      description: "Deep nourishment and relaxing hair treatment.",
      price: "₹899",
    },
    {
      name: "Hair Coloring",
      description: "Premium hair color with expert consultation.",
      price: "₹1,499",
    },
    {
      name: "Facial",
      description: "Rejuvenating facial for healthy glowing skin.",
      price: "₹799",
    },
    {
      name: "Manicure",
      description: "Complete nail care with a relaxing hand treatment.",
      price: "₹499",
    },
    {
      name: "Pedicure",
      description: "Refreshing foot care with premium products.",
      price: "₹599",
    },
    {
      name: "Bridal Makeup",
      description: "Elegant and personalized bridal makeup.",
      price: "₹4,999",
    },
    {
      name: "Party Makeup",
      description: "Glamorous makeup for special occasions.",
      price: "₹1,999",
    },
  ]; */

  return (
    <>
     <section className=" bg-[#092328] w-full px-6 py-24 md:px-12 lg:px-20 ">

  {/* Heading */}
  <div className="mx-auto mb-16 max-w-2xl text-center">

    <span className="text-sm font-medium tracking-[4px] text-[#F1F4EF]">
      OUR SERVICES
    </span>

    <h2 className="mt-4 text-4xl font-medium text-[#F1F4EF] md:text-5xl">
      Beauty & Care,{" "}
      <span className="font-serif italic">
        Made For You
      </span>
    </h2>

    <p className="mt-5 leading-7 text-[#B8C7C1]">
      Discover our premium beauty and styling services,
      thoughtfully designed to make you look and feel your best.
    </p>

  </div>


  {/* Services */}
  <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">

    {/* Card */}
    <div className="group  bg-[#12544F] p-8 transition duration-500 ease-in-out hover:-translate-y-2    hover:shadow-2xl/20 shadow-white/60 ">

      <span className="text-sm tracking-widest text-[#F1EEE9]">
        01
      </span>

      <h3 className="mt-8 text-2xl font-medium text-[#F1EEE9]">
        Hair Styling
      </h3>

      <p className="mt-4 leading-7 text-[#B8C7C1] font-sans">
        Professional cuts and styling designed to complement
        your personality and individual style.
      </p>

      <Link
        to="/services-page#services
        "
        className="mt-6 inline-block text-sm  font-semibold text-[#8BBB92] transition-all duration-300 group-hover:text-[#E5B86A] font-sans"
      >
        Explore Service →
      </Link>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E5B86A] to-transparent"></div>
    </div>
      



    <div className="group  bg-[#12544F] p-8 transition duration-500 ease-in-out hover:-translate-y-2    hover:shadow-2xl/20 shadow-white/60 ">

      <span className="text-sm tracking-widest text-[#F1EEE9]">
        02
      </span>

      <h3 className="mt-8 text-2xl font-medium text-[#F1EEE9]">
        Hair Coloring
      </h3>

      <p className="mt-4 leading-7 text-[#B8C7C1] font-sans">
        Beautiful, vibrant and professionally blended colors
        for a fresh and confident new look.
      </p>

      <a
        href="/services-page"
        className="mt-6 inline-block text-sm  font-semibold text-[#8BBB92] transition-all duration-300 group-hover:text-[#E5B86A] font-sans"
      >
        Explore Service →
      </a>
       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E5B86A] to-transparent"></div>
    </div>


    <div className="group  bg-[#12544F] p-8 transition duration-500 ease-in-out hover:-translate-y-2    hover:shadow-2xl/20 shadow-white/60 ">

      <span className="text-sm tracking-widest text-[#F1EEE9]">
        03
      </span>

      <h3  className="mt-8 text-2xl font-medium text-[#F1EEE9]">
        Facial & Skin Care
      </h3>

      <p className="mt-4 leading-7 text-[#B8C7C1] font-sans">
        Relaxing treatments that refresh, nourish and
        reveal your skin's natural glow.
      </p>

      <a
        href="/services-page"
         className="mt-6 inline-block text-sm  font-semibold text-[#8BBB92] transition-all duration-300 group-hover:text-[#E5B86A] font-sans"
      >
        Explore Service →
      </a>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E5B86A] to-transparent"></div>
    </div>


    <div className="group  bg-[#12544F] p-8 transition duration-500 ease-in-out hover:-translate-y-2    hover:shadow-2xl/20 shadow-white/60 ">

      <span className="text-sm tracking-widest text-[#F1EEE9]">
        04
      </span>

      <h3  className="mt-8 text-2xl font-medium text-[#F1EEE9]">
        Makeup
      </h3>

      <p className="mt-4 leading-7 text-[#B8C7C1] font-sans">
        Elegant makeup looks crafted for weddings,
        parties and every special occasion.
      </p>

      <a
        href="/services-page"
         className="mt-6 inline-block text-sm  font-semibold text-[#8BBB92] transition-all duration-300 group-hover:text-[#E5B86A] font-sans"
      >
        Explore Service →
      </a>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E5B86A] to-transparent"></div>
    </div>


    <div className="group  bg-[#12544F] p-8 transition duration-500 ease-in-out hover:-translate-y-2    hover:shadow-2xl/20 shadow-white/60 ">

      <span  className="mt-8 text-2xl font-medium text-[#F1EEE9]">
        05
      </span>

      <h3  className="mt-8 text-2xl font-medium text-[#F1EEE9]">
        Manicure & Pedicure
      </h3>

      <p className="mt-4 leading-7 text-[#B8C7C1] font-sans">
        Give your hands and feet the care they deserve
        with our relaxing beauty treatments.
      </p>

      <a
        href="/services-page"
         className="mt-6 inline-block text-sm  font-semibold text-[#8BBB92] transition-all duration-300 group-hover:text-[#E5B86A] font-sans"
      >
        Explore Service →
      </a>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EC994B] to-transparent"></div>
    </div>


    <div className="group  bg-[#12544F] p-8 transition duration-500 ease-in-out hover:-translate-y-2    hover:shadow-2xl/20 shadow-white/60 ">

      <span  className="mt-8 text-2xl font-medium text-[#F1EEE9]">
        06
      </span>

      <h3  className="mt-8 text-2xl font-medium text-[#F1F4EF]">
        Bridal Beauty
      </h3>

      <p className="mt-4 leading-7 text-[#B8C7C1] font-sans">
        Complete bridal beauty services to make
        your special day truly unforgettable.
      </p>

      <a
        href="/services-page"
         className="mt-6 inline-block text-sm  font-semibold text-[#8BBB92] transition-all duration-300 group-hover:text-[#E5B86A] font-sans"
      >
        Explore Service →
      </a>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EC994B] to-transparent"></div>
    </div>

  </div>

</section>
     <div className=" top-0 bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#12544F] via-[#EC994B] to-[#12544F]"></div>
 <section className="bg-[#12544F] px-6 py-20 md:px-12 lg:px-20">
  
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          

          <h2 className="text-4xl font-semibold text-[#F1EEE9] md:text-5xl">
            Beauty Services &{" "}
            <span className="text-[#E5B86A]">Pricing</span>
          </h2>

          <p className="mt-5 text-[#B8C7C1]">
            Discover our range of professional beauty and salon services,
            designed to make you look and feel your best.
          </p>

        </div>

        {/* Services */}
        <div className="grid gap-x-10 md:grid-cols-2">

          {services.filter((service)=>service.status==="active").slice(0,8).map((service, index) => (
            <div
              key={service._id}
              className="group flex items-center justify-between gap-6 border-b border-[#B8C7C1]/30 py-7"
            >

              {/* Service Info */}
              <div className="flex items-start gap-5">

                {/* Number */}
                <span className="pt-1 text-sm font-medium text-[#E5B86A]">
                  {index + 1}.
                </span>

                <div>
                  <h3 className="text-lg font-medium text-[#F1EEE9] transition duration-300 group-hover:text-[#E5B86A]">
                    {service.name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#B8C7C1] font-sans">
                    {service.description}
                  </p>
                </div>

              </div>

              {/* Price */}
              <div className="shrink-0">
                <p className="text-lg font-semibold text-[#E5B86A] font-sans">
                  {service.price}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-full border border-[##E5B86A] px-7 py-3 text-sm font-medium text-[#E5B86A] transition duration-300 hover:bg-[#E5B86A] hover:text-[#15133C] font-sans"
          onClick={()=>navigate("/services-page")}>
            View All Services
          </button>
        </div>

      </div>
      
    </section>
    
    </>
  )
}


export default ServicesComponent

