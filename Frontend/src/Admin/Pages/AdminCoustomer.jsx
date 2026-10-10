import React from "react";
import { useEffect } from "react";
import { use } from "react";
import { useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineEye,
  HiOutlineTrash,
} from "react-icons/hi";

function Customers() {
  const [details,setDetails]=useState([]);
  const [customers,setCustomers]=useState(0);
  const [newCustomers,setNewCustomers]=useState(0)
  const [search,setSearch]=useState("");
  useEffect(()=>{
    fetchDetail();
  },[])
  const filterSearch=details.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
  const fetchDetail=async ()=>{
    const response=await fetch("http://localhost:5000/admin/show-customer",{
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      }
    })
    const data=await response.json();

console.log("API DATA:", data);
    setDetails(data.customers);
    console.log("total customers",data.totalCustomers)
    setCustomers(data.totalCustomers[0]?.totalCustomer || 0);
    setNewCustomers(data.newCustomers);
  }
  /* const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      email: "rahul@gmail.com",
      appointments: 8,
      lastVisit: "04 Sep 2026",
    },
    {
      id: 2,
      name: "Priya Singh",
      phone: "+91 98765 12345",
      email: "priya@gmail.com",
      appointments: 12,
      lastVisit: "03 Sep 2026",
    },
    {
      id: 3,
      name: "Anjali Mehta",
      phone: "+91 99887 66554",
      email: "anjali@gmail.com",
      appointments: 5,
      lastVisit: "01 Sep 2026",
    },
    {
      id: 4,
      name: "Arjun Verma",
      phone: "+91 98761 22334",
      email: "arjun@gmail.com",
      appointments: 3,
      lastVisit: "30 Aug 2026",
    },
    {
      id: 5,
      name: "Neha Jain",
      phone: "+91 97654 33221",
      email: "neha@gmail.com",
      appointments: 9,
      lastVisit: "29 Aug 2026",
    },
  ];
 */
  return (
    <section className="min-h-screen bg-[#092328] px-5 py-8 text-[#F1F4EF] sm:px-8 lg:px-10">

      {/* Heading */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5B86A]">
          Customer Management
        </p>

        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Customers
        </h1>

        <p className="mt-2 text-sm text-[#B8C7C1]">
          View and manage your salon customers.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
          <p className="text-sm text-[#B8C7C1]">
            Total Customers
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
           {customers}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F] p-5">
          <p className="text-sm text-[#B8C7C1]">
            New This Month
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#E5B86A]">
            {newCustomers}
          </h2>
        </div>

        
      </div>

      {/* Customer List */}
      <div className="overflow-hidden rounded-2xl border border-[#B8C7C1]/10 bg-[#12544F]">

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#B8C7C1]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

          <div>
            <h2 className="text-lg font-semibold">
              Customer List
            </h2>

            <p className="mt-1 text-sm text-[#B8C7C1]">
              All registered salon customers
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:max-w-xs">
            <HiOutlineSearch
              size={19}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B8C7C1]"
            />

            <input
              type="text"
              placeholder="Search customer..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full rounded-xl border border-[#B8C7C1]/10 bg-[#092328] py-3 pl-10 pr-4 text-sm text-[#F1F4EF] outline-none placeholder:text-[#B8C7C1]/60 focus:border-[#E5B86A]"
            />
          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead>
              <tr className="border-b border-[#B8C7C1]/10 text-left">

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Customer
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Phone
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Email
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Appointments
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#B8C7C1]">
                  Last Visit
                </th>

               

              </tr>
            </thead>

            <tbody>

              {filterSearch.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-[#B8C7C1]/10 last:border-0 transition hover:bg-[#092328]/20"
                >

                  {/* Customer */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B86A] font-semibold text-[#092328]">
                        {customer.name.charAt(0)}
                      </div>

                      <span className="font-medium">
                        {customer.name}
                      </span>

                    </div>
                  </td>

                  {/* Phone */}
                  <td className="px-6 py-5 text-sm text-[#B8C7C1]">
                    {customer.phone}
                  </td>

                  {/* Email */}
                  <td className="px-6 py-5 text-sm text-[#B8C7C1]">
                    {customer.email}
                  </td>

                  {/* Appointments */}
                  <td className="px-6 py-5">
                    <span className="font-semibold text-[#E5B86A]">
                      {customer.totalAppointment}
                    </span>
                  </td>

                  {/* Last Visit */}
                  <td className="px-6 py-5 text-sm text-[#B8C7C1]">
                     {new Date(customer.lastVisit).toLocaleDateString("en-IN")}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    

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

export default Customers;