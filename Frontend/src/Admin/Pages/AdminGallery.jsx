import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";

function Gallery() {
  const [details,setDetails]=useState({});
  const [gallerys,setGallerys]=useState([]);
  useEffect(()=>{
    fetchImages();
  },[]);
  const AddImageHandle=async (selectedImage)=>{
    console.log("ADD IMAGE HANDLE CALLED");
    const formData= new FormData();
    formData.append('image',selectedImage);
    const response=await fetch("https://new-generation-salon-api.onrender.com/admin/image-upload",{
      credentials:"include",
      method:"POST",
      headers:{
        Authorization:localStorage.getItem("token")
      },
      
      body:formData
    });
    console.log("STATUS:", response.status);
    const data=await response.json()
   console.log("RESPONSE:", data);
   fetchImages();
  }
  const fetchImages=async ()=>{
    const response=await fetch("https://new-generation-salon-api.onrender.com/admin/show-images",{
      credentials:"include",
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })
    const data =await response.json();
    setGallerys(data.gallery);
    setDetails(data)
    console.log("total",data.totalImage)
    console.log(data)

  }
  const DeleteImageHandle=async (e,id)=>{
    const response =await fetch(`https://new-generation-salon-api.onrender.com/admin/delete-image/${id}`,{
      method:"DELETE",
      credentials:"include",
      headers:{
        Authorization:localStorage.getItem("token")
      }
    });
    const data =await response.json();
    console.log(data);
    fetchImages();
  }
  return (
    <section className="min-h-screen bg-[#092328] px-5 py-8 text-[#F1F4EF] sm:px-8 lg:px-10">

      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
            Content Management
          </p>

          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Gallery
          </h1>

          <p className="mt-2 text-sm text-[#B8C7C1]">
            Manage your salon gallery images.
          </p>
        </div>

        {/* Add Image */}
          <button
            onClick={() => document.getElementById("gallery-image-input").click()}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#2A835F] px-5 py-3 text-sm font-semibold text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328]"
          >
            <HiOutlinePlus size={20} />
            Add New Image
          </button>

          <input
            id="gallery-image-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e)=>{
              const selectedImage= e.target.files[0];
              if(!selectedImage) return;

              AddImageHandle(selectedImage);
            }}
          />

      </div>

      {/* Summary */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
          <p className="text-sm text-[#B8C7C1]">
            Total Images
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            {details.totalImage}
          </h2>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5 sm:p-6">

        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            Gallery Images
          </h2>

          <p className="mt-1 text-sm text-[#B8C7C1]">
            View and manage uploaded images.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {gallerys.map((item) => (
            <div
              key={item._id}
              className="group overflow-hidden rounded-2xl border border-[#B8C7C1]/10 bg-[#092328]"
            >

              {/* Image */}
              <div className="relative h-52 overflow-hidden">

                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Status */}
                <span
                  className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm ${
                    item.status === "Active"
                      ? "bg-[#2A835F]/90 text-[#F1F4EF]"
                      : "bg-[#092328]/90 text-[#B8C7C1]"
                  }`}
                >
                  {item.status}
                </span>

              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-[#B8C7C1]">
                  {item.category}
                </p>

                {/* Actions */}
                <div className="mt-4 flex gap-2 border-t border-[#B8C7C1]/10 pt-4">
                  <button
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#12544F] py-2.5 text-xs font-semibold text-[#B8C7C1] transition hover:bg-[#E5B86A] hover:text-[#092328]"
                    onClick={(e)=>DeleteImageHandle(e,item._id)}
                  >
                    <HiOutlineTrash size={17} />
                    Delete
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Gallery;