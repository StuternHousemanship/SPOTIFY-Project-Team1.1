import React from "react";
import { useNavigate } from "react-router-dom";
import alertNavigation from "../components/navigation/alert-page-navigation";
import { ReactComponent as CheckCircleIcon } from "../assets/svg/check_circle_icon.svg";
import { NonAuthRoutes } from "../url";

const passwordResetSuccess = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hidden sm:block">
        <div className="font-sans h-full md:pt-[85px] md:pb-[800px] lg:pb-10 lg:pt-5 flex items-center justify-center bg-squazzle-background-white-color max-[640px]:bg-white ">
          {alertNavigation()}
          <div className="main_div sm:max-w-[500px] sm:py-10 sm:px-10 box-border bg-white rounded-lg drop-shadow-[0_0.5px_rgba(31,44,63,0.05)]">
            <CheckCircleIcon className="mx-auto sm:mb-8" />
            <div>
              <div>
                <h2 className="text-2xl md:text-[36px] md:leading-[45px] font-normal text-squazzle-grey-text-color mb-6 text-center">
                  Password reset successful!
                </h2>
                <p className="font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] md:h-[78px] text-squazzle-text-deep-grey1-color text-center align-top ">
                  Your password has been changed. You can now sign in using your
                  new password.
                </p>
              </div>
              <button
                type="submit"
                className="text-squazzle-button-bg-light-green-color text-sm md:text-[20px] md:leading-[24px] font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl mt-12 cursor-pointer"
                onClick={() => navigate(NonAuthRoutes.login)}
              >
                Proceed to sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="sm:hidden font-sans">
        {alertNavigation()}
        <main className="pl-5 pr-5 pt-[28px] flex flex-col gap-y-8 mt-16">
          <CheckCircleIcon className="mx-auto " />
          <div className="px-4 text-center flex flex-col gap-y-6 ">
            <p className="text-[24px] leading-[30px] text-[#232323]">
              Password reset sucessful!
            </p>
            <p className="font-normal text-[14px] leading-[24px]">
              Your password has been changed. You can now sign in using your new
              password.
            </p>
          </div>
          <button
            type="submit"
            className="text-squazzle-button-bg-light-green-color text-[14px] leading-[18px]  font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl cursor-pointer"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            Proceed to sign in
          </button>
        </main>
      </div>
    </div>
  );
};

export default passwordResetSuccess;
