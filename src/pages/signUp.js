import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import { NonAuthRoutes } from "../url";

const signUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);

  /** handles show Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowReEnterPassword = () => {
    setShowReEnterPassword(!showReEnterPassword);
  };

  return (
    <div className="grid place-items-center bg-squazzle-background-grey-color py-70">
      <div
        className="py-12 px-20 box-border bg-white"
        style={{ width: "min(100vw, 609px)" }}
      >
        <h2 className="text-4xl font-bold text-squazzle-grey-text-color">
          Create Account
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-4">
          <label htmlFor="firstname" className="block">
            <span className="text-squazzle-grey-text-color text-base">
              First name
            </span>
            <input
              id="firstname"
              type="text"
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
          <label htmlFor="Mobile" className="block">
            <span className="text-squazzle-grey-text-color text-base">
              Mobile
            </span>
            <input
              id="mobile"
              type="tel"
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
          <label htmlFor="password" className="relative block">
            <span className="text-squazzle-grey-text-color text-base">
              Password
            </span>
            <input
              id="password"
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
              className="bg-squazzle-grey-text-color h-14 text-gray-100 rounded block w-full mt-1 mb-5"
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
        </div>
      </div>
    </div>
  );
};

export default signUp;
