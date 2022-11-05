/* eslint-disable react/function-component-definition */
import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";

const verifyEmail = () => {
  const navigate = useNavigate();

  /** handles email verification */
  const handleVerifyEmail = (e) => {
    navigate(NonAuthRoutes.verifyAccount);
    e.preventDefault();
  };

  return (
    <div>
      {/* Desktop Screen */}
      <div className="hidden md:block lg:block">
        <div className="min-h-screen flex items-center justify-center bg-squazzle-background-grey-color ">
          <div className="bg-squazzle-white-background-color max-h-[438px] max-w-[609px] py-12 px-20 ">
            <form>
              <div>
                <p className="text-4xl font-bold mb-[56px] max-w-[297px]">
                  Verify your email
                </p>
                <p className="max-w-[418px] mb-[87px] text-base leading-5">
                  Kindly go to your email box or spam folder to confirm and
                  verify your email address
                </p>
              </div>
              <button
                type="submit"
                className="bg-squazzle-grey-text-color h-14 text-white text-xl rounded block w-full mb-[61px]"
                onClick={() => handleVerifyEmail()}
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden lg:hidden">
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-squazzle-white-background-color max-h-[329px] max-w-[457.45px] flex flex-col py-12 px-10">
            <p className="font-bold text-2xl squazzle-grey-text-color mb-10 ">
              Verify your email
            </p>
            <p className="font-Inter font-normal text=[16px] leading-5 text-[#000000] max-h-[38px] max-w-[349px] mb-14">
              Kindly go to your email box or spam folder to confirm and verify
              your email address
            </p>
            <button
              type="submit"
              className="bg-squazzle-grey-text-color text-white text-base rounded block w-full h-10 font-bold"
              onClick={() => handleVerifyEmail()}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default verifyEmail;
