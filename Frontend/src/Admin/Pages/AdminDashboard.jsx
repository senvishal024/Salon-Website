import React, { useEffect, useState } from "react";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineScissors,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate =useNavigate();
const [appointment,setAppointment]=useState([]);
const [details,setDetails]=useState();
  useEffect(()=>{
  fetchDetail();
  fetchAppointment();
},[])
   const stats = [
    {
      title: "Total Appointments",
      value: details?.totalAppointment,
      icon: <HiOutlineCalendar size={25} />,
    },
    {
      title: "Pending Appointments",  
      value: details?.totalPending,
      icon: <HiOutlineClock size={25} />,
    },
    {
      title: "Completed",
      value: details?.totalComplete,
      icon: <HiOutlineCheckCircle size={25} />,
    },
    {
      title: "Total Services",
      value: details?.totalServices,
      icon: <HiOutlineScissors size={25} />,
      change: "Active services",
    },
  ];
 

const fetchDetail=async ()=>{
  const response= await fetch("https://new-generation-salon-api.onrender.com/admin/dashboard",{
    credentials:"include",
    headers:{
      "Content-Type":"application/json",
      Authorization:localStorage.getItem("token")
    }
  })
  const data =await response.json();
  setDetails(data);
  console.log("dashboard data",data)
}
const fetchAppointment=async ()=>{
  const response =await fetch("https://new-generation-salon-api.onrender.com/admin/show-appoinment",{
    credentials:"include",
    headers:{
      "Content-Type":"application/json",
      Authorization:localStorage.getItem("token")
    }
  })
  const data=await response.json();
  setAppointment(data);
}
 /*  const appointments = [
    {
      name: "Rahul Sharma",
      service: "Haircut & Styling",
      date: "04 Sep 2026",
      time: "11:00 AM",
      status: "Confirmed",
    },
    {
      name: "Priya Singh",
      service: "Facial & Cleanup",
      date: "04 Sep 2026",
      time: "01:30 PM",
      status: "Pending",
    },
    {
      name: "Anjali Mehta",
      service: "Bridal Makeup",
      date: "04 Sep 2026",
      time: "04:00 PM",
      status: "Confirmed",
    },
    {
      name: "Arjun Verma",
      service: "Beard Grooming",
      date: "05 Sep 2026",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      name: "Neha Jain",
      service: "Hair Spa",
      date: "05 Sep 2026",
      time: "02:00 PM",
      status: "Confirmed",
    },
  ]; */

  return (
    <div className="min-h-screen bg-[#092328] text-[#F1F4EF]">

      {/* Top Header */}
     
      {/* Main Content */}
      <main className="px-5 py-8 sm:px-8 lg:px-10">

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item,index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#E5B86A]/30"
            >
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-[#B8C7C1]">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold text-[#F1F4EF]">
                    {item.value}
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5B86A] text-[#092328]">
                  {item.icon}
                </div>
              </div>

              <p className="mt-4 text-xs text-[#E5B86A]">
                {item.change}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">
            Quick Actions
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <button className="group flex items-center justify-between rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5 text-left transition duration-300 hover:border-[#E5B86A]/40 hover:bg-[#12544F]/80" onClick={()=>navigate("/admin/add-service")}>
              <div>
                <p className="font-semibold">
                  Add New Service
                </p>
                <p className="mt-1 text-sm text-[#B8C7C1]">
                  Create a new salon service
                </p>
              </div>

              <HiOutlineArrowRight
                size={22}
                className="text-[#E5B86A] transition group-hover:translate-x-1"
              />
            </button>

            <button className="group flex items-center justify-between rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5 text-left transition duration-300 hover:border-[#E5B86A]/40 hover:bg-[#12544F]/80" onClick={()=>navigate("/admin/admin-services")}>
              <div>
                <p className="font-semibold">
                  View Appointments
                </p>
                <p className="mt-1 text-sm text-[#B8C7C1]">
                  Manage customer bookings
                </p>
              </div>

              <HiOutlineArrowRight
                size={22}
                className="text-[#E5B86A] transition group-hover:translate-x-1"
              />
            </button>

            <button className="group flex items-center justify-between rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5 text-left transition duration-300 hover:border-[#E5B86A]/40 hover:bg-[#12544F]/80" onClick={()=>navigate("/admin/admin-gallery")}>
              <div>
                <p className="font-semibold">
                  Manage Gallery
                </p>
                <p className="mt-1 text-sm text-[#B8C7C1]">
                  Add or remove gallery images
                </p>
              </div>

              <HiOutlineArrowRight
                size={22}
                className="text-[#E5B86A] transition group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>

        {/* Recent Appointments */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F]">

          <div className="flex flex-col justify-between gap-3 border-b border-[#B8C7C1]/10 px-5 py-5 sm:flex-row sm:items-center sm:px-6">

            <div>
              <h2 className="text-xl font-semibold">
                Recent Appointments
              </h2>

              <p className="mt-1 text-sm text-[#B8C7C1]">
                Latest customer bookings
              </p>
            </div>

            <button className="w-fit text-sm font-semibold text-[#E5B86A] transition hover:text-[#F1F4EF]">
              View All
            </button>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[750px]">

              <thead>
                <tr className="border-b border-[#B8C7C1]/10 text-left">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                    Service
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                    Date
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                    Time
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {appointment.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b border-[#B8C7C1]/10 last:border-0 transition hover:bg-[#092328]/20"
                  >

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B86A] font-semibold text-[#092328]">
                          {item.name.charAt(0)}
                        </div>

                        <span className="font-medium">
                          {item.name}
                        </span>

                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-[#B8C7C1]">
                      {item.service}
                    </td>

                    <td className="px-6 py-5 text-sm text-[#B8C7C1]">
                      {new Date(item.date).toLocaleDateString("en-IN")}
                    </td>

                    <td className="px-6 py-5 text-sm text-[#B8C7C1]">
                      {item.time}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          item.status === "Confirmed"
                            ? "bg-[#2A835F]/20 text-[#E5B86A]"
                            : "bg-[#E5B86A]/15 text-[#E5B86A]"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

      </main>
    </div>
  );
}

export default AdminDashboard;