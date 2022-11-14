/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-empty-character-class */
/* eslint-disable no-useless-escape */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import { ReactComponent as SquazzleDesktopLogo } from "../assets/svg/squazzle-desktop-logo.svg";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as MobileReturnButton } from "../assets/svg/return-button.svg";
import onboarding from "../api/onboarding";
import { NonAuthRoutes } from "../url";
import backgroundimage from "../assets/img/squazzle-background.png";

const signUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [firstPageFilled, setFirstPageFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasEightCharacters, setHasEightCharacters] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [matchFirstPassword, setMatchFirstPassword] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    // These logic clear error messages when page loads
    if (email.length < 1) {
      setValidEmail(true);
    }
    if (password.length < 1) {
      setValidPassword(true);
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
      setValidPassword(true);
    } else {
      setValidPassword(false);
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

  /** handles Validate Email input */
  const validateEmail = (userEmail) => {
    setEmail(userEmail);
    const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    if (regex.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  /** handles show and hide Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //   /** handles show Confirm Password text */
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  /** handles Sign Up */
  const handleSignUp = () => {
    // e.preventDefault();
    // setButtonIsLoading(true);
    navigate(NonAuthRoutes.verifyEmail);
    onboarding.SignUp(email, password).then((response) => {
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
      }
    });
  };

  return (
    <div className="font-sans">
      <div
        className="pt-6 px-16 h-full w-1/2 fixed z-[1] top-0 overflow-x-hidden left-0 hidden md:block lg:block"
        style={{
          background: `linear-gradient(0.6deg, rgba(255, 255, 255, 0) 5.09%, #016D71 84.76%),url(${backgroundimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <SquazzleDesktopLogo />
        <h1 className="mt-7 text-3xl lg:text-4xl text-squazzle-background-white-color font-[600]">
          Find that perfect home with Squazzle.
        </h1>
        <p className="mt-3 text-white text-xl lg:text-2xl font-[400] max-w-lg">
          We'll get you set up so you can check out affordable housing
        </p>
      </div>
      {firstPageFilled ? (
        <div className="pt-[72px] md:pt-16 lg:pt-16 h-screen bg-white md:bg-squazzle-background-white-color lg:bg-squazzle-background-white-color max-[400px]-px-10 max-[640px]:px-20 max-[768px]:px-40 max-[1024px]:px-10 max-[1536px]:px-20 md:w-1/2 md:fixed md:z-[1] md:top-0 md:overflow-x-hidden md:right-0 lg:w-1/2 lg:fixed lg:z-[1] lg:top-0 lg:overflow-x-hidden lg:right-0">
          <nav
            className="bg-white fixed top-0 right-0 left-0 md:hidden lg:hidden"
            style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
          >
            <SquazzleMobileLogo className="my-2 max-[400px]-ml-10 max-[640px]:ml-20 max-[768px]:ml-40 max-[1024px]:ml-10 max-[1536px]:ml-20" />
          </nav>
          <MobileReturnButton
            className="md:hidden lg:hidden mb-4"
            onClick={() => setFirstPageFilled(false)}
          />
          <h1 className="text-base lg:text-2xl font-[600] lg:font-bold text-squazzle-text-deep-green-color mb-2">
            Create Password
          </h1>
          <p className="text-sm lg:text-xl text-squazzle-text-deep-grey1-color">
            Use a minimum of 8 characters, including uppercase letters,
            lowercase letters and a number.
          </p>
          <form
            className="mt-7"
            autoComplete="off"
            onSubmit={() => handleSignUp()}
          >
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
                    className="absolute top-[52px] right-5"
                    onClick={() => handleShowPassword()}
                  />
                ) : (
                  <PasswordHide
                    className="absolute top-[52px] right-5"
                    onClick={() => handleShowPassword()}
                  />
                )}
              </label>
            </div>
            {validPassword ? null : (
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
            )}
            <div className="mt-4">
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
                    className="absolute top-[52px] right-5"
                    onClick={() => handleShowConfirmPassword()}
                  />
                ) : (
                  <PasswordHide
                    className="absolute top-[52px] right-5"
                    onClick={() => handleShowConfirmPassword()}
                  />
                )}
              </label>
              {matchFirstPassword ? null : (
                <p
                  className={
                    matchFirstPassword
                      ? "text-squazzle-success-green-color text-xs font-semibold mt-[6px]"
                      : "text-squazzle-border-error--red-color text-xs font-semibold mt-[6px]"
                  }
                >
                  *Must match first password
                </p>
              )}
            </div>
            <div className="mt-4">
              <label>
                <input
                  type="checkbox"
                  className="border-squazzle-checkbox-border-color border-2 accent-squazzle-button-bg-deep-green-color w-[12px] h-[12px] mr-[6px] lg:w-[16px] lg:h-[16px] lg:mr-[11px]"
                />
                <span className="text-xs lg:text-base text-squazzle-terms-policy-grey-color">
                  I confirm that I have read & agreed to Squazzle
                  <span className="text-squazzle-button-bg-deep-green-color px-[5px] cursor-pointer">
                    Terms of Service
                  </span>
                  and
                  <span className="text-squazzle-button-bg-deep-green-color pl-[5px] cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>
            </div>
          </form>
          <button
            type="submit"
            className="text-squazzle-button-bg-light-green-color text-sm lg:text-xl font-bold bg-squazzle-button-bg-deep-green-color w-full py-4 rounded-lg mt-10 cursor-pointer"
            onClick={() => handleSignUp()}
          >
            Continue
          </button>
          <button
            type="button"
            className="text-squazzle-button-bg-deep-green-color text-sm lg:text-xl font-bold bg-white  border-2 border-squazzle-button-bg-deep-green-color w-full py-4 rounded-lg mt-5 cursor-pointer"
            onClick={() => navigate(NonAuthRoutes.landingPage)}
          >
            Cancel
          </button>
          <div className="grid place-items-center">
            <p className="text-squazzle-text-deep-grey1-color text-sm lg:text-base font-semibold mt-5">
              Already have an account?
              <a
                className="text-squazzle-button-bg-deep-green-color pl-[5px] cursor-pointer"
                href={NonAuthRoutes.login}
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="pt-[115px] md:pt-16 lg:pt-16 h-screen bg-white md:bg-squazzle-background-white-color lg:bg-squazzle-background-white-color max-[400px]-px-10 max-[640px]:px-20 max-[768px]:px-40 max-[1024px]:px-10 max-[1536px]:px-20 md:w-1/2 md:fixed md:z-[1] md:top-0 md:overflow-x-hidden md:right-0 lg:w-1/2 lg:fixed lg:z-[1] lg:top-0 lg:overflow-x-hidden lg:right-0">
          <nav
            className="bg-white fixed top-0 right-0 left-0 md:hidden lg:hidden"
            style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
          >
            <SquazzleMobileLogo className="my-2 max-[400px]-ml-10 max-[640px]:ml-20 max-[768px]:ml-40 max-[1024px]:ml-10 max-[1536px]:ml-20" />
          </nav>
          <h1 className="text-base lg:text-2xl font-[600] lg:font-bold text-squazzle-text-deep-green-color mb-2">
            Create a squazzle profile
          </h1>
          <p className="text-sm lg:text-xl text-squazzle-text-deep-grey1-color">
            It is quick and simple
          </p>
          <form className="mt-7" autoComplete="off">
            <div className="mb-4">
              <label htmlFor="first-name">
                <span className="text-squazzle-text-deep-grey1-color text-sm">
                  First Name
                  <span className="text-squazzle-text-error-red-color pl-[5px]">
                    *
                  </span>
                </span>
                <input
                  id="first-name"
                  type="text"
                  value={firstName}
                  placeholder="Mary"
                  className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm  lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="last-name">
                <span className="text-squazzle-text-deep-grey1-color text-sm">
                  Last Name
                  <span className="text-squazzle-text-error-red-color pl-[5px]">
                    *
                  </span>
                </span>
                <input
                  id="last-name"
                  type="text"
                  value={lastName}
                  placeholder="Doe"
                  className="block bg-white border border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                <span className="text-squazzle-text-deep-grey1-color text-sm">
                  Email Address
                  <span className="text-squazzle-text-error-red-color pl-[5px]">
                    *
                  </span>
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="marydoe@gmail.com"
                  className="block bg-white border border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                  onChange={(e) => validateEmail(e.target.value)}
                />
              </label>
            </div>
            {validEmail ? null : (
              <p className="text-squazzle-text-error-red-color text-xs font-semibold mb-6 mt-[6px]">
                Please enter a valid email address
              </p>
            )}
            <div className="mt-4">
              <label htmlFor="phone-number">
                <span className="text-squazzle-text-deep-grey1-color text-sm">
                  Phone Number
                  <span className="text-squazzle-text-error-red-color pl-[5px]">
                    *
                  </span>
                </span>
                <div className="flex">
                  <select
                    name="country-code"
                    id="country-code"
                    className="w-22 px-3 border border-y-squazzle-border-grey-color border-l-squazzle-border-grey-color border-r-white text-squazzle-placeholder-grey-color text-sm  lg:text-lg font-[400] rounded-tl-lg rounded-bl-lg h-[62px] mt-[6px] w-focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                  >
                    <option value="+234">+234</option>
                    <option value="+233">+233</option>
                    <option value="+235">+235</option>
                    <option value="+223">+223</option>
                  </select>
                  <input
                    id="phone-number"
                    type="tel"
                    value={phoneNumber}
                    placeholder="Number"
                    pattern="[0-9]{10}"
                    className="block bg-white border border-squazzle-border-grey-color border-l-white rounded-tr-lg rounded-br-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color after:content-[''] after:top-0"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </label>
            </div>
          </form>
          <button
            type="button"
            className="text-squazzle-button-font-deep-green-color text-sm lg:text-xl font-bold bg-squazzle-button-bg-light-green-color w-full py-4 rounded-lg mt-12 cursor-pointer"
            onClick={() => setFirstPageFilled(true)}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default signUp;
