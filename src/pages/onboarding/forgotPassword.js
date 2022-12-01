/* eslint-disable no-useless-escape */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import alertNavigation from "../../components/navigation/alert-page-navigation";
import { ReactComponent as LoadingIcon } from "../../assets/svg/loading-light-icon.svg";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as MailIcon } from "../../assets/svg/mail-icon.svg";
import onboarding from "../../api/onboarding";

function forgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);

  useEffect(() => {
    // These logic clear error messages when page loads
    if (!email) {
      setIsEmailValid(false);
    }
  });

  const validateEmail = () => {
    setShowEmailError(true);
    // eslint-disable-next-line no-useless-escape
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
    if (regex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const displayEmailErrorText = () => {
    return (
      <p
        className={
          isEmailValid
            ? "text-squazzle-success-green-color text-xs font-semibold mt-2"
            : "text-squazzle-text-error-red-color text-xs font-semibold mt-2"
        }
      >
        Please enter a valid email address{" "}
      </p>
    );
  };

  const handleGetCode = (e) => {
    e.preventDefault();
    setButtonIsLoading(true);
    try {
      onboarding.passwordCode(email).then((response) => {
        if (response.status === 200) {
          navigate(NonAuthRoutes.alertForgotPassword);
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
    <div className="font-sans grid place-items-center h-full pt-70 pb-70 md:pb-[600px] lg:pb-70 bg-squazzle-background-white-color max-[640px]:bg-white">
      {" "}
      {alertNavigation()}{" "}
      <div
        className="grid justify-center md:w-[400px] lg:w-[500px] mt-10 lg:mt-20 py-7 lg:py-5 px-5 lg:px-10 box-border bg-white text-center"
        style={{ width: "min(100vw, 609px)" }}
      >
        <div className="mt-0 mb-4 lg:mt-2 lg:mb-2 grid place-items-center">
          <MailIcon className="h-[68px] w-[68px] lg:h-[88px] lg:w-[88px]" />
        </div>{" "}
        <h2 className="text-2xl lg:text-4xl font-bold text-squazzle-grey-text-color mb-7">
          Password reset request{" "}
        </h2>{" "}
        <p className="font-normal text-sm lg:text-lg max-w-[420px] text-squazzle-text-deep-grey1-color">
          Enter your registered email address below to recieve the password
          reset code{" "}
        </p>{" "}
        <form className="text-left mt-8">
          <div>
            <label htmlFor="email">
              <span className="text-squazzle-text-deep-grey1-color text-sm font-[600]">
                Email Address{" "}
              </span>{" "}
              <input
                id="email"
                type="text"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="zharadoe@gmail.com"
                className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm  lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={() => validateEmail()}
              />{" "}
            </label>{" "}
          </div>{" "}
          {showEmailError ? displayEmailErrorText() : null}{" "}
          <button
            type="submit"
            className="enabled flex align-middle justify-center text-squazzle-button-bg-light-green-color bg-squazzle-button-bg-deep-green-color disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color w-full py-4 rounded-xl font-bold text-sm lg:text-xl mt-8 lg:mt-12"
            onClick={(e) => handleGetCode(e)}
            disabled={!isEmailValid}
          >
            {buttonIsLoading ? (
              <LoadingIcon className="suspense-loading-icon mr-3 lg:mt-[3px]" />
            ) : null}
            Get a reset code{" "}
          </button>{" "}
        </form>{" "}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-white text-sm lg:text-xl font-bold w-full border-2 rounded-xl border-squazzle-button-bg-deep-green-color h-12 lg:h-16 text-squazzle-button-bg-deep-green-color cursor-pointer mt-4 lg:mt-6 mb-3 lg:mb-2"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            Cancel{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default forgotPassword;
