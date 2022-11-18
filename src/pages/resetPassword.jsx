/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import onboarding from "../api/onboarding";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import { NonAuthRoutes } from "../url";

const resetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasEightCharacters, setHasEightCharacters] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [matchFirstPassword, setMatchFirstPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    // These logic clear error messages when page loads
    if (password.length < 1) {
      setIsPasswordValid(true);
    }
    if (confirmPassword.length < 1) {
      setMatchFirstPassword(true);
    }
  });

  useEffect(() => {
    // confirms all criterias of password are met
    if (
      hasLowerCase &&
      hasUpperCase &&
      hasEightCharacters &&
      (hasNumber || hasSymbol)
    ) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
    // checks for lowercase in password
    if (/[a-z]/.test(password)) {
      setHasLowerCase(true);
    } else {
      setHasLowerCase(false);
    }
    // checks for uppercase in password
    if (/[A-Z]/.test(password)) {
      setHasUpperCase(true);
    } else {
      setHasUpperCase(false);
    }
    // checks length is up to 8
    if (password.length >= 8) {
      setHasEightCharacters(true);
    } else {
      setHasEightCharacters(false);
    }
    // checks for number in password
    if (/\d/.test(password)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }
    // checks for symbol in password
    const regex = /[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
    if (regex.test(password)) {
      setHasSymbol(true);
    } else {
      setHasSymbol(false);
    }
  }, [password]);

  useEffect(() => {
    // checks that second password matches first
    if (password === confirmPassword) {
      setMatchFirstPassword(true);
    } else {
      setMatchFirstPassword(false);
    }
  }, [confirmPassword]);

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /** handles show Re-enter Password text */
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  /** displays password criteria texts */
  const displayPasswordCriteria = () => {
    return (
      <div className="mb-4 mt-[6px]">
        <p
          className={
            hasUpperCase && hasLowerCase
              ? "text-squazzle-success-green-color text-xs font-semibold"
              : "text-squazzle-border-error--red-color text-xs font-semibold"
          }
        >
          *Must include one uppercase and one lowercase
        </p>
        <p
          className={
            hasEightCharacters
              ? "text-squazzle-success-green-color text-xs font-semibold"
              : "text-squazzle-border-error--red-color text-xs font-semibold"
          }
        >
          *Contain at least 8 characters
        </p>
        <p
          className={
            hasNumber || hasSymbol
              ? "text-squazzle-success-green-color text-xs font-semibold"
              : "text-squazzle-border-error--red-color text-xs font-semibold"
          }
        >
          *Contain a number or symbol
        </p>
      </div>
    );
  };
  const handleResetPassword = () => {
    navigate(NonAuthRoutes.alertResetPassword);
    onboarding.changePassword(password, confirmPassword).then((response) => {
      if (response.status === 200) {
        //
      }
    });
  };

  /** displays confirm password error text */
  const displayConfirmPasswordErrorText = () => {
    return (
      <p
        className={
          matchFirstPassword
            ? "text-squazzle-success-green-color text-xs font-semibold mt-[6px]"
            : "text-squazzle-border-error--red-color text-xs font-semibold mt-[6px]"
        }
      >
        Passwords do not match
      </p>
    );
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
        className="w-[610px] mt-10 py-[22px] px-5 lg:px-10 box-border bg-white text-center"
        style={{ width: "min(100vw, 609px)" }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-squazzle-grey-text-color mb-7">
          Password reset request
        </h2>
        <p className="font-normal text-sm md:text-lg lg:text-lg  text-squazzle-text-deep-grey1-color">
          Please use a minimum of 8 characters, including uppercase letters,
          lowercase letters and a number
        </p>
        <form className="text-left mt-8">
          <div>
            <label htmlFor="password" className="relative block">
              <span className="text-squazzle-text-deep-grey1-color text-sm">
                Password
                <span className="text-squazzle-text-error-red-color pl-[5px]">
                  *
                </span>
              </span>
              <input
                id="password"
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <PasswordShow
                  className="absolute top-[49px] right-5 md:top-[50px] md:right-5 lg:top-[53px] lg:right-5"
                  onClick={() => handleShowPassword()}
                />
              ) : (
                <PasswordHide
                  className="absolute top-[48px] right-5 md:top-[49px] md:right-5 lg:top-[52px] lg:right-5"
                  onClick={() => handleShowPassword()}
                />
              )}
            </label>
          </div>
          {isPasswordValid ? null : displayPasswordCriteria()}
          <div className="mt-6">
            <label htmlFor="confirmpassword" className="relative block">
              <span className="text-squazzle-text-deep-grey1-color text-sm">
                Confirm Password
                <span className="text-squazzle-text-error-red-color pl-[5px]">
                  *
                </span>
              </span>
              <input
                id="confirmpassword"
                value={confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                className="block bg-white border border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {showConfirmPassword ? (
                <PasswordShow
                  className="absolute top-[49px] right-5 md:top-[50px] md:right-5 lg:top-[53px] lg:right-5"
                  onClick={() => handleShowConfirmPassword()}
                />
              ) : (
                <PasswordHide
                  className="absolute top-[48px] right-5 md:top-[49px] md:right-5 lg:top-[52px] lg:right-5"
                  onClick={() => handleShowConfirmPassword()}
                />
              )}
            </label>
            {matchFirstPassword ? null : displayConfirmPasswordErrorText()}
          </div>
          <button
            type="submit"
            className="bg-squazzle-button-bg-deep-green-color h-12 w-full lg:h-16 text-squazzle-button-bg-light-green-color text-sm md:text-xl lg:text-xl font-bold rounded-xl block cursor-pointer mt-[46px]"
            onClick={() => handleResetPassword()}
          >
            Reset password
          </button>
        </form>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-white text-sm md:text-xl lg:text-xl font-bold w-full border-2 rounded-lg border-squazzle-button-bg-deep-green-color h-12 lg:h-16 text-squazzle-button-bg-deep-green-color cursor-pointer mt-4 md:mt-6 lg:mt-6 mb-3"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default resetPassword;
