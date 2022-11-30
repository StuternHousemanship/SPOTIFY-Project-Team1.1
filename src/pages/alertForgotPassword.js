/* eslint-disable import/no-cycle */
import React from "react";
import { useNavigate } from "react-router-dom";
import alertNavigation from "../components/navigation/alert-page-navigation";
import { NonAuthRoutes } from "../url";
import { ReactComponent as UndrawOpenIcon } from "../assets/svg/undraw-open-icon.svg";
import { ReactComponent as UndrawOpenMobileIcon } from "../assets/svg/undraw-open-mobile-icon.svg";

function alertForgotPassword() {
  const navigate = useNavigate();

  /** handles sending mail to user */
  const handleGetResetPasswordCode = () => {
    navigate(NonAuthRoutes.enterPasswordResetCode);
  };

  return (
    <div>
      <div className="hidden sm:block">
        <div className="font-sans bg-squazzle-background-white-color h-screen flex justify-center items-center mt-2 lg:mt-[50px]">
          {alertNavigation()}
          <div className="bg-white text-center w-1/2 p-5 lg:py-5 lg:px-10">
            <UndrawOpenIcon className="mx-auto sm:mb-8" />
            <div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-[36px] md:leading-[45px] font-normal text-squazzle-grey-text-color mb-6 text-center">
                  Email has been sent!
                </h2>
                <p className=" font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] md:h-[78px] text-squazzle-text-deep-grey1-color text-center align-top max-w-[420px]">
                  Please check your inbox and copy the received code to reset
                  password
                </p>
              </div>
              <button
                type="submit"
                className=" text-squazzle-button-bg-light-green-color text-sm md:text-[20px] md:leading-[24px] font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl mt-12 max-w-[420px] cursor-pointer"
                onClick={(e) => handleGetResetPasswordCode(e)}
              >
                Continue
              </button>
              <button
                type="button"
                className="text-squazzle-button-bg-deep-green-color text-sm lg:text-xl font-bold bg-white  border-2 border-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl mt-6 max-w-[420px] mb-5 cursor-pointer"
                onClick={() => handleGetResetPasswordCode()}
              >
                Resend code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="sm:hidden font-sans">
        {alertNavigation()}
        <main className="pl-5 pr-5 pt-[28px] flex flex-col gap-y-8 mt-16">
          <UndrawOpenMobileIcon className="mx-auto " />
          <div className="px-4 text-center flex flex-col gap-y-6 ">
            <p className="text-[24px] leading-[30px] text-[#232323]">
              Email has been sent!
            </p>
            <p className="font-normal text-[14px] leading-[24px]">
              Please check your inbox and copy the received code to reset
              password
            </p>
          </div>
          <button
            type="submit"
            className="text-squazzle-button-bg-light-green-color text-sm  font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl cursor-pointer"
            onClick={() => handleGetResetPasswordCode()}
          >
            Continue
          </button>
          <button
            type="button"
            className="text-squazzle-button-bg-deep-green-color text-sm lg:text-xl font-bold bg-white  border-2 border-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl cursor-pointer"
            onClick={() => handleGetResetPasswordCode()}
          >
            Resend code
          </button>
        </main>
      </div>
    </div>
  );
}
export default alertForgotPassword;
