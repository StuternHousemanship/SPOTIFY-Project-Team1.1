/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import { NonAuthRoutes } from "../url";

const resetPassword = () => {
  const navigate = useNavigate();
  const [passwordStrong, setPasswordStrong] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterNewPassword, setShowReEnterNewPassword] = useState(false);
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
  const handleShowReEnterNewPassword = () => {
    setShowReEnterNewPassword(!showReEnterNewPassword);
  };
  return (
    <div className="h-screen grid place-items-center bg-squazzle-background-grey-color py-70 max-[640px]:bg-white">
      <div
        className="py-12 px-20 box-border bg-white max-[640px]:px-14"
        style={{ width: "min(100vw, 609px)" }}
      >
        <h2 className="text-4xl font-bold text-squazzle-grey-text-color mb-10">
          Reset password
        </h2>

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
        <label htmlFor="password" className="relative block mt-[26px]">
          <span className="text-squazzle-grey-text-color text-base">
            Re-enter new password
          </span>
          <input
            id="re-enter-password"
            type={showReEnterNewPassword ? "text" : "password"}
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
          {showReEnterNewPassword ? (
            <PasswordShow
              className="absolute top-11 right-4"
              onClick={() => handleShowReEnterNewPassword()}
            />
          ) : (
            <PasswordHide
              className="absolute top-11 right-4"
              onClick={() => handleShowReEnterNewPassword()}
            />
          )}
        </label>

        <button
          type="submit"
          className="bg-squazzle-grey-text-color  w-full py-3 text-squazzle-white-background-color mt-6 "
          onClick={() => navigate(NonAuthRoutes.alertResetPassword)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default resetPassword;
