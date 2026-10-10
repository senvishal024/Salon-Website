import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateService() {
    const navigate=useNavigate();
    const [service,setService]=useState({name: "",
  category: "",
  price: "",
  description: ""});
    const {id}=useParams();
    useEffect(()=>{
        fetchServices();
    },[])
    const fetchServices=async ()=>{
        const response=await fetch(`https://new-generation-salon-api.onrender.com/admin/show-service/${id}`,{
            credentials:"include",
            headers:{
                "Content-Type":"application/json",
                Authorization:localStorage.getItem("token")
            }
        })
        const data=await response.json();
        setService(data);
    }
    const handleSubmit=async (e,id)=>{
        e.preventDefault();
         console.log("ID:", id);
    console.log("Service:", service);
        const response=await fetch(`https://new-generation-salon-api.onrender.com/admin/update-service/${id}`,{
            method:"PUT",
            credentials:"include",
            headers:{
                "Content-Type":"application/json",
                Authorization:localStorage.getItem("token")
            },
            body:JSON.stringify(service)
        })
        const data=await response.json();

    console.log("Update response:", data);
        navigate("/admin/admin-services");

    }
  return (
    <>
      <div className="min-h-screen bg-[#092328] p-6">

  <div className="mx-auto max-w-2xl rounded-2xl bg-[#12544F] p-6 shadow-xl">

    <h2 className="mb-6 text-2xl font-bold text-[#F1EEE9]">
      Update Service
    </h2>

    <form className="space-y-5" onSubmit={(e)=>handleSubmit(e,service._id)}>

      <div>
        <label className="mb-2 block font-medium text-[#8BBB92]">
          Service Name
        </label>

        <input
          type="text"
          name="name"
          value={service.name||""}
          onChange={(e)=>{
            setService({...service,name:e.target.value})
          }}
          placeholder="Enter service name"
          className="w-full rounded-lg border border-[#8BBB92]/40 bg-[#092328] p-3 text-white outline-none placeholder:text-gray-400 focus:border-[#2A835F]"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-[#8BBB92]">
          Category
        </label>

        <select
          name="category"
          value={service.category||""}
          onChange={(e)=>{
            setService({...service,category:e.target.value})
          }}
          className="w-full rounded-lg border border-[#8BBB92]/40 bg-[#092328] p-3 text-white outline-none focus:border-[#2A835F]"
        >
          <option value="">Select Category</option>
          <option value="hair">Hair</option>
          <option value="skin">Skin & Facial</option>
          <option value="makeup">Makeup</option>
          <option value="grooming">Grooming</option>
          <option value="spa">Spa & Relaxation</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium text-[#8BBB92]">
          Price
        </label>

        <input
          type="number"
          name="price"
          value={service.price||""}
          onChange={(e)=>{
            setService({...service,price:e.target.value})
          }}
          placeholder="Enter price"
          className="w-full rounded-lg border border-[#8BBB92]/40 bg-[#092328] p-3 text-white outline-none placeholder:text-gray-400 focus:border-[#2A835F]"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-[#8BBB92]">
          Description
        </label>

        <textarea
          name="description"
          rows="4"
          value={service.description||""}
          onChange={(e)=>{
            setService({...service,description:e.target.value})
          }}
          placeholder="Enter service description"
          className="w-full rounded-lg border border-[#8BBB92]/40 bg-[#092328] p-3 text-white outline-none placeholder:text-gray-400 focus:border-[#2A835F]"
        />
      </div>
      <div className='flex gap-4 items-center'>
        
        <input type="checkbox" for=""
          name="status"
          checked={service.status==="active"}
          onChange={(e)=>{
            const newStatus=e.target.checked? "active":"inactive";
            setService({...service,status:newStatus})
          }}
          className="h-4 w-4"
          /><label className="  font-medium text-[#8BBB92]">
          Service Status
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-[#2A835F] py-3 font-semibold text-white transition hover:bg-[#8BBB92] hover:text-[#092328]"
      >
        Update Service
      </button>
        
    </form>
  </div>
</div>
    </>
  )
}

export default UpdateService
