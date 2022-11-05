/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import validator from "validator";
import "react-phone-input-2/lib/style.css";
import Cookies from "js-cookie";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import onboarding from "../api/onboarding";
import { NonAuthRoutes } from "../url";

const signUp = () => {
  const navigate = useNavigate();
  const [passwordStrong, setPasswordStrong] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  /** handles password validation and password state */
  const handlePasswordOnChange = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPasswordStrong(true);
    } else {
      setPasswordStrong(false);
    }

    setPassword(value);
  };

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /** handles show Re-enter Password text */
  const handleShowReEnterPassword = () => {
    setShowReEnterPassword(!showReEnterPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);
    navigate(NonAuthRoutes.verifyEmail);
    onboarding
      .SignUp(firstName, lastName, email, phoneNumber, password)
      .then((response) => {
        if (response.status === 200) {
          const accessToken = response.access_token;
          const refreshToken = response.refresh_token;
          Cookies.set("accessToken", accessToken);
          localStorage.setItem("token", refreshToken);
        }
      });
  };

  return (
    <div className="grid place-items-center bg-squazzle-background-grey-color py-70 max-[640px]:bg-white">
      <div
        className="py-12 px-20 box-border bg-white max-[640px]:px-14"
        style={{ width: "min(100vw, 609px)" }}
      >
        <h2 className="text-4xl font-bold text-squazzle-grey-text-color">
          Create Account
        </h2>
        <form
          onSubmit={() => handleSignUp()}
          className="grid grid-cols-1 gap-6 mt-4"
        >
          <label htmlFor="firstname" className="block">
            <span className="text-squazzle-grey-text-color text-base">
              First name
            </span>
            <input
              id="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="
                mt-1
                h-14
                px-2.5
                py-1.5
                block
                w-full
                rounded
                border
              border-squazzle-grey-text-color
                focus:outline-none
                "
              required
            />
          </label>
          <label htmlFor="lastname" className="block">
            <span className="text-squazzle-grey-text-color text-base">
              Last name
            </span>
            <input
              id="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="
                mt-1
                h-14
                px-2.5
                py-1.5
                block
                w-full
                rounded
                border
              border-squazzle-grey-text-color
                focus:outline-none
                "
              required
            />
          </label>
          <label htmlFor="email" className="block">
            <span className="ttext-squazzle-grey-text-color text-base">
              Email
            </span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                mt-1
                h-14
                px-2.5
                py-1.5
                block
                w-full
                rounded
                border
              border-squazzle-grey-text-color
                focus:outline-none
                "
              required
            />
          </label>
          <label htmlFor="mobile" className="relative block">
            <span className="text-squazzle-grey-text-color text-base">
              Mobile
            </span>
            <PhoneInput
              country="ng"
              inputProps={{
                id: "mobile",
                required: true,
              }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              containerStyle={{
                marginTop: "4px",
              }}
              inputStyle={{
                width: "100%",
                height: "3.5rem",
                border: "1px solid #424242",
              }}
              buttonStyle={{
                border: "1px solid #424242",
              }}
            />
          </label>
          <label htmlFor="password" className="relative block">
            <span className="text-squazzle-grey-text-color text-base">
              Password
            </span>
            <input
              id="password"
              value={password}
              type={showPassword ? "text" : "password"}
              className="
                mt-1
                h-14
                px-2.5
                py-1.5
                block
                w-full
                rounded
                border
              border-squazzle-grey-text-color
                focus:outline-none
                "
              required
              onChange={(e) => handlePasswordOnChange(e.target.value)}
            />
            {showPassword ? (
              <PasswordShow
                className="absolute top-11 right-4"
                onClick={() => handleShowPassword()}
              />
            ) : (
              <PasswordHide
                className="absolute top-11 right-4"
                onClick={() => handleShowPassword()}
              />
            )}
          </label>
          {passwordStrong ? null : (
            <p className="text-rose-700 border border-rose-700 text-center rounded">
              Not strong enough
            </p>
          )}
          <label htmlFor="password" className="relative block">
            <span className="text-squazzle-grey-text-color text-base">
              Re-enter password
            </span>
            <input
              id="re-enter-password"
              type={showReEnterPassword ? "text" : "password"}
              className="
                mt-1
                h-14
                px-2.5
                py-1.5
                block
                w-full
                rounded
                border
              border-squazzle-grey-text-color
                focus:outline-none
                "
              required
            />
            {showReEnterPassword ? (
              <PasswordShow
                className="absolute top-11 right-4"
                onClick={() => handleShowReEnterPassword()}
              />
            ) : (
              <PasswordHide
                className="absolute top-11 right-4"
                onClick={() => handleShowReEnterPassword()}
              />
            )}
          </label>
          <div className="text-center">
            <button
              type="button"
              onClick={handleSignUp}
              className="bg-squazzle-grey-text-color h-14 text-white text-xl rounded block w-full mt-1 mb-5"
            >
              Continue
            </button>
            <button
              type="button"
              className="bg-white text-base py-0 text-squazzle-grey-text-color border-b border-squazzle-grey-text-color cursor-pointer"
              onClick={() => navigate(NonAuthRoutes.login)}
            >
              Log into existing account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signUp;
