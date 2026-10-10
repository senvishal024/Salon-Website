import React, { useEffect, useState } from "react";
import {
  HiOutlineUser,
  HiOutlineOfficeBuilding,
  HiOutlineBell,
  HiOutlineLockClosed,
} from "react-icons/hi";

function Settings() {
  const [details,setDetails]=useState({phone:"",name:""});
  const [password,setPassword]=useState({newpassword:"",oldpassword:""});
  useEffect(()=>{
    fetchDetail();
  },[]);
  const fetchDetail=async ()=>{
    const response=await fetch("https://new-generation-salon-api.onrender.com/admin/show-details",{
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      }
    })
    const data=await response.json();
    setDetails(data);
    console.log(data)
  }
  
  const handleSubmit=async ()=>{
    const confirmUpdate=window.confirm( "Are you sure you want to update your profile?");
    if(!confirmUpdate){
      return;
    }
    const response=await fetch("https://new-generation-salon-api.onrender.com/admin/update-details",{
      method:"PUT",
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      },
      body:JSON.stringify(details)
    })
    const data=await response.json();
    if(response.ok){
      alert("Profile updated successfully!")
    }
    else{
      alert(data.message || "Profile update failed!")
    }
    fetchDetail();
  }
  const passwordSubmit=async ()=>{
     console.log("PASSWORD SUBMIT FUNCTION HIT");
    const response=await fetch("https://new-generation-salon-api.onrender.com/admin/update-password",{
      method:"PUT",
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      },
      body:JSON.stringify(password)
    })
    const data =await response.json()
    await alert("password update")
    setPassword({oldpassword:"",newpassword:""})
  }
  return (
    <div className="min-h-screen bg-[#092328] px-4 py-6 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#F1F4EF]">
          Settings
        </h1>

        <p className="mt-1 text-sm text-[#B8C7C1]">
          Manage your salon and admin settings
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Profile Settings */}
        <div className="lg:col-span-2 rounded-2xl border border-[#12544F] bg-[#12544F]/40 p-6">

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2A835F]">
              <HiOutlineUser className="text-xl text-white" />
            </div>

            <div>
              <h2 className="font-semibold text-[#F1F4EF]">
                Admin Profile
              </h2>

              <p className="text-sm text-[#B8C7C1]">
                Update your personal information
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm text-[#B8C7C1]">
                Full Name
              </label>

              <input
                type="text"
                value={details.name||""}
                onChange={(e)=>{
                  setDetails({
                    ...details,
                    name:e.target.value
                  })
                }}
                className="w-full rounded-xl border border-[#12544F] bg-[#092328] px-4 py-3 text-[#F1F4EF] outline-none transition focus:border-[#2A835F]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#B8C7C1]">
                Email
              </label>

              <input
                type="email"
                value={details.email}
                disabled
                className="w-full rounded-xl border border-[#12544F] bg-[#092328] px-4 py-3 text-[#F1F4EF] outline-none transition focus:border-[#2A835F]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#B8C7C1]">
                Phone
              </label>

              <input
                type="text"
                value={details.phone||""}
                onChange={(e)=>{
                  setDetails({
                    ...details,
                    phone:e.target.value
                  })
                }}
                className="w-full rounded-xl border border-[#12544F] bg-[#092328] px-4 py-3 text-[#F1F4EF] outline-none transition focus:border-[#2A835F]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#B8C7C1]">
                Role
              </label>

              <input
                type="text"
                defaultValue="Administrator"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-[#12544F] bg-[#092328]/70 px-4 py-3 text-[#73777B] outline-none"
              />
            </div>

          </div>

          <button className="mt-6 rounded-xl bg-[#2A835F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#347b5e]"
          onClick={()=>handleSubmit()}>
            Save Changes
          </button>
        </div>


        

        {/* Security */}
        <div className="rounded-2xl border border-[#12544F] bg-[#12544F]/40 p-6 lg:col-span-2">

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2A835F]">
              <HiOutlineLockClosed className="text-xl text-white" />
            </div>

            <div>
              <h2 className="font-semibold text-[#F1F4EF]"> 
                Security
              </h2>

              <p className="text-sm text-[#B8C7C1]">
                Manage your admin account security
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm text-[#B8C7C1]">
                Current Password
              </label>

              <input
                type="password"
                placeholder="Enter current password"
                value={password.oldpassword}
                onChange={(e)=>{
                  setPassword({
                    ...password,oldpassword:e.target.value
                  })
                }}
                className="w-full rounded-xl border border-[#12544F] bg-[#092328] px-4 py-3 text-[#F1F4EF] outline-none placeholder:text-[#73777B] focus:border-[#2A835F]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#B8C7C1]">
                New Password
              </label>

              <input
                type="password"
                value={password.newpassword}
                onChange={(e)=>{
                  setPassword({
                    ...password,newpassword:e.target.value
                  })
                }}
                placeholder="Enter new password"
                className="w-full rounded-xl border border-[#12544F] bg-[#092328] px-4 py-3 text-[#F1F4EF] outline-none placeholder:text-[#73777B] focus:border-[#2A835F]"
              />
            </div>

          </div>

          <button className="mt-6 rounded-xl border border-[#2A835F] px-6 py-3 text-sm font-semibold text-[#E5B86A] transition hover:bg-[#2A835F] hover:text-white"
          onClick={()=>passwordSubmit()}>
            Update Password
          </button>

        </div>

      </div>
    </div>
  );
}

export default Settings;