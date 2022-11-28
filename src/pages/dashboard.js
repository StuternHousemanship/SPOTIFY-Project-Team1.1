import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavs from "../components/navigation/dashboardNavs";
import Footer from "../components/footer/footer";

function dashboard() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <main className="min-h-screen bg-white ">
      <div className="">
        <DashboardNavs
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>

      <div
        className={
          sidebarToggle
            ? "hidden"
            : "block py-4 bg-squazzle-background-white-color mt-4"
        }
      >
        <Outlet />
      </div>

      <div className={sidebarToggle ? "hidden" : "block"}>
        <Footer />
      </div>
    </main>
  );
}

export default dashboard;
