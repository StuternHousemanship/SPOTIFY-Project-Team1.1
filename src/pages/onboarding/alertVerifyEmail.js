/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import alertPageNavigation from "../../components/navigation/alert-page-navigation";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as UndrawOpenIcon } from "../../assets/svg/undraw-open-icon.svg";
import { ReactComponent as UndrawOpenMobileIcon } from "../../assets/svg/undraw-open-mobile-icon.svg";

const AlertVerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Verify Email - Squazzle";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** handles email verification */
  const handleEmailValidity = (e) => {
    e.preventDefault();
    navigate(`${NonAuthRoutes.enterEmailVerificationCode}/000000`);
  };

  return (
    <div>
      <div className="hidden sm:block">
        <div className="font-sans bg-squazzle-background-white-color h-screen flex justify-center items-center mt-2 lg:mt-[50px]">
          {" "}
          {alertPageNavigation()}{" "}
          <div className="bg-white text-center w-1/2 p-5 lg:py-5 lg:px-10">
            <UndrawOpenIcon className="mx-auto sm:mb-8" />
            <div>
              <div className="flex justify-center items-center flex-col">
                <h2 className="text-2xl md:text-[36px] md:leading-[45px] font-normal text-squazzle-grey-text-color mb-6 text-center">
                  Email has been sent!
                </h2>{" "}
                <p className="font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] md:h-[78px] text-squazzle-text-deep-grey1-color text-center align-top max-w-[420px]">
                  We have sent a 6 digit pin to{" "}
                  <span className="font-normal text-[14px] md:text-[18px] md:leading-[26px] text-squazzle-button-bg-deep-green-color mx-1">
                    {" "}
                    {localStorage.getItem("email")}.{" "}
                  </span>
                  Click on the button to confirm the validity of your address.{" "}
                </p>{" "}
              </div>{" "}
              <button
                type="submit"
                className="text-squazzle-button-bg-light-green-color text-sm md:text-[20px] md:leading-[24px] font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl mt-12 mb-5 cursor-pointer max-w-[420px]"
                onClick={(e) => handleEmailValidity(e)}
              >
                Continue{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Mobile Screen */}{" "}
      <div className="sm:hidden font-sans">
        {" "}
        {alertPageNavigation()}{" "}
        <main className="pl-5 pr-5 pt-[28px] flex flex-col gap-y-8 mt-16">
          <UndrawOpenMobileIcon className="mx-auto " />
          <div className="px-4 text-center flex flex-col gap-y-6 ">
            <p className="text-[24px] leading-[30px] text-[#232323]">
              Email has been sent!
            </p>{" "}
            <p className="font-normal text-[14px] leading-[24px]">
              We have sent a 6 digit pin to{" "}
              <span className="text-[#016D71] mx-1">
                {" "}
                {localStorage.getItem("email")}.{" "}
              </span>
              Check your mail to get the code.{" "}
            </p>{" "}
          </div>{" "}
          <button
            type="submit"
            className="text-squazzle-button-bg-light-green-color text-[14px] leading-[18px]  font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl cursor-pointer"
            onClick={() => handleEmailValidity()}
          >
            Continue{" "}
          </button>{" "}
        </main>{" "}
      </div>{" "}
    </div>
  );
};

export default AlertVerifyEmail;
