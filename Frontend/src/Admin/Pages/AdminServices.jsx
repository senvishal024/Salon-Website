import React, { useEffect, useState } from "react";
import {
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

function Services() {
  const {id}=useParams();
  const [details,setDetails]=useState({});
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetchServices();
    fetchCountOfServices();
  },[])
  const fetchServices=async ()=>{
    const response=await fetch("https://new-generation-salon-api.onrender.com/admin/show-services",{
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      }

    })
    const data=await response.json();
    setServices(data);

  }
  const fetchCountOfServices=async ()=>{
    const response=await fetch("https://new-generation-salon-api.onrender.com/admin/dashboard",{
      credentials:"include",
      headers:{
        "Content-Type":"applocation/json",
        Authorization:localStorage.getItem("token")
      }
    })
    const data =await response.json();
    setDetails(data);
    console.log("details of count",data)
  }
  const navigate=useNavigate();
  /* const services = [
    {
      id: 1,
      name: "Haircut & Styling",
      category: "Hair",
      price: "₹499",
      duration: "45 min",
      status: "Active",
    },
    {
      id: 2,
      name: "Hair Spa",
      category: "Hair",
      price: "₹999",
      duration: "60 min",
      status: "Active",
    },
    {
      id: 3,
      name: "Deep Cleansing Facial",
      category: "Skin",
      price: "₹799",
      duration: "50 min",
      status: "Active",
    },
    {
      id: 4,
      name: "Bridal Makeup",
      category: "Makeup",
      price: "₹4,999",
      duration: "120 min",
      status: "Active",
    },
    {
      id: 5,
      name: "Beard Grooming",
      category: "Grooming",
      price: "₹399",
      duration: "30 min",
      status: "Active",
    },
    {
      id: 6,
      name: "Relaxation Spa",
      category: "Spa",
      price: "₹1,499",
      duration: "90 min",
      status: "Inactive",
    },
  ];
 */
  return (
    <section className="min-h-screen bg-[#092328] px-5 py-8 text-[#F1F4EF] sm:px-8 lg:px-10">

      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
            Salon Management
          </p>

          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Services
          </h1>

          <p className="mt-2 text-sm text-[#B8C7C1]">
            Manage your salon services, pricing and availability.
          </p>
        </div>

        {/* Add Service */}
        <button className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#2A835F] px-5 py-3 text-sm font-semibold text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328]"
        onClick={()=>navigate("/admin/add-service")}>
          <HiOutlinePlus size={20} />
          Add New Service
        </button>

      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
          <p className="text-sm text-[#B8C7C1]">
            Total Services
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
          {details.totalServices}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
          <p className="text-sm text-[#B8C7C1]">
            Active Services
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#E5B86A]">
            {details.activeServices}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
          <p className="text-sm text-[#B8C7C1]">
            Categories
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            5
          </h2>
        </div>

      </div>

      {/* Services Table */}
      <div className="overflow-hidden rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F]">

        {/* Table Heading */}
        <div className="border-b border-[#B8C7C1]/10 px-6 py-5">
          <h2 className="text-lg font-semibold">
            All Services
          </h2>

          <p className="mt-1 text-sm text-[#B8C7C1]">
            Manage your current salon services.
          </p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px]">

            <thead>
              <tr className="border-b border-[#B8C7C1]/10 text-left">

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Service
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Category
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Price
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Duration
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {services.map((service) => (
                <tr
                  key={service._id}
                  className="border-b border-[#B8C7C1]/10 last:border-0 transition hover:bg-[#092328]/20"
                >

                  {/* Service */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5B86A] text-lg font-bold text-[#092328]">
                        {service.name.charAt(0)}
                      </div>

                      <span className="font-medium">
                        {service.name}
                      </span>

                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-[#092328] px-3 py-1.5 text-xs font-medium text-[#B8C7C1]">
                      {service.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5 font-semibold text-[#E5B86A]">
                    {service.price}
                  </td>

                  {/* Duration */}
                  <td className="px-6 py-5 text-sm text-[#B8C7C1]">
                    {service.duration}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        service.status === "Active"
                          ? "bg-[#2A835F]/20 text-[#E5B86A]"
                          : "bg-[#092328] text-[#B8C7C1]"
                      }`}
                    >
                      {service.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <button
                        title="Edit"
                        className="rounded-lg p-2 text-[#B8C7C1] transition hover:bg-[#092328] hover:text-[#E5B86A]"
                        onClick={()=>navigate(`/admin/update-service/${service._id}`)}
                      >
                        <HiOutlinePencil size={20} />
                      </button>

                      <button
                        title="Delete"
                        className="rounded-lg p-2 text-[#B8C7C1] transition hover:bg-[#092328] hover:text-[#E5B86A]"
                      >
                        <HiOutlineTrash size={20} />
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

    </section>
  );
}

export default Services;