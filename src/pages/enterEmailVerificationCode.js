/* eslint-disable import/no-cycle */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import alertPageNavigation from "../components/navigation/alert-page-navigation";
import { ReactComponent as LoadingIcon } from "../assets/svg/loading-icon.svg";
import { NonAuthRoutes } from "../url";
import onboarding from "../api/onboarding";

const enterEmailVerificationCode = () => {
  const navigate = useNavigate();
  const { verificationCode } = useParams();

  const verificationCodeArray = verificationCode.split("");
  const [d1, d2, d3, d4, d5, d6] = verificationCodeArray;

  const [digit1, setDigit1] = useState(d1);
  const [digit2, setDigit2] = useState(d2);
  const [digit3, setDigit3] = useState(d3);
  const [digit4, setDigit4] = useState(d4);
  const [digit5, setDigit5] = useState(d5);
  const [digit6, setDigit6] = useState(d6);
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
    try {
      onboarding
        .EnterEmailVerificationCode(emailVerificationCode)
        .then((response) => {
          if (response.status === 200) {
            navigate(NonAuthRoutes.emailVerificationSuccess);
          } else {
            navigate(NonAuthRoutes.errorEmailVerification);
          }
        });
    } catch {
      setTimeout(() => {
        setButtonIsLoading(false);
      }, 5000);
      // navigate(NonAuthRoutes.);
    }
  };

  return (
    <div className="bg-squazzle-background-white-color pt-[130px] pb-70 md:pb-[800px] lg:pb-80 max-[640px]:bg-white">
      <div className="font-sans md:grid md:place-items-center h-full bg-squazzle-background-white-color max-[640px]:bg-white">
        {alertPageNavigation()}
        <div
          className="grid place-items-center w-[610px] py-[22px] px-[4px] md:px-10 lg:px-10 box-border bg-white text-center"
          style={{ width: "min(100vw, 609px)" }}
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-squazzle-grey-text-color mb-7">
            Email Verification
          </h2>
          <p className="font-normal text-smlg:text-lg  text-squazzle-text-deep-grey1-color">
            Please enter the 6-digit code sent to
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
                  className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border text-squazzle-text-deep-grey1-color border-squazzle-border-grey-color caret-squazzle-border-grey-color text-center focus:outline-none"
                  maxLength="1"
                  onChange={(e) => handleChangeForDigit1(e)}
                  onKeyDown={(e) => handleKeyDown(e)}
                />
                <input
                  type="text"
                  id="digit-2"
                  value={digit2}
                  className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none "
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
                  className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] text-sm lg:text-lg  font-[600] items-center border border-squazzle-border-grey-color text-squazzle-text-deep-grey1-color caret-squazzle-border-grey-color text-center focus:outline-none"
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
              className="enabled flex align-middle justify-center text-squazzle-button-bg-light-green-color bg-squazzle-button-bg-deep-green-color disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color py-[15px] w-[280px]  lg:py-5 lg:w-[420px text-sm lg:text-xl font-bold rounded-xl cursor-pointer mt-[46px]"
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
              onClick={(e) => handleEnterEmailVerificationCode(e)}
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
    </div>
  );
};

export default enterEmailVerificationCode;
