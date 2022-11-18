/* eslint-disable no-useless-escape */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import onboarding from "../api/onboarding";
import { NonAuthRoutes, AuthRoutes } from "../url";
import { ReactComponent as PasswordShow } from "../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../assets/svg/password-eye-hide-icon.svg";
import { ReactComponent as SquazzleDesktopLogo } from "../assets/svg/squazzle-desktop-logo.svg";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import squazzleBackground from "../assets/img/squazzle-login-background.png";

const login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    // These logic clear error messages when page loads
    if (email.length < 1) {
      setIsEmailValid(true);
    }
  });

  /** handles show and hide Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /** handles Validate Email input */
  const validateEmail = (userEmail) => {
    setEmail(userEmail);
    // const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
    if (regex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  /** displays email error text */
  const displayEmailErrorText = () => {
    return (
      <p className="text-squazzle-text-error-red-color text-xs font-semibold mt-2">
        Please enter a valid email address
      </p>
    );
  };

  /** handles login submit */
  const handleLogin = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);
    onboarding.Login(email, password).then((response) => {
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
        navigate(AuthRoutes.dashboard);
      }
    });
  };

  return (
    <main className="min-h-screen grid md:grid-cols-2 grid-cols-1 font-sans">
      <section
        className="hidden md:block"
        style={{
          backgroundImage: `url(${squazzleBackground})`,
          backgroundSize: "cover",
          backgroundPositionY: "top",
        }}
      >
        <section
          className="text-squazzle-background-white-color py-8 px-10 h-[50vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 0), #016D71)",
          }}
        >
          <SquazzleDesktopLogo />
          <div className="text-squazzle-text-deep-grey2-color mt-6">
            <h1 className="text-4xl font-semibold">Welcome to Squazzle</h1>
            <p className="text-squazzle-text-deep-grey2-color text-xl font-normal mt-3">
              Lets help you find a home you&apos;ll love
            </p>
          </div>
        </section>
      </section>

      <section className="flex flex-col w-full p-0 md:p-10 min-h-screen">
        <div className="block md:hidden py-6 px-10">
          <SquazzleMobileLogo />
        </div>

        <hr className="block md:hidden" />

        <div className="mt-8 md:mt-16 py-3 px-10 md:p-0">
          <header>
            <h1 className="font-bold text-base md:text-4xl text-squazzle-grey-text-color mb-2">
              Welcome back!
            </h1>
            <p className="font-normal text-squazzle-text-deep-grey1-color text-sm md:text-xl">
              We are thrilled to see you.
            </p>
          </header>
          <form className="mt-8" onSubmit={() => handleLogin()}>
            <div>
              <label htmlFor="email">
                <span className="text-squazzle-text-deep-grey1-color text-sm font-[600]">
                  Email Address
                  <span className="text-squazzle-text-error-red-color pl-[5px]">
                    *
                  </span>
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="Email"
                  className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm  lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                  onChange={(e) => validateEmail(e.target.value)}
                  onKeyUp={(e) => validateEmail(e.target.value)}
                />
              </label>
              {isEmailValid ? null : displayEmailErrorText()}
            </div>
            <div className="mt-6">
              <label htmlFor="password" className="relative block">
                <span className="text-squazzle-text-deep-grey1-color text-sm font-[600]">
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
                    className="absolute top-[49px] right-5"
                    onClick={() => handleShowPassword()}
                  />
                ) : (
                  <PasswordHide
                    className="absolute top-[49px] right-5"
                    onClick={() => handleShowPassword()}
                  />
                )}
              </label>
            </div>
            <div className="flex items-center justify-between mt-2">
              <label
                htmlFor="remember"
                className="text-squazzle-password-light-grey-color text-sm md:text-lg font-normal"
              >
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="border-squazzle-checkbox-border-color border-2 accent-squazzle-button-bg-deep-green-color w-[12px] h-[12px] mr-[6px] lg:w-[16px] lg:h-[16px] lg:mr-[11px] "
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-sm md:text-lg text-squazzle-success-green-color font-normal"
                onClick={() => navigate(NonAuthRoutes.forgotPassword)}
              >
                Forgot Password
              </button>
            </div>
          </form>

          <button
            type="submit"
            className="hidden md:block bg-squazzle-button-bg-deep-green-color w-full py-2 text-squazzle-white-background-color rounded-md font-bold text-lg mt-12 mb-6"
            onClick={() => navigate(AuthRoutes.dashboard)}
          >
            Sign in
          </button>

          <button
            type="submit"
            className="block md:hidden bg-squazzle-button-bg-deep-green-color w-full py-4 text-squazzle-white-background-color rounded-xl font-bold text-sm mt-8 mb-4"
            onClick={() => handleLogin()}
          >
            Continue
          </button>

          <button
            type="button"
            className="bg-squazzle-background-white-color font-bold text-sm md:text-lg w-full py-4 rounded-xl text-squazzle-button-bg-deep-green-color border-2 border-squazzle-button-bg-deep-green-color"
            onClick={() => navigate(NonAuthRoutes.landingPage)}
          >
            Cancel
          </button>
          <div className="flex justify-center mt-8">
            <p>
              <span className="font-semibold text-sm md:text-lg">
                New to squazzle account?
              </span>
              <button
                type="button"
                className="ml-2 w-fit text-squazzle-success-green-color cursor-pointer font-semibold text-sm md:text-lg"
                onClick={() => navigate(NonAuthRoutes.signUp)}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default login;
