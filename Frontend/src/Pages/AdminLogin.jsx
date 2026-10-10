import  { useState } from "react";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate=useNavigate()
  const [admin ,setAdmin]=useState({email:"",password:""});
  console.log("before fetch")
  console.log(admin)
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response =await fetch("https://new-generation-salon-api.onrender.com/admin/login",{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(admin)
    });
    console.log("after fetch")
    const data=await response.json();
    if (!data.token) {
  alert(typeof data === "string" ? data : data.message || "Login failed");
  return;
}
    localStorage.setItem("token",data.token)
    setAdmin({email:"",password:""});
    navigate("/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#092328] px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2A835F] shadow-lg">
            <span className="text-2xl font-bold text-white">
              NGS
            </span>
          </div>

          <h1 className="text-2xl font-bold text-[#F1F4EF]">
            Admin Panel
          </h1>

          <p className="mt-2 text-sm text-[#B8C7C1]">
            Sign in to manage your salon
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl border border-[#12544F] bg-[#12544F]/40 p-6 shadow-2xl sm:p-8">

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#F1F4EF]">
                Email Address
              </label>

              <div className="relative">
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#73777B]" />

                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={admin.email}
                  onChange={(e)=>{
                   setAdmin({
                    ...admin,
                    email:e.target.value
                   })
                  }}
                  className="w-full rounded-xl border border-[#12544F] bg-[#092328] py-3 pl-12 pr-4 text-[#F1F4EF] outline-none placeholder:text-[#73777B] focus:border-[#2A835F]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-[#F1F4EF]">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-[#E5B86A] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#73777B]" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={admin.password}
                  onChange={(e)=>{
                    setAdmin({
                      ...admin,
                      password:e.target.value
                    })
                  }}
                  className="w-full rounded-xl border border-[#12544F] bg-[#092328] py-3 pl-12 pr-4 text-[#F1F4EF] outline-none placeholder:text-[#73777B] focus:border-[#2A835F]"
                />
              </div>
            </div>

            {/* Remember */}
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#2A835F]"
              />

              <span className="text-sm text-[#B8C7C1]">
                Remember me
              </span>
            </label>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#2A835F] py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#347B5E] hover:shadow-[0_8px_25px_rgba(42,131,95,0.25)]"
            >
              Sign In
            </button>

          </form>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-[#73777B]">
          © 2026 New Generation Familysalon
        </p>

      </div>
    </div>
  );
}

export default AdminLogin;