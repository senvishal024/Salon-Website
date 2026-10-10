import React from "react";

function AboutHero() {
  return (
    <>
      <div
        className="relative min-h-[70vh] w-full bg-cover bg-center bg-fixed sm:min-h-[75vh] lg:min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/60 px-6 text-center text-[#F1F4EF]">

          {/* Small Heading */}
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#E5B86A] sm:text-base">
            Get To Know Us
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            About Us
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg leading-relaxed text-[#B8C7C1] sm:text-xl md:text-2xl">
            Discover the story behind our passion for beauty,
            style and confidence.
          </p>

        </div>
      </div>
    </>
  );
}

export default AboutHero;