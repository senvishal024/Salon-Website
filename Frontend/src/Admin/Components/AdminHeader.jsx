import React from "react";
import { HiMenuAlt3, HiBell } from "react-icons/hi";

function AdminHeader({ setOpen }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#B8C7C1]/10 bg-[#092328]/95 px-5 backdrop-blur-md sm:px-8 lg:px-10">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-[#F1F4EF] transition hover:bg-[#12544F] hover:text-[#E5B86A] lg:hidden"
        >
          <HiMenuAlt3 size={27} />
        </button>

        <div>
          <h2 className="text-lg font-semibold text-[#F1F4EF] sm:text-xl">
            Dashboard
          </h2>

          <p className="hidden text-xs text-[#B8C7C1] sm:block">
            Manage your salon
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="relative rounded-full p-2.5 text-[#B8C7C1] transition hover:bg-[#12544F] hover:text-[#E5B86A]">
          <HiBell size={22} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#E5B86A]"></span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-3 border-l border-[#B8C7C1]/10 pl-4">

          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-[#F1F4EF]">
              Admin
            </p>

            <p className="text-xs text-[#B8C7C1]">
              Administrator
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B86A] font-bold text-[#092328]">
            A
          </div>

        </div>
      </div>
    </header>
  );
}

export default AdminHeader;