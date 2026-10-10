import React, { useState } from "react";

function AddService() {

  const [service, setService] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });


  const handleSubmit =async (e) => {
    e.preventDefault();
    const response= await fetch("https://new-generation-salon-api.onrender.com/admin/add-service",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
            Authorization:localStorage.getItem("token")
        },
        body:JSON.stringify(service)
    })
    const data=await response.json();
    console.log("data",data);
    setService({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  
   
  };

  return (
    <div className="min-h-screen bg-[#092328] p-6">

  <div className="mx-auto max-w-2xl rounded-2xl bg-[#12544F] p-6 shadow-xl">

    <h2 className="mb-6 text-2xl font-bold text-[#F1EEE9]">
      Add New Service
    </h2>

    <form className="space-y-5" onSubmit={handleSubmit}>

      <div>
        <label className="mb-2 block font-medium text-[#8BBB92]">
          Service Name
        </label>

        <input
          type="text"
          name="name"
          value={service.name}
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
          value={service.category}
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
          value={service.price}
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
          value={service.description}
          onChange={(e)=>{
            setService({...service,description:e.target.value})
          }}
          placeholder="Enter service description"
          className="w-full rounded-lg border border-[#8BBB92]/40 bg-[#092328] p-3 text-white outline-none placeholder:text-gray-400 focus:border-[#2A835F]"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-[#2A835F] py-3 font-semibold text-white transition hover:bg-[#8BBB92] hover:text-[#092328]"
      >
        Add Service
      </button>

    </form>
  </div>
</div>
  );
}

export default AddService;