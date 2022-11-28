import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "../../url";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as BellIcon } from "../../assets/svg/bell-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/profile-icon.svg";
import Sidebar from "./sidebar";

const dashboardNavs = ({ sidebarToggle, setSidebarToggle }) => {
  const navigate = useNavigate();
  const [profileCard, setProfileCard] = useState(false);

  // handles profile-card toggle
  const toggleProfileCard = () => {
    setProfileCard(!profileCard);
  };

  // handles profile-card removal
  const removeProfileCard = () => {
    setProfileCard(false);
  };
  window.addEventListener("resize", removeProfileCard);
  window.addEventListener("scroll", removeProfileCard);

  const handleLogout = () => {
    // navigates to login page
    navigate(NonAuthRoutes.login);
    window.localStorage.clear();
  };

  // nav button functions
  const goToMainDashboard = () => {
    navigate(AuthRoutes.dashboard);
    removeProfileCard();
  };
  const goToAccommodationDetails = () => {
    navigate(AuthRoutes.dashboardAccommodationDetails);
    removeProfileCard();
  };
  const goToManageAccount = () => {
    navigate(AuthRoutes.dashboardManageAccount);
    removeProfileCard();
  };

  return (
    <>
      <nav className="hidden md:flex flex-row items-center justify-between bg-squazzle-white-background-color border-b border-squazzle-background-white-color py-6 md:py-10 px-10 md:px-20 fixed top-0 w-full z-10">
        <div>
          <button type="button" onClick={goToMainDashboard}>
            <SquazzleDesktopGreenLogo className="w-[120px] md:w-[181px] h-[30px] md:h-[44px]" />
          </button>
        </div>

        <ul className="flex-[0.5] flex flex-row items-center justify-between font-normal text-base text-squazzle-text-deep-grey2-color">
          <li>
            <button type="button" onClick={goToAccommodationDetails}>
              Accommodations
            </button>
          </li>
          <li>
            <button type="button">List your property</button>
          </li>
          <li>
            <button type="button">About us</button>
          </li>
          <li>
            <button type="button">FAQ</button>
          </li>
        </ul>
        <ul className="flex-[0.07] flex flex-row items-center justify-between">
          <li>
            <BellIcon className="w-[16px] h-[20px] cursor-pointer" />
          </li>
          <li>
            <UserIcon
              className="w-[33px] h-[33px] cursor-pointer"
              onClick={() => toggleProfileCard()}
            />
          </li>
        </ul>
      </nav>
      <ul
        className={
          profileCard
            ? "flex flex-col items-start w-[240px] gap-[24px] p-[24px] bg-squazzle-white-background-color text-base font-normal leading-6 text-squazzle-text-black-color fixed top-[120px] right-[80px] z-[1]"
            : "hidden"
        }
      >
        <li>
          <button type="button" onClick={goToManageAccount}>
            Manage Account
          </button>
        </li>
        <li>
          <button type="button"> Settings </button>
        </li>
        <li>
          <button type="button"> Wishlist </button>
        </li>
        <li>
          <button type="button"> Help </button>
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

      <div className="block md:hidden">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>
    </>
  );
};

export default dashboardNavs;
