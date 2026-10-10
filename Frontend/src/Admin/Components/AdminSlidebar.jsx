import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineScissors,
  HiOutlinePhotograph,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineLogout,
  HiX,
} from "react-icons/hi";

function AdminSidebar({ open, setOpen }) {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <HiOutlineHome size={21} />,
    },
    {
      name: "Appointments",
      path: "appointment",
      icon: <HiOutlineCalendar size={21} />,
    },
    {
      name: "Services",
      path: "admin-services",
      icon: <HiOutlineScissors size={21} />,
    },
    {
      name: "Gallery",
      path: "admin-gallery",
      icon: <HiOutlinePhotograph size={21} />,
    },
    {
      name: "Customers",
      path: "admin-customers",
      icon: <HiOutlineUsers size={21} />,
    },
    {
      name: "Settings",
      path: "admin-settings",
      icon: <HiOutlineCog size={21} />,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-[#B8C7C1]/10 bg-[#092328] transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-[#B8C7C1]/10 px-6">
          <div>
            <h1 className="text-2xl font-bold tracking-[0.2em] text-[#F1F4EF]">
              NGS
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#E5B86A]">
              Admin Panel
            </p>
          </div>

          {/* Mobile Close */}
          <button
            onClick={() => setOpen(false)}
            className="text-[#F1F4EF] transition hover:text-[#E5B86A] lg:hidden"
          >
            <HiX size={25} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8C7C1]">
            Menu
          </p>

          <div className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/admin"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "bg-[#2A835F] text-[#F1F4EF] shadow-lg"
                      : "text-[#B8C7C1] hover:bg-[#12544F] hover:text-[#F1F4EF]"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Bottom */}
        <div className="border-t border-[#B8C7C1]/10 p-4">
          <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium text-[#B8C7C1] transition duration-300 hover:bg-[#12544F] hover:text-[#E5B86A]">
            <HiOutlineLogout size={21} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;