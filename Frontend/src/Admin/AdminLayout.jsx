import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "./Components/AdminSlidebar";
import AdminHeader from "./Components/AdminHeader";

function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#092328]">

      {/* Sidebar */}
      <AdminSidebar
        open={open}
        setOpen={setOpen}
      />

      {/* Main Area */}
      <div className="lg:ml-72">

        {/* Header */}
        <AdminHeader setOpen={setOpen} />

        {/* Page Content */}
        <main>
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;