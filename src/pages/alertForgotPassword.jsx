/* eslint-disable import/no-cycle */
import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as MailIcon } from "../assets/svg/mail-icon.svg";

function alertForgotPassword() {
  const navigate = useNavigate();

  /** handles sending mail to user */
  const handleGetCode = () => {
    navigate(NonAuthRoutes.enterPasswordResetCode);
  };

  return (
    <div className="font-sans">
      <nav
        className="bg-white fixed top-0 right-0 left-0 py-2 pl-5 lg:py-2 lg:pl-[86px]"
        style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
      >
        <SquazzleMobileLogo className="h-8 w-[146.33px] lg:h-14 lg:w-[222.33px]" />
      </nav>

      <main className="min-h-screen flex items-center justify-center bg-squazzle-background-white-color rounded-xl">
        <div className="flex flex-col w-full max-w-[620px] py-6 lg:py-8 px-10 lg:px-20 bg-white rounded-xl">
          <header>
            <div className="mt-0 mb-4 lg:mt-2 grid place-items-center">
              <MailIcon className="h-[68px] w-[68px] lg:h-[88px] lg:w-[88px]" />
            </div>
            <h1 className="font-bold text-2xl lg:text-4xl text-center text-squazzle-grey-text-color">
              Email has been sent!
            </h1>
            <h3 className="text-sm lg:text-lg text-center text-squazzle-grey-text-color mt-4 lg:mt-6">
              Please check your inbox and click on the recieved link to reset
              password
            </h3>
          </header>
          <button
            type="submit"
            className="hidden md:block bg-squazzle-button-bg-deep-green-color w-full py-[15px] lg:py-5 text-squazzle-white-background-color rounded-xl font-bold text-sm lg:text-xl mt-8 lg:mt-12"
            onClick={() => handleGetCode()}
          >
            Get a reset link
          </button>

          <button
            type="submit"
            className="block md:hidden bg-squazzle-button-bg-deep-green-color text-sm lg:text-xl w-full py-[15px] lg:py-5 text-squazzle-white-background-color rounded-xl font-bold mt-8 lg:mt-12"
            onClick={() => handleGetCode()}
            //
          >
            Continue
          </button>

          <button
            type="button"
            className="bg-squazzle-background-white-color font-bold text-sm lg:text-xl w-full py-[15px] lg:py-5 rounded-xl text-squazzle-button-bg-deep-green-color border-2 border-squazzle-button-bg-deep-green-color mt-4 lg:mt-6"
            onClick={() => handleGetCode()}
          >
            Resend link
          </button>
        </div>
      </main>
    </div>
  );
}
export default alertForgotPassword;
