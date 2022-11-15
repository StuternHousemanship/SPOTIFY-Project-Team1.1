/* eslint-disable react/function-component-definition */
import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as CheckCircleIcon } from "../assets/svg/check_circle_icon.svg";

const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  /** handles email verification success and error */
  const handleemailVerificationSuccess = (e) => {
    navigate(NonAuthRoutes.landingPage);
    e.preventDefault();
  };

  return (
    <div>
      {/* Desktop Screen */}
      <div className="hidden md:block lg:block h-screen bg-squazzle-background-grey-color">
        <div className=" ">
          <div className="w-full h-24 bg-squazzle-white-background-color pl-[86px] pt-5 ">
            <SquazzleDesktopGreenLogo />
          </div>
          <div className="bg-squazzle-white-background-color mx-auto p-10 mt-12 max-w-[500px] max-h-[459px]">
            <div className="flex flex-col">
              <div>
                <div className="px-[33px] w-[420px]">
                  <i className="flex justify-center">
                    <CheckCircleIcon />
                  </i>
                  <span className="w-[full] ">Verification Success!</span>
                </div>
                <span>Your email address has been verified</span>
              </div>
              <button
                type="submit"
                className="bg-squazzle-grey-text-color text-white text-base rounded block w-full h-10 font-bold"
                onClick={() => handleemailVerificationSuccess()}
              >
                Proceed to sign in!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden lg:hidden">
        <div className="squazzle-nav-div max-h-24">Squazzle</div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-squazzle-white-background-color max-h-[329px] max-w-[457.45px] flex flex-col py-12 px-10">
            <p className="font-bold text-2xl squazzle-grey-text-color mb-10 ">
              Verify your email
            </p>
            <p className="font-normal text-[16px] leading-5 text-[#000000] max-h-[38px] max-w-[349px] mb-14">
              Kindly go to your email box or spam folder to confirm and verify
              your email address
            </p>
            <button
              type="submit"
              className="bg-squazzle-grey-text-color text-white text-base rounded block w-full h-10 font-bold"
              onClick={() => handleemailVerificationSuccess()}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;
