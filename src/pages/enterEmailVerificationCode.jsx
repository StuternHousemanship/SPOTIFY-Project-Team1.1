/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import onboarding from "../api/onboarding";

const enterEmailVerificationCode = () => {
  const navigate = useNavigate();

  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [digit5, setDigit5] = useState("");
  const [digit6, setDigit6] = useState("");

  /** hanldes enter password reset code submit button */
  const handleEnterEmailVerificationCode = (e) => {
    e.preventDefault();

    const emailVerificationCode = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`;
    onboarding
      .EnterEmailVerificationCode(emailVerificationCode)
      .then((response) => {
        if (response.status === 200) {
          //
        }
      });
  };

  return (
    <div className="grid place-items-center h-screen bg-squazzle-background-grey-color py-70 max-[640px]:bg-white">
      <div
        className="w-[610px] py-12 px-20 box-border bg-white max-[640px]:px-10"
        style={{ width: "min(100vw, 609px)" }}
      >
        <h2 className="text-4xl font-bold text-squazzle-grey-text-color mb-10">
          Verify email
        </h2>
        <p className="mb-6 text-xl max-w-[400px] text-squazzle-grey-text-color">
          Confirm your email address by using the code received via email
        </p>
        <form>
          <label htmlFor="6-digit-code">
            <span className="text-xl text-squazzle-grey-text-color">
              Enter 6-digit code
            </span>
            <div className="flex gap-4 mt-5">
              <input
                type="text"
                id="digit-1"
                value={digit1}
                className="w-14 h-14 text-xl items-center border border-squazzle-grey-text-color rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit1(e.target.value)}
              />
              <input
                type="text"
                id="digit-2"
                value={digit2}
                className="w-14 h-14 text-xl items-center border border-squazzle-grey-text-color rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit2(e.target.value)}
              />
              <input
                type="text"
                id="digit-3"
                value={digit3}
                className="w-14 h-14 text-xl items-center border border-squazzle-grey-text-color rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit3(e.target.value)}
              />
              <input
                type="text"
                id="digit-4"
                value={digit4}
                className="w-14 h-14 text-xl items-center border border-squazzle-grey-text-color rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit4(e.target.value)}
              />
              <input
                type="text"
                id="digit-5"
                value={digit5}
                className="w-14 h-14 text-xl items-center border border-squazzle-grey-text-color rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit5(e.target.value)}
              />
              <input
                type="text"
                id="digit-6"
                value={digit6}
                className="w-14 h-14 text-xl items-center border border-squazzle-grey-text-color rounded p-[7px] text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit6(e.target.value)}
              />
            </div>
          </label>
          <button
            type="submit"
            className="bg-squazzle-grey-text-color h-14 text-white text-xl rounded block w-full cursor-pointer mt-7"
            onSubmit={() => handleEnterEmailVerificationCode()}
          >
            Continue
          </button>
        </form>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-white text-base py-0 text-squazzle-grey-text-color border-b border-squazzle-grey-text-color cursor-pointer mt-6"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default enterEmailVerificationCode;
