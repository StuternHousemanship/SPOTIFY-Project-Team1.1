import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as BellIcon } from "../assets/svg/bell-icon.svg";
import { ReactComponent as UserIcon } from "../assets/svg/profile-icon.svg";

function dashboard() {
  const navigate = useNavigate();
  const [profileCard, setProfileCard] = useState(false);

  // handles profile card toggele
  const toggleProfileCard = () => {
    setProfileCard(!profileCard);
  };
  const handleLogout = () => {
    // navigates to login page
    navigate(NonAuthRoutes.login);
    window.localStorage.clear();
  };

  return (
    <main className="min-h-screen bg-squazzle-background-white-color">
      <nav className="flex flex-row items-center justify-between bg-squazzle-white-background-color border-b border-squazzle-background-white-color py-4 px-20 h-[96px]">
        <div>
          <SquazzleDesktopGreenLogo className="w-[181px] h-[44px]" />
        </div>
        <ul className="flex flex-[0.4] flex-row items-center justify-between font-normal text-base text-squazzle-text-deep-grey2-color">
          <li>
            <button type="button">Accommodations</button>
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
              onClick={toggleProfileCard}
            />
          </li>
        </ul>
      </nav>
      <ul className={profileCard ? "profile-card-active" : "profile-card"}>
        <li>
          <button type="button"> Manage Account </button>
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
    </main>
  );
}

export default dashboard;
