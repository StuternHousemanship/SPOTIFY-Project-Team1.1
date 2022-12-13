import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "../../url";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as BellIcon } from "../../assets/svg/bell-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/profile-icon.svg";
import Sidebar from "./sidebar";

const dashboardNavs = () => {
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
    navigate(AuthRoutes.browseAcccommodation);
    removeProfileCard();
  };
  const goToManageAccount = () => {
    navigate(AuthRoutes.dashboardManageAccount);
    removeProfileCard();
  };

  return (
    <>
      <nav className="hidden md:flex flex-row items-center justify-between h-[96px] bg-squazzle-profileCard-background-white-color border-b border-squazzle-background-white-color px-10 fixed top-0 w-full z-10">
        <div className="">
          <button type="button" onClick={goToMainDashboard}>
            <SquazzleDesktopGreenLogo className="w-[181px] h-[30px] md:h-[44px]" />
          </button>
        </div>

        <ul className="flex-[0.6] max-[1030px]:flex-[0.7] flex flex-row items-center justify-between font-normal text-base max-[1030px]:text-sm text-squazzle-text-deep-grey2-color">
          <li>
            <button type="button" onClick={goToAccommodationDetails}>
              Accommodations
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => navigate(AuthRoutes.listedAccommodations)}
            >
              List your property
            </button>
          </li>
          <li>
            <button type="button">About us</button>
          </li>
          <li>
            <button type="button">FAQ</button>
          </li>
        </ul>
        <ul className="flex-[0.1] flex flex-row items-center justify-between">
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
            ? "flex flex-col items-start w-[240px] gap-[24px] p-[24px] bg-squazzle-profileCard-background-white-color text-base max-[1030px]:text-sm font-normal leading-6 text-squazzle-text-black-color fixed top-[90px] right-[80px] z-[2]"
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
        <Sidebar />
      </div>
    </>
  );
};

export default dashboardNavs;
