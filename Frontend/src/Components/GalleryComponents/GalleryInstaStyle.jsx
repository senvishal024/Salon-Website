import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function InstagramStyle() {
  const [images,setImages]=useState([]);
  useEffect(()=>{
    fetchImages();
  },[]);
  const fetchImages=async ()=>{
    const response=await fetch("http://localhost:5000/newgeneration/show-image",{
      credentials:"include",
    })
    const data =await response.json();
    setImages(data.gallery);
    console.log("image data",data.gallery);
    
  }
  return (
    <section className="w-full bg-[#12544F] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Follow Our Journey
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            See More Of Us
            <span className="block text-[#E5B86A]">
              On Instagram
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            Follow us for the latest hairstyles, beauty transformations,
            salon moments and special offers.
          </p>

          <p className="mt-5 text-lg font-semibold text-[#F1F4EF]">
            @newgenerationsalon
          </p>
        </div>

        {/* Instagram Grid */}
        
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5">

          {/* Image 1 */}
          {images.map((item)=>(
          <div className="group relative aspect-square overflow-hidden rounded-2xl" key={item._id}>
            <img
              src={item.imageUrl}
              alt="Salon hairstyle"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-[#092328]/0 opacity-0 transition duration-300 group-hover:bg-[#092328]/50 group-hover:opacity-100">
              <span className="text-2xl text-[#E5B86A]">♡</span>
            </div>
          </div>
            ))}
          

        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/newgeneration_family_saloon?stkn=MXRybWk2Z2VwNzNqcg=="
            className="inline-flex items-center rounded-full border border-[#E5B86A] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#E5B86A] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] font-sans"
          >
            Follow Us On Instagram
          </a>
        </div>

      </div>
    </section>
  );
}

export default InstagramStyle;