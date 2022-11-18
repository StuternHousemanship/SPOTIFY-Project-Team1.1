import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as CheckCircleIcon } from "../assets/svg/check_circle_icon.svg";
import { NonAuthRoutes } from "../url";

const passwordResetSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="font-sans grid place-items-center h-screen bg-squazzle-background-white-color py-70 max-[640px]:bg-white">
      <nav
        className="bg-white fixed top-0 right-0 left-0 py-2 pl-5 lg:py-2 lg:pl-[86px]"
        style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
      >
        <SquazzleMobileLogo className="h-8 w-[146.33px] lg:h-14 lg:w-[222.33px]" />
      </nav>
      <div
        className="grid place-items-center w-[610px] mt-[37.67px]  lg:mt-12 py-[37.67px] lg:py-[55.33px] px-[38px] lg:px-[93.5px] box-border bg-white text-center"
        style={{ width: "min(100vw, 609px)" }}
      >
        <CheckCircleIcon className="h-[56.67px] w-[56.67px] lg:h-[73.33px] lg:w-[73.33px]" />
        <h2 className="text-2xl lg:text-4xl font-bold text-squazzle-grey-text-color mt-[37.67px] md:mt-[35.33px] lg:mt-[35.33px]">
          Password reset successful!
        </h2>
        <p className="font-normal text-sm lg:text-lg max-w-[310px] lg:max-w-[484px] text-squazzle-text-deep-grey1-color mt-4 lg:mt-7">
          Your password has been changed. You can now sign in using your new
          password.
        </p>
        <button
          type="submit"
          className="bg-squazzle-button-bg-deep-green-color h-12 lg:h-16 w-[350px] lg:w-[400px] text-squazzle-button-bg-light-green-color text-sm  lg:text-xl font-bold rounded-xl block cursor-pointer mt-7 lg:mt-12 mb-12"
          onClick={() => navigate(NonAuthRoutes.login)}
        >
          Proceed to sign in
        </button>
      </div>
    </div>
  );
};

export default passwordResetSuccess;
