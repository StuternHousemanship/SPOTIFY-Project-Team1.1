/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as ErrorIcon } from "../assets/svg/error-icon.svg";
import { NonAuthRoutes } from "../url";

const errorSignUp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hidden sm:block">
        <div className="font-sans h-screen flex items-center justify-center bg-squazzle-background-white-color max-[640px]:bg-white ">
          <nav
            className="bg-white fixed top-0 right-0 left-0 sm:h-12 sm:pl-5 sm:py-2 md:h-[96px] md:pl-[86px] md:py-[20px]"
            style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
          >
            <SquazzleMobileLogo className=" md:h-14 md:w-[222.33px]" />
          </nav>
          <div className="main_div sm:max-w-[500px] sm:py-10 sm:px-10 box-border bg-white rounded-lg drop-shadow-[0_0.5px_rgba(31,44,63,0.05)]">
            <ErrorIcon className="mx-auto sm:mb-8" />
            <div>
              <div>
                <h2 className="text-2xl md:text-[36px] md:leading-[45px] font-normal text-squazzle-grey-text-color mb-6 text-center">
                  Let's try that again
                </h2>
                <p className="font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] md:h-[78px] text-squazzle-text-error-red-color text-center align-top ">
                  We encountered an issue creating your account. Please try
                  again.
                </p>
              </div>
              <button
                type="submit"
                className="text-squazzle-button-bg-light-green-color text-sm md:text-[20px] md:leading-[24px] font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl mt-12 cursor-pointer"
                onClick={() => navigate(NonAuthRoutes.signUp)}
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="sm:hidden ">
        <nav
          className="bg-white h-12 pl-5 py-2 "
          style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
        >
          <SquazzleMobileLogo className=" w-[146.33px] h-8" />
        </nav>
        <main className="pl-5 pr-5 pt-[28px] flex flex-col gap-y-8">
          <ErrorIcon className="mx-auto " />
          <div className="px-4 text-center flex flex-col gap-y-6 ">
            <p className=" font-semibold text-[24px] leading-[30px] text-[#232323]">
              Let's try that again!
            </p>
            <p className="font-normal text-squazzle-text-error-red-color text-[14px] leading-[24px]">
              We encountered an issue creating your account. Please try again.
            </p>
          </div>
          <button
            type="submit"
            className="text-squazzle-button-bg-light-green-color text-[14px] leading-[18px]  font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl cursor-pointer"
            onClick={() => navigate(NonAuthRoutes.signUp)}
          >
            Create account
          </button>
        </main>
      </div>
    </div>
  );
};

export default errorSignUp;
