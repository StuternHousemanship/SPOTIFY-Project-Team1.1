/* eslint-disable react/function-component-definition */
import React from "react";
import { useNavigate } from "react-router-dom";
import alertPageNavigation from "../components/navigation/alert-page-navigation";
import { NonAuthRoutes } from "../url";
import { ReactComponent as CheckCircleIcon } from "../assets/svg/check_circle_icon.svg";

const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  /** handles email verification success and error */
  const handleEmailVerificationSuccess = (e) => {
    e.preventDefault();
    navigate(NonAuthRoutes.login);
  };

  return (
    <div className="font-sans grid place-items-center h-full bg-squazzle-background-white-color pt-70 pb-70 md:pb-[800px] lg:pb-70 max-[640px]:bg-white">
      {alertPageNavigation()}
      <div
        className="grid place-items-center w-[610px] mt-10 py-[22px] px-4 lg:px-10 box-border bg-white text-center"
        style={{ width: "min(100vw, 609px)" }}
      >
        <CheckCircleIcon className="h-[56.67px] w-[56.67px] lg:h-[73.33px] lg:w-[73.33px]" />
        <h2 className="text-2xl lg:text-4xl font-bold text-squazzle-grey-text-color mt-[37.67px] lg:mt-[35.33px]">
          Verification Successful!
        </h2>
        <p className="font-normal text-sm  lg:text-lg max-w-[310px] lg:max-w-[484px] text-squazzle-text-deep-grey1-color mt-4 lg:mt-7">
          Your email address has been verified. You can start enjoying all the
          amazing features of Squazzle.
        </p>
        <button
          type="submit"
          className="block bg-squazzle-button-bg-deep-green-color py-[15px]  lg:py-5 w-[320px] md:w-[350px] lg:w-[400px] text-squazzle-button-bg-light-green-color text-sm lg:text-xl font-bold rounded-xl cursor-pointer mt-7 lg:mt-12 mb-12"
          onClick={(e) => handleEmailVerificationSuccess(e)}
        >
          Proceed to sign in
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;
