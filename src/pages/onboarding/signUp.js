/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-empty-character-class */
/* eslint-disable no-useless-escape */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import countryCodeDropDown from "../../components/countryCode/countryCode";
import { ReactComponent as PasswordShow } from "../../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../../assets/svg/password-eye-hide-icon.svg";
import { ReactComponent as SquazzleDesktopLogo } from "../../assets/svg/squazzle-desktop-logo.svg";
import { ReactComponent as SquazzleMobileLogo } from "../../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as MobileReturnButton } from "../../assets/svg/return-button.svg";
import { ReactComponent as LoadingIcon } from "../../assets/svg/loading-light-icon.svg";
import onboarding from "../../api/onboarding";
import { NonAuthRoutes } from "../../url";
import backgroundimage from "../../assets/img/squazzle-background.png";
import ErrorOnSignUp from "../../components/successAndError/errorOnSignUp";

const signUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [number, setNumber] = useState("");
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [termsAndPolicy, setTermsAndPolicy] = useState(false);
  const [personalDataPageFilled, setPersonalDataPageFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasEightCharacters, setHasEightCharacters] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [matchFirstPassword, setMatchFirstPassword] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [isErrorOnSignUp, setIsErrorOnSignUp] = useState(false);
  const [signUpErrorText, setSignUpErrorText] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Sign Up - Squazzle";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  useEffect(() => {
    // These logic clear error messages when page loads
    if (!email) {
      setShowEmailError(false);
    }
    if (!password) {
      setIsPasswordValid(true);
    }
    if (!confirmPassword) {
      setShowConfirmPasswordError(false);
    }
  });

  /** ensures only numbers are inputed */
  const handleNumberInput = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setNumber(result);
  };

  /** handles onkeyUp for password input */
  const handleOnkeyUpForPasswordInput = () => {
    setIsPasswordValid(false);
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
  };

  /** handles onkeyUp for confirm password input */
  const handleOnkeyUpForConfirmPasswordInput = () => {
    setShowConfirmPasswordError(true);
    // checks that second password matches first
    if (password === confirmPassword) {
      setMatchFirstPassword(true);
    } else {
      setMatchFirstPassword(false);
    }
  };

  /** handles Validate Email input */
  const handleOnkeyUpForEmailInput = () => {
    setShowEmailError(true);
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  /** handles Validate Phone number input */
  const handleOnkeyUpForPhoneNumberInput = () => {
    setShowPhoneNumberError(true);
    const regex = /^[0-9]{10}$/;
    if (regex.test(number)) {
      setIsNumberValid(true);
    } else {
      setIsNumberValid(false);
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
  const handleSignUp = async (e) => {
    e.preventDefault();
    setButtonIsLoading(true);
    const phoneNumber = `${countryCode}${number}`;
    try {
      const response = await onboarding.SignUp(
        email,
        firstName,
        lastName,
        phoneNumber,
        password
      );
      if (response.status === 201) {
        localStorage.setItem("email", email);
        navigate(NonAuthRoutes.alertVerifyEmail);
      }
    } catch (error) {
      setTimeout(() => {
        setButtonIsLoading(false);
      }, 3000);
      // console.error(error);
      const { email: errorMessage } = error.response.data;
      setSignUpErrorText(errorMessage);
      setIsErrorOnSignUp(true);
    }
  };

  /** displays email error text */
  const displayEmailErrorText = () => {
    return (
      <p
        className={
          isEmailValid
            ? "text-squazzle-success-green-color text-xs font-semibold mb-6 mt-[6px]"
            : "text-squazzle-text-error-red-color text-xs font-semibold mb-6 mt-[6px]"
        }
      >
        Please enter a valid email address{" "}
      </p>
    );
  };

  /** displays email error text */
  const displayPhoneNumberErrorText = () => {
    return (
      <p
        className={
          isNumberValid && countryCode
            ? "text-squazzle-success-green-color text-xs font-semibold mb-6 mt-[6px]"
            : "text-squazzle-text-error-red-color text-xs font-semibold mb-6 mt-[6px]"
        }
      >
        Please enter both country code and 10 digit phone number{" "}
      </p>
    );
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
          * Must include one uppercase and one lowercase{" "}
        </p>{" "}
        <p
          className={
            hasEightCharacters
              ? "text-squazzle-success-green-color text-xs font-semibold"
              : "text-squazzle-border-error--red-color text-xs font-semibold"
          }
        >
          * Contain at least 8 characters{" "}
        </p>{" "}
        <p
          className={
            hasNumber || hasSymbol
              ? "text-squazzle-success-green-color text-xs font-semibold"
              : "text-squazzle-border-error--red-color text-xs font-semibold"
          }
        >
          * Contain a number or symbol{" "}
        </p>{" "}
      </div>
    );
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
        Passwords must match{" "}
      </p>
    );
  };

  /** displays personal data page */
  const displayPersonalDataPage = () => {
    return (
      <div className="pt-20 pb-10 md:pt-[48px] lg:pt-16 h-full bg-white md:bg-squazzle-background-white-color lg:bg-squazzle-background-white-color px-5 md:px-10 lg:px-20 md:w-1/2 md:fixed md:z-[1] md:top-0 md:overflow-x-hidden md:right-0 lg:w-1/2 lg:fixed lg:z-[1] lg:top-0 lg:overflow-x-hidden lg:right-0">
        <nav
          className="bg-white fixed top-0 right-0 left-0 md:hidden lg:hidden"
          style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
        >
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            <SquazzleMobileLogo className="my-2 ml-5 md:ml-20 lg:ml-20" />
          </button>{" "}
        </nav>{" "}
        <h1 className="text-base lg:text-2xl font-[600] lg:font-bold text-squazzle-text-deep-green-color mb-2">
          Create a squazzle profile{" "}
        </h1>{" "}
        <p className="text-sm lg:text-xl text-squazzle-text-deep-grey1-color">
          It is quick and simple{" "}
        </p>{" "}
        <form
          className="mt-7"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-4">
            <label htmlFor="first-name">
              <span className="text-squazzle-text-deep-grey1-color text-sm">
                First Name{" "}
                <span className="text-squazzle-text-error-red-color pl-[5px]">
                  *
                </span>{" "}
              </span>{" "}
              <input
                id="first-name"
                type="text"
                value={firstName}
                placeholder="First name"
                className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm  lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                onChange={(e) => setFirstName(e.target.value)}
              />{" "}
            </label>{" "}
          </div>{" "}
          <div className="mb-4">
            <label htmlFor="last-name">
              <span className="text-squazzle-text-deep-grey1-color text-sm">
                Last Name{" "}
                <span className="text-squazzle-text-error-red-color pl-[5px]">
                  *
                </span>{" "}
              </span>{" "}
              <input
                id="last-name"
                type="text"
                value={lastName}
                placeholder="Last name"
                className="block bg-white border border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                onChange={(e) => setLastName(e.target.value)}
              />{" "}
            </label>{" "}
          </div>{" "}
          <div>
            <label htmlFor="email">
              <span className="text-squazzle-text-deep-grey1-color text-sm">
                Email Address{" "}
                <span className="text-squazzle-text-error-red-color pl-[5px]">
                  *
                </span>{" "}
              </span>{" "}
              <input
                id="email"
                type="email"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="Email"
                className="block bg-white border border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={(e) => handleOnkeyUpForEmailInput(e)}
              />{" "}
            </label>{" "}
            {showEmailError ? displayEmailErrorText() : null}{" "}
          </div>{" "}
          <div className="mt-4">
            <label htmlFor="phone-number">
              <span className="text-squazzle-text-deep-grey1-color text-sm">
                Phone Number{" "}
                <span className="text-squazzle-text-error-red-color pl-[5px]">
                  *
                </span>{" "}
              </span>{" "}
              <div className="flex">
                <div>
                  <select
                    name="countryCode"
                    id="country-code"
                    value={countryCode}
                    pattern="+[0-9]{3}"
                    onChange={(e) => setCountryCode(e.target.value)}
                    className={
                      countryCode
                        ? "w-[80px] pl-3 border border-y-squazzle-border-grey-color border-l-squazzle-border-grey-color border-r-white text-squazzle-text-deep-grey2-color text-sm  lg:text-lg font-[400] rounded-tl-lg rounded-bl-lg h-[62px] mt-[6px] focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                        : "w-[80px] pl-3 border border-y-squazzle-border-grey-color border-l-squazzle-border-grey-color border-r-white text-squazzle-placeholder-grey-color text-sm  lg:text-lg font-[400] rounded-tl-lg rounded-bl-lg h-[62px] mt-[6px] focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                    }
                  >
                    {countryCodeDropDown()}{" "}
                  </select>{" "}
                </div>{" "}
                <input
                  id="phone-number"
                  type="tel"
                  value={number}
                  placeholder="Number"
                  pattern="[0-9]{10}"
                  className="block bg-white border border-squazzle-border-grey-color rounded-tr-lg rounded-br-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color after:content-[''] after:top-0"
                  onChange={(e) => handleNumberInput(e)}
                  onKeyUp={(e) => handleOnkeyUpForPhoneNumberInput(e)}
                />{" "}
              </div>{" "}
            </label>{" "}
          </div>{" "}
          {showPhoneNumberError ? displayPhoneNumberErrorText() : null}{" "}
        </form>{" "}
        <button
          type="button"
          className="enabled text-squazzle-button-bg-light-green-color bg-squazzle-button-bg-deep-green-color disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color text-sm lg:text-xl font-bold w-full py-4 rounded-xl mt-12 cursor-pointer"
          disabled={
            !firstName ||
            !lastName ||
            !isEmailValid ||
            !isNumberValid ||
            !countryCode
          }
          onClick={() => setPersonalDataPageFilled(true)}
        >
          Continue{" "}
        </button>{" "}
      </div>
    );
  };

  /** displays password page */
  const displayPasswordPage = () => {
    return (
      <div className="pt-[72px] pb-9 md:pt-[45px] lg:pt-10 h-full bg-white md:bg-squazzle-background-white-color lg:bg-squazzle-background-white-color px-5 md:px-10 lg:px-20 md:w-1/2 md:fixed md:z-[1] md:top-0 md:overflow-x-hidden md:right-0 lg:w-1/2 lg:fixed lg:z-[1] lg:top-0 lg:overflow-x-hidden lg:right-0">
        <nav
          className="bg-white fixed top-0 right-0 left-0 md:hidden lg:hidden"
          style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
        >
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            <SquazzleMobileLogo className="my-2 ml-5 md:ml-20 lg:ml-20" />
          </button>{" "}
        </nav>{" "}
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setPersonalDataPageFilled(false)}
        >
          <MobileReturnButton className="mb-4 lg:mb-5" />
        </button>{" "}
        <h1 className="text-base lg:text-2xl font-[600] lg:font-bold text-squazzle-text-deep-green-color mb-2">
          Create Password{" "}
        </h1>{" "}
        <p className="text-sm lg:text-xl text-squazzle-text-deep-grey1-color">
          Use a minimum of 8 characters, including uppercase letters, lowercase
          letters and a number.{" "}
        </p>{" "}
        <form
          className="mt-7"
          autoComplete="off"
          onSubmit={(e) => handleSignUp(e)}
        >
          <div>
            <label htmlFor="password" className="relative block">
              <span className="text-squazzle-text-deep-grey1-color text-sm">
                Password{" "}
                <span className="text-squazzle-text-error-red-color pl-[5px]">
                  *
                </span>{" "}
              </span>{" "}
              <input
                id="password"
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => handleOnkeyUpForPasswordInput(e)}
              />{" "}
              {showPassword ? (
                <PasswordShow
                  className="absolute top-[49px] right-5 lg:top-[53px] lg:right-5"
                  onClick={() => handleShowPassword()}
                />
              ) : (
                <PasswordHide
                  className="absolute top-[48px] right-5 lg:top-[52px] lg:right-5"
                  onClick={() => handleShowPassword()}
                />
              )}{" "}
            </label>{" "}
          </div>{" "}
          {isPasswordValid ? null : displayPasswordCriteria()}{" "}
          <div className="mt-4">
            <label htmlFor="confirmpassword" className="relative block">
              <span className="text-squazzle-text-deep-grey1-color text-sm">
                Confirm Password{" "}
                <span className="text-squazzle-text-error-red-color pl-[5px]">
                  *
                </span>{" "}
              </span>{" "}
              <input
                id="confirmpassword"
                value={confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                className="block bg-white border border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyUp={(e) => handleOnkeyUpForConfirmPasswordInput(e)}
              />{" "}
              {showConfirmPassword ? (
                <PasswordShow
                  className="absolute top-[49px] right-5 lg:top-[53px] lg:right-5"
                  onClick={() => handleShowConfirmPassword()}
                />
              ) : (
                <PasswordHide
                  className="absolute top-[48px] right-5 lg:top-[52px] lg:right-5"
                  onClick={() => handleShowConfirmPassword()}
                />
              )}{" "}
            </label>{" "}
            {showConfirmPasswordError
              ? displayConfirmPasswordErrorText()
              : null}{" "}
          </div>{" "}
          <div className="mt-4">
            <label>
              <input
                type="checkbox"
                id="terms-and-policy"
                value={termsAndPolicy}
                className="border-squazzle-checkbox-border-color border-2 accent-squazzle-button-bg-deep-green-color w-[12px] h-[12px] mr-[6px] lg:w-[16px] lg:h-[16px] lg:mr-[11px]"
                onClick={(e) => setTermsAndPolicy(e.target.checked)}
              />{" "}
              <span className="text-xs lg:text-base text-squazzle-terms-policy-grey-color">
                I confirm that I have read & agreed to Squazzle{" "}
                <span className="text-squazzle-button-bg-deep-green-color px-[5px] cursor-pointer">
                  Terms of Service{" "}
                </span>
                and{" "}
                <span className="text-squazzle-button-bg-deep-green-color pl-[5px] cursor-pointer">
                  Privacy Policy{" "}
                </span>
                .{" "}
              </span>{" "}
            </label>{" "}
          </div>{" "}
        </form>{" "}
        <button
          type="submit"
          className="enabled flex align-middle justify-center text-squazzle-button-bg-light-green-color bg-squazzle-button-bg-deep-green-color disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color text-sm lg:text-xl font-bold w-full py-4 rounded-xl mt-10 cursor-pointer"
          disabled={
            !firstName ||
            !lastName ||
            !email ||
            !number ||
            !countryCode ||
            !email ||
            !matchFirstPassword ||
            !termsAndPolicy
          }
          onClick={(e) => handleSignUp(e)}
        >
          {buttonIsLoading ? (
            <LoadingIcon className="suspense-loading-icon mr-3 lg:mt-1" />
          ) : null}
          Create account{" "}
        </button>{" "}
        <button
          type="button"
          className="text-squazzle-button-bg-deep-green-color text-sm lg:text-xl font-bold bg-white  border-2 border-squazzle-button-bg-deep-green-color w-full py-4 rounded-xl mt-5 cursor-pointer"
          onClick={() => navigate(NonAuthRoutes.landingPage)}
        >
          Cancel{" "}
        </button>{" "}
        <div className="grid place-items-center">
          <p className="text-squazzle-text-deep-grey1-color text-sm lg:text-base font-semibold mt-5">
            Already have an account ?
            <a
              className="text-squazzle-button-bg-deep-green-color pl-[5px] cursor-pointer"
              href={NonAuthRoutes.login}
            >
              Sign in
            </a>{" "}
          </p>{" "}
        </div>{" "}
      </div>
    );
  };

  /** displays squazzle app description and logo on the left-hand side of the page */
  const displaySquazzleDescriptionAndLogo = () => {
    return (
      <div
        className="pt-6 px-10 lg:px-16 h-full w-1/2 fixed z-[1] top-0 overflow-x-hidden left-0 hidden md:block lg:block"
        style={{
          background: `linear-gradient(0.6deg, rgba(255, 255, 255, 0) 5.09%, #016D71 84.76%),url(${backgroundimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => navigate(NonAuthRoutes.login)}
        >
          <SquazzleDesktopLogo className="w-[173px] h-[53px] lg:w-[177px] lg:h-[57px]" />
        </button>{" "}
        <h1 className="mt-8 text-3xl lg:text-4xl text-squazzle-background-white-color font-[600]">
          Find that perfect home with Squazzle.{" "}
        </h1>{" "}
        <p className="mt-[16px] text-white text-xl lg:text-2xl font-[400] max-w-lg">
          We 'll get you set up so you can check out affordable housing{" "}
        </p>{" "}
      </div>
    );
  };

  return (
    <div>
      {isErrorOnSignUp ? (
        <ErrorOnSignUp errorText={signUpErrorText} />
      ) : (
        <div className="font-sans">
          {" "}
          {displaySquazzleDescriptionAndLogo()}{" "}
          {personalDataPageFilled
            ? displayPasswordPage()
            : displayPersonalDataPage()}{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default signUp;
