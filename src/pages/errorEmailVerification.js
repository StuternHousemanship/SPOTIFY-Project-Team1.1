/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";
import alertPageNavigation from "../components/navigation/alert-page-navigation";
import { ReactComponent as ErrorIcon } from "../assets/svg/error-icon.svg";
import { NonAuthRoutes } from "../url";

const errorSignUp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hidden sm:block">
        <div className="font-sans bg-squazzle-background-white-color h-screen flex justify-center items-center mt-2 lg:mt-[50px]">
          {alertPageNavigation()}
          <div className="bg-white text-center w-1/2 p-5 lg:py-5 lg:px-10">
            <ErrorIcon className="mx-auto sm:mb-8" />
            <div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-[36px] md:leading-[45px] font-normal text-squazzle-grey-text-color mb-6 text-center">
                  Let's try that again
                </h2>
                <p className="font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] md:h-[78px] text-squazzle-text-error-red-color text-center align-top max-w-[420px]">
                  Your email address cannot be verified. It seems you entered
                  the wrong PIN.
                </p>
              </div>
              <button
                type="submit"
                className="text-squazzle-button-bg-light-green-color text-sm md:text-[20px] md:leading-[24px] font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl mt-12 mb-5 max-w-[420px] cursor-pointer"
              >
                resend code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="sm:hidden ">
        {alertPageNavigation()}
        <main className="pl-5 pr-5 pt-[28px] flex flex-col gap-y-8 mt-16">
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
