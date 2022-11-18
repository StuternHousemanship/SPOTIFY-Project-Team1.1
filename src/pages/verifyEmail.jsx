/* eslint-disable react/function-component-definition */
import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as UndrawOpenIcon } from "../assets/svg/undraw-open-icon.svg";
import { ReactComponent as UndrawOpenIconMobile } from "../assets/svg/undraw-open-mobile-logo.svg";

const VerifyEmail = () => {
  const navigate = useNavigate();

  /** handles email verification */
  const handleEmailValidity = (e) => {
    navigate(NonAuthRoutes.enterEmailVerificationCode);
    e.preventDefault();
  };

  return (
    <div>
      <div className="font-sans flex flex-col sm:grid sm:place-items-center h-screen bg-squazzle-background-white-color max-[767px]:bg-white">
        <nav
          className="bg-white fixed top-0 right-0 left-0 py-2 pl-5 md:py-5 md:pl-[86px] lg:py-5 lg:pl-[86px] mb-[28px]"
          style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
        >
          <SquazzleMobileLogo className="h-8 w-[146.33px] md:h-14 md:w-[222.33px] lg:h-14 lg:w-[222.33px]" />
        </nav>
        <div className=" sm:w-[500px] px-4 mt-[28px] sm:h-[459px] sm:py-10 sm:px-10 box-border bg-white  md:mt-[40px] ">
          <UndrawOpenIcon className="hidden sm:block mx-auto mb-8" />
          <UndrawOpenIconMobile className="mx-auto sm:hidden mt-12 mb-[46px]" />
          <div>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-squazzle-grey-text-color mb-6 text-center">
                Email has been sent!
              </h2>
              <p className="hidden sm:block font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] md:h-[78px] text-squazzle-text-deep-grey1-color text-center align-top ">
                We have sent a 6 digit pin to{" "}
                <span className="font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] text-squazzle-button-bg-deep-green-color">
                  zhara@gmail.com.
                </span>
                &nbsp; Click on the button to confirm the validity of your
                address.
              </p>
              <p className="sm:hidden font-normal px-5 text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] text-squazzle-text-deep-grey1-color text-center align-top ">
                We have sent a 6 digit pin to{" "}
                <span className="font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] text-squazzle-button-bg-deep-green-color">
                  zhara@gmail.com.
                </span>
                &nbsp; Check your email to get the code.
              </p>
            </div>

            <button
              type="submit"
              className="text-squazzle-button-bg-light-green-color text-sm lg:text-xl font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl mt-12 cursor-pointer"
              onClick={() => handleEmailValidity()}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
