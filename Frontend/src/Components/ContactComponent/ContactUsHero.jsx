import React from "react";

function ContactHero() {
  return (
    <section
      className="relative min-h-[70vh] w-full bg-cover bg-center bg-fixed sm:min-h-[75vh] lg:min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-[#092328]/70"></div>

      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 text-center sm:min-h-[75vh] lg:min-h-screen">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A] sm:text-base">
          Get In Touch
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-[#F1F4EF] sm:text-6xl md:text-7xl lg:text-8xl">
          Let's Create
          <span className="block text-[#E5B86A]">
            Your Perfect Look
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[#B8C7C1] sm:text-lg md:text-xl">
          Have a question, want to book an appointment or simply want to
          know more about our services? We'd love to hear from you.
        </p>

        <a
          href="#contact"
          className="mt-9 rounded-full bg-[#2A835F] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328] font-sans"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ContactHero;