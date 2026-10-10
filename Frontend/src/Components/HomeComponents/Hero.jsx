import React from 'react'

function Hero() {
  return (
    <>
      <div
        className="relative min-h-screen w-full bg-center bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664048712891-f9b6b0c62369?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/60 px-6 text-center text-[#F1F4EF]">

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            New Generation Salon
          </h1>

          <p className="text-lg leading-relaxed text-[#B8C7C1] sm:text-xl md:text-2xl">
            Where Your Beauty Becomes Your Signature
          </p>

        </div>
      </div>
    </>
  )
}

export default Hero