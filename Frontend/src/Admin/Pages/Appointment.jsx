import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  HiOutlineEye,
  HiOutlineTrash,
  HiOutlineSearch,
} from "react-icons/hi";

function Appointments() {
 /*  const appointments = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      service: "Haircut & Styling",
      date: "04 Sep 2026",
      time: "11:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Priya Singh",
      phone: "+91 98765 12345",
      service: "Facial & Cleanup",
      date: "04 Sep 2026",
      time: "01:30 PM",
      status: "Pending",
    },
    {
      id: 3,
      name: "Anjali Mehta",
      phone: "+91 99887 66554",
      service: "Bridal Makeup",
      date: "04 Sep 2026",
      time: "04:00 PM",
      status: "Confirmed",
    },
    {
      id: 4,
      name: "Arjun Verma",
      phone: "+91 98761 22334",
      service: "Beard Grooming",
      date: "05 Sep 2026",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: 5,
      name: "Neha Jain",
      phone: "+91 97654 33221",
      service: "Hair Spa",
      date: "05 Sep 2026",
      time: "02:00 PM",
      status: "Completed",
    },
  ]; */
  const [details,setDetails]=useState([]);
  const [search,setSearch]=useState("");
  const [status,setStatus]=useState("all")
  const [showMessage, setShowMessage] = useState(null);
  useEffect(()=>{
    fetchDetail();
  },[])

  const filterDetails=details.filter((item)=>{

    const matchSearch=item.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus=status==="all"|| item.status===status
    return matchSearch && matchStatus
  })

  const fetchDetail=async ()=>{
    const response=await fetch("http://localhost:5000/admin/show-appoinment",{
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      },
    })
    const data=await response.json()
    setDetails(data);


  }
  const statusupdate=async (id,status)=>{
    const response=await fetch(`http://localhost:5000/admin/status-update/${id}`,{
      method:"PATCH",
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      },
      body:JSON.stringify({status:status,})
    })
    const data=await response.json();
    fetchDetail();
  }
  const handleDelete=async (id)=>{
    const response=await fetch(`http://localhost:5000/admin/delete-appoinment/${id}`,{
      method:"DELETE",
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      },
      body:JSON.stringify()
    })
    const data=await response.json();
    fetchDetail();
  }
  return (
    <section className="min-h-screen bg-[#092328] px-5 py-8 text-[#F1F4EF] sm:px-8 lg:px-10">

      {/* Heading */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
          Manage Bookings
        </p>

        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Appointments
        </h1>

        <p className="mt-2 text-sm text-[#B8C7C1]">
          View and manage all salon appointments.
        </p>
      </div>

      {/* Top Controls */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Search */}
        <div className="relative w-full sm:max-w-sm">
          <HiOutlineSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8C7C1]"
          />

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full rounded-xl border border-[#B8C7C1]/10 bg-[#092328] py-3 pl-11 pr-4 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A]"
          />
        </div>

        {/* Filter */}
        <select
          className="rounded-xl border border-[#B8C7C1]/10 bg-[#092328] px-4 py-3 text-sm text-[#F1F4EF] outline-none focus:border-[#E5B86A]"
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value={"pending"}>Pending</option>
          <option value={"confirmed"}>Confirmed</option>
          <option value={"completed"}>Completed</option>
          <option value={"cancelled"}>Cancelled</option>
        </select>
      </div>

      {/* Appointment Table */}
      <div className="overflow-hidden rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F]">

        {/* Table Header */}
        <div className="border-b border-[#B8C7C1]/10 px-6 py-5">
          <h2 className="text-lg font-semibold">
            All Appointments
          </h2>

          <p className="mt-1 text-sm text-[#B8C7C1]">
            {filterDetails.length} appointments found
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead>
              <tr className="border-b border-[#B8C7C1]/10 text-left">

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Customer
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Phone
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

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Action
                </th>

              </tr>
            </thead>
<tbody>

  {filterDetails.map((appointment) => (
    <React.Fragment key={appointment._id}>

      <tr
        className="border-b border-[#B8C7C1]/10 transition hover:bg-[#092328]/20"
      >

        {/* Customer */}
        <td className="px-6 py-5">
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B86A] font-semibold text-[#092328]">
              {appointment.name.charAt(0)}
            </div>

            <span className="font-medium">
              {appointment.name}
            </span>

          </div>
        </td>

        {/* Phone */}
        <td className="px-6 py-5 text-sm text-[#B8C7C1]">
          {appointment.phone}
        </td>

        {/* Service */}
        <td className="px-6 py-5 text-sm text-[#B8C7C1]">
          {appointment.service}
        </td>

        {/* Date */}
        <td className="px-6 py-5 text-sm text-[#B8C7C1]">
          {new Date(appointment.date).toLocaleDateString("en-IN")}
        </td>

        {/* Time */}
        <td className="px-6 py-5 text-sm text-[#B8C7C1]">
          {appointment.time}
        </td>

        {/* Status */}
        <td className="px-6 py-5">

          <select
            className="rounded-full border border-[#E5B86A]/30 bg-[#092328] px-3 py-1.5 text-xs font-semibold text-[#E5B86A] outline-none"
            value={appointment.status}
            onChange={(e) => {
              statusupdate(appointment._id, e.target.value);
            }}
          >
            <option value="pending">Pending</option>
            <option value="canceled">Canceled</option>
            <option value="completed">Completed</option>
            <option value="confirmed">Confirmed</option>
          </select>

        </td>

        {/* Actions */}
        <td className="px-6 py-5">

          <div className="flex items-center gap-2">

            {/* View */}
            <button
              onClick={() =>
                setShowMessage(
                  showMessage === appointment._id
                    ? null
                    : appointment._id
                )
              }
              className="rounded-lg p-2 text-[#B8C7C1] transition hover:bg-[#092328] hover:text-[#E5B86A]"
              title="View"
            >
              <HiOutlineEye size={20} />
            </button>

            {/* Delete */}
            <button
              className="rounded-lg p-2 text-[#B8C7C1] transition hover:bg-[#092328] hover:text-[#E5B86A]"
              title="Delete"
              onClick={() => handleDelete(appointment._id)}
            >
              <HiOutlineTrash size={20} />
            </button>

          </div>

        </td>

      </tr>


      {/* Message */}
      {showMessage === appointment._id && (
        <tr className="border-b border-[#B8C7C1]/10">

          <td colSpan="7" className="px-6 py-4">

            <div className="rounded-xl border border-[#E5B86A]/10 bg-[#092328] p-4">

              <p className="mb-2 text-sm font-semibold text-[#E5B86A]">
                Customer Message
              </p>

              <p className="text-sm text-[#B8C7C1]">
                {appointment.message || "No message provided."}
              </p>

            </div>

          </td>

        </tr>
      )}

    </React.Fragment>
  ))}

</tbody>
          </table>

        </div>
      </div>

    </section>
  );
}

export default Appointments;