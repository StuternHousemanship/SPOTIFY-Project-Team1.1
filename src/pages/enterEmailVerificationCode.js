/* eslint-disable import/no-cycle */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as LoadingIcon } from "../assets/svg/loading-icon.svg";
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
  const [buttonIsLoading, setButtonIsLoading] = useState(false);

  //  handles focus on first input when page loads
  useEffect(() => {
    const firstInput = document.getElementById(`digit-1`);
    const { value } = firstInput;
    if (value === "") {
      firstInput.focus();
    }
  });

  /** handles moving to the next or previous input on keydown */
  const handleKeyDown = (e) => {
    const { id } = e.target;
    if (id === "digit-6" && e.key === "ArrowRight") {
      const firstInput = document.getElementById("digit-1");
      if (firstInput !== null) {
        firstInput.focus();
      }
    } else if (e.key === "ArrowLeft") {
      const previousInputId = Number(id[id.length - 1]) - 1;
      const previousInput = document.getElementById(`digit-${previousInputId}`);
      if (previousInput !== null) {
        previousInput.focus();
      }
    } else if (e.key === "ArrowRight" || e.key === "Enter") {
      const previousInputId = Number(id[id.length - 1]) + 1;
      const previousInput = document.getElementById(`digit-${previousInputId}`);
      if (previousInput !== null) {
        previousInput.focus();
      }
    }
  };

  /** Ensures only digits are inputed */
  const handleChangeForDigit1 = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setDigit1(result);
  };
  const handleChangeForDigit2 = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setDigit2(result);
  };
  const handleChangeForDigit3 = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setDigit3(result);
  };
  const handleChangeForDigit4 = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setDigit4(result);
  };
  const handleChangeForDigit5 = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setDigit5(result);
  };
  const handleChangeForDigit6 = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setDigit6(result);
  };

  /** handles enter password reset code submit button */
  const handleEnterEmailVerificationCode = (e) => {
    e.preventDefault();
    setButtonIsLoading(true);
    const emailVerificationCode = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`;
    onboarding
      .EnterEmailVerificationCode(emailVerificationCode)
      .then((response) => {
        if (response.status === 200) {
          navigate(NonAuthRoutes.emailVerificationSuccess);
        } else {
          navigate(NonAuthRoutes.errorEmailVerification);
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
          Please enter the 6 - digit code sent to
        </p>
        <p className="font-normal text-sm lg:text-lg text-squazzle-button-bg-deep-green-color mb-[26px]">
          {localStorage.getItem("email")}.
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
                onChange={(e) => handleChangeForDigit1(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
              <input
                type="text"
                id="digit-2"
                value={digit2}
                className="w-[38px] h-[38px]  lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => handleChangeForDigit2(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
              <input
                type="text"
                id="digit-3"
                value={digit3}
                className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => handleChangeForDigit3(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
              <input
                type="text"
                id="digit-4"
                value={digit4}
                className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => handleChangeForDigit4(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
              <input
                type="text"
                id="digit-5"
                value={digit5}
                className="w-[38px] h-[38px] lg:w-[60px]  lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => handleChangeForDigit5(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
              <input
                type="text"
                id="digit-6"
                value={digit6}
                className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
                maxLength="1"
                onChange={(e) => handleChangeForDigit6(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>
          </label>
          <button
            type="submit"
            className="enabled flex align-middle justify-center bg-squazzle-button-bg-light-green-color py-[15px] w-[350px]  lg:py-5 lg:w-[420px] text-squazzle-button-font-deep-green-color text-sm lg:text-xl font-bold rounded-xl cursor-pointer mt-[46px] disabled:opacity-60"
            onClick={(e) => handleEnterEmailVerificationCode(e)}
            disabled={
              !digit1 || !digit2 || !digit3 || !digit4 || !digit5 || !digit6
            }
          >
            {buttonIsLoading ? (
              <LoadingIcon className="suspense-loading-icon mr-3 lg:mt-1" />
            ) : null}
            Continue
          </button>
        </form>
        <div className="flex justify-center">
          <button
            type="button"
            className="enabled flex align-middle justify-center bg-white text-sm lg:text-xl font-bold py-0 text-squazzle-button-font-deep-green-color cursor-pointer mt-[44px] disabled:opacity-60"
            disabled={
              !digit1 || !digit2 || !digit3 || !digit4 || !digit5 || !digit6
            }
          >
            {buttonIsLoading ? (
              <LoadingIcon className="suspense-loading-icon mr-3 lg:mt-1" />
            ) : null}
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
};

export default enterEmailVerificationCode;
