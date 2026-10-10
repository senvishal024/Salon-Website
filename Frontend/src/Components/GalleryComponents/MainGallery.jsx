import React from "react";

function MainGallery() {
  const galleryData = [
    {
      id: 1,
      title: "Hair Styling",
      category: "Hair",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Beauty Makeup",
      category: "Makeup",
      image:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Nail Beauty",
      category: "Nails",
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Relaxing Spa",
      category: "Spa",
      image:
        "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Men Grooming",
      category: "Grooming",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Our Salon",
      category: "Salon",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="gallery"
      className="w-full bg-[#092328] px-6 py-20 md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E5B86A]">
            Our Gallery
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#F1F4EF] sm:text-5xl md:text-6xl">
            A Glimpse Into
            <span className="block text-[#E5B86A]">
              Our Beauty World
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#B8C7C1] sm:text-lg">
            Explore our latest hairstyles, makeovers, grooming experiences
            and beautiful transformations.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">

          {/* Image 1 - Large */}
          <div className="group relative overflow-hidden  md:col-span-1 lg:col-span-5">
            <img
              src={galleryData[0].image}
              alt={galleryData[0].title}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110 lg:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#092328] via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                {galleryData[0].category}
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#F1F4EF]">
                {galleryData[0].title}
              </h3>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-5 md:col-span-1 lg:col-span-7 lg:grid-cols-2">

            {/* Image 2 */}
            <div className="group relative overflow-hidden">
              <img
                src={galleryData[1].image}
                alt={galleryData[1].title}
                className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092328] via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                  {galleryData[1].category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#F1F4EF]">
                  {galleryData[1].title}
                </h3>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative overflow-hidden ">
              <img
                src={galleryData[2].image}
                alt={galleryData[2].title}
                className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092328] via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                  {galleryData[2].category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#F1F4EF]">
                  {galleryData[2].title}
                </h3>
              </div>
            </div>

            {/* Image 4 */}
            <div className="group relative overflow-hidden">
              <img
                src={galleryData[3].image}
                alt={galleryData[3].title}
                className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092328] via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                  {galleryData[3].category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#F1F4EF]">
                  {galleryData[3].title}
                </h3>
              </div>
            </div>

            {/* Image 5 */}
            <div className="group relative overflow-hidden ">
              <img
                src={galleryData[4].image}
                alt={galleryData[4].title}
                className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092328] via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                  {galleryData[4].category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#F1F4EF]">
                  {galleryData[4].title}
                </h3>
              </div>
            </div>

          </div>

          {/* Image 6 - Full Width */}
          <div className="group relative overflow-hidden  lg:col-span-12">
            <img
              src={galleryData[5].image}
              alt={galleryData[5].title}
              className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[400px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#092328] via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5B86A]">
                {galleryData[5].category}
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#F1F4EF]">
                {galleryData[5].title}
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MainGallery;