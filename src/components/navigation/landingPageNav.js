import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../../assets/svg/squazzle-desktop-green-logo.svg";

const landingPageNav = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="hidden md:flex flex-row items-center justify-between h-[96px] bg-squazzle-profileCard-background-white-color border-b border-squazzle-background-white-color px-10 fixed top-0 w-full z-10">
        <div className="">
          <button type="button" onClick={() => navigate(NonAuthRoutes.login)}>
            <SquazzleDesktopGreenLogo className="w-[181px] h-[30px] md:h-[44px]" />
          </button>
        </div>

        <ul className="flex flex-row gap-[50px] items-center justify-between font-normal text-base max-[1030px]:text-sm text-squazzle-text-deep-grey2-color">
          <li>
            <button type="button">About us</button>
          </li>
          <li>
            <button type="button">FAQ</button>
          </li>
        </ul>
        <ul className="flex-[0.1] flex flex-row items-center">
          <li>
            <button
              type="button"
              className="text-white bg-[#002C2D] text-base font-normal py-[6px] px-[17px] rounded-[6px]"
              onClick={() => navigate(NonAuthRoutes.login)}
            >
              Sign in
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default landingPageNav;
