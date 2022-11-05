/* eslint-disable react/function-component-definition */
import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";

const VerifyAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" max-w-[348px]">
        <header>
          <h1 className="font-bold text-4xl flex flex-col text-squazzle-grey-text-color mb-11 ">
            Verify account
          </h1>
        </header>
        <div>
          <p className="text-xl text-[#424242] font-normal mb-6">
            Confirm your email address using the code recieved via email
          </p>
          <form>
            <p className="mb-4">Enter 6-digit code</p>
            <div className="otp-field flex flex-row gap-x-4 h-[11] mb-6">
              <input
                type="text"
                name=""
                id=""
                className="w-11 items-center border-[1px] border-solid border-[#717171] rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
              />
              <input
                type="text"
                name=""
                id=""
                className="w-11 items-center  border-[1px] border-solid border-[#717171] rounded p-[7px] text-center focus:outline-none "
                maxLength="1"
              />
              <input
                type="text"
                name=""
                id=""
                className="w-11 items-center border-[1px] border-solid border-[#717171] rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
              />
              <input
                type="text"
                name=""
                id=""
                className="w-11 items-center border-[1px] border-solid border-[#717171] rounded p-[7px] text-center focus:outline-none "
                maxLength="1"
              />
              <input
                type="text"
                name=""
                id=""
                className="w-11 items-center border-[1px] border-solid border-[#717171] rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
              />
              <input
                type="text"
                name=""
                id=""
                className="w-11 items-center border-[1px] border-solid border-[#717171] rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
              />
            </div>
            <button
              type="button"
              className="bg-[#424242] h-14 text-white text-xl rounded block w-full mt-1 mb-6 p-[7px] text-center focus:outline-none"
            >
              Continue
            </button>
          </form>
          <button
            type="button"
            className="underline underline-offset-4 text-center"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
