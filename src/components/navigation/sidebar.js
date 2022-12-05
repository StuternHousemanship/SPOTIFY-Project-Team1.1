import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { NonAuthRoutes, AuthRoutes } from "../../url";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../../assets/svg/squazzle-desktop-green-logo.svg";

const sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const navigate = useNavigate();

  // handles sidebar toggle
  const showSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  //  removes sidebar
  const removeSidebar = () => {
    setSidebarToggle(false);
  };
  window.addEventListener("scroll", removeSidebar);
  window.addEventListener("resize", removeSidebar);

  // handles logout
  const handleLogout = () => {
    // navigates to login page
    navigate(NonAuthRoutes.login);
    window.localStorage.clear();
  };

  // nav button functions
  const goToMainDashboard = () => {
    navigate(AuthRoutes.dashboard);
    removeSidebar();
  };
  const goToAccommodationDetails = () => {
    navigate(AuthRoutes.dashboardAccommodationDetails);
    removeSidebar();
  };
  const goToManageAccount = () => {
    navigate(AuthRoutes.dashboardManageAccount);
    removeSidebar();
  };

  return (
    <>
      <main
        className={
          sidebarToggle
            ? "hidden"
            : "flex items-center justify-center w-full h-[92px]"
        }
      >
        <section
          style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
          className={
            sidebarToggle
              ? "hidden"
              : "flex flex-row items-center justify-between px-6 pb-3 w-full"
          }
        >
          <button type="button" onClick={goToMainDashboard}>
            <SquazzleDesktopGreenLogo className="w-[130px] h-[30px]" />
          </button>

          <div>
            <FontAwesomeIcon
              icon={faBars}
              onClick={showSidebar}
              className="cursor-pointer text-lg"
            />
          </div>
        </section>
      </main>

      <section
        className={
          sidebarToggle
            ? "flex flex-col items-start justify-start p-4 gap-y-6"
            : "hidden"
        }
      >
        <div className="font-semibold text-lg self-end">
          <FontAwesomeIcon
            icon={faClose}
            onClick={removeSidebar}
            className="cursor-pointer text-base text-squazzle-text-deep-grey1-color"
          />
        </div>
        <ul className="flex flex-col text-base text-squazzle-text-deep-grey1-color font-normal gap-y-6 w-full">
          <li>
            <button type="button" onClick={goToManageAccount}>
              Manage Account
            </button>
          </li>
          <li>
            <button type="button" onClick={goToAccommodationDetails}>
              Accommodations
            </button>
          </li>
          <li>
            <button type="button"> List your properties </button>
          </li>
          <li>
            <button type="button"> About us </button>
          </li>
          <li>
            <button type="button"> FAQ </button>
          </li>
          <li>
            <button type="button"> Settings </button>
          </li>
          <li>
            <button type="button"> Wishlist </button>
          </li>
          <li className="w-full">
            <hr className="border border-squazzle-border-grey-color" />
          </li>
          <li className="text-squazzle-profileCard-logout-red-color">
            <button type="button" onClick={() => handleLogout()}>
              Logout
            </button>
          </li>
        </ul>
      </section>
    </>
  );
};

export default sidebar;
