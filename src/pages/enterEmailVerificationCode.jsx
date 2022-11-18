/* eslint-disable import/no-cycle */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
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

  //  handles focus on first input when page loads
  useEffect(() => {
    const firstInput = document.getElementById(`digit-1`);
    const { value } = firstInput;
    if (value === "") {
      firstInput.focus();
    }
  });

  /** handles focus on next input when previous input is filled */
  const handleNextInput = (e) => {
    const { id } = e.target;
    const nextInputId = Number(id[id.length - 1]) + 1;
    const nextInput = document.getElementById(`digit-${nextInputId}`);
    if (nextInput !== null) {
      nextInput.focus();
    }
  };

  /** handles enter password reset code submit button */
  const handleEnterEmailVerificationCode = () => {
    navigate(NonAuthRoutes.emailVerificationSuccess);

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
    <div className="font-sans grid place-items-center h-screen bg-squazzle-background-white-color py-70 max-[640px]:bg-white">
      <nav
        className="bg-white fixed top-0 right-0 left-0 py-2 pl-5 lg:py-2 lg:pl-[86px]"
        style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
      >
        <SquazzleMobileLogo className="h-8 w-[146.33px] lg:h-14 lg:w-[222.33px]" />
      </nav>
      <div
        className="w-[610px] mt-12 py-[44px] px-20 box-border bg-white max-[640px]:px-10 text-center"
        style={{ width: "min(100vw, 609px)" }}
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-squazzle-grey-text-color mb-7">
          Email Verification
        </h2>
        <p className="font-normal text-sm lg:text-lg  text-squazzle-text-deep-grey1-color">
          Please enter the 6-digit code sent to
        </p>
        <p className="font-normal text-sm lg:text-lg text-squazzle-button-bg-deep-green-color mb-[26px]">
          {}
        </p>
        <form className="grid place-items-center">
          <label htmlFor="6-digit-code">
            <div className="flex gap-2 lg:gap-4 ">
              <input
                type="text"
                id="digit-1"
                value={digit1}
                className="w-[38px] h-[38px]  lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border text-squazzle-text-deep-grey1-color border-squazzle-border-grey-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit1(e.target.value)}
                onKeyUp={(e) => handleNextInput(e)}
              />
              <input
                type="text"
                id="digit-2"
                value={digit2}
                className="w-[38px] h-[38px]  lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit2(e.target.value)}
                onKeyUp={(e) => handleNextInput(e)}
              />
              <input
                type="text"
                id="digit-3"
                value={digit3}
                className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit3(e.target.value)}
                onKeyUp={(e) => handleNextInput(e)}
              />
              <input
                type="text"
                id="digit-4"
                value={digit4}
                className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit4(e.target.value)}
                onKeyUp={(e) => handleNextInput(e)}
              />
              <input
                type="text"
                id="digit-5"
                value={digit5}
                className="w-[38px] h-[38px] lg:w-[60px]  lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit5(e.target.value)}
                onKeyUp={(e) => handleNextInput(e)}
              />
              <input
                type="text"
                id="digit-6"
                value={digit6}
                className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => setDigit6(e.target.value)}
              />
            </div>
          </label>
          <button
            type="submit"
            className="bg-squazzle-button-bg-light-green-color h-12 w-[350px]  lg:h-16 lg:w-[420px] text-squazzle-button-font-deep-green-color text-sm lg:text-xl font-bold rounded-xl block cursor-pointer mt-[46px]"
            onClick={() => handleEnterEmailVerificationCode()}
          >
            Continue
          </button>
        </form>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-white text-sm lg:text-xl font-bold py-0 text-squazzle-button-font-deep-green-color cursor-pointer mt-[44px]"
          >
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
};

export default enterEmailVerificationCode;
