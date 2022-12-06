/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-escape */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import onboarding from "../../api/onboarding";
import { NonAuthRoutes, AuthRoutes } from "../../url";
import { ReactComponent as PasswordShow } from "../../assets/svg/password-eye-show-icon.svg";
import { ReactComponent as PasswordHide } from "../../assets/svg/password-eye-hide-icon.svg";
import { ReactComponent as SquazzleDesktopLogo } from "../../assets/svg/squazzle-desktop-logo.svg";
import { ReactComponent as SquazzleMobileLogo } from "../../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as LoadingIcon } from "../../assets/svg/loading-light-icon.svg";
import squazzleBackground from "../../assets/img/squazzle-login-background.png";

const login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [loginErrorText, setLoginErrorText] = useState("");
  const [isLoginError, setIsLoginError] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Login - Squazzle";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  useEffect(() => {
    // These logic clear error messages when page loads
    if (!email) {
      setIsEmailValid(false);
    }
  });

  /** handles show and hide Password text */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /** handles Validate Email input */
  const validateEmail = () => {
    setShowEmailError(true);
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
      <p
        className={
          isEmailValid
            ? "text-squazzle-success-green-color text-xs font-semibold mt-2"
            : "text-squazzle-text-error-red-color text-xs font-semibold mt-2"
        }
      >
        Please enter a valid email address
      </p>
    );
  };

  // handles remember me
  const handleRememberMe = () => {
    if (rememberMe) {
      window.localStorage.setItem("email", email);
      window.localStorage.setItem("password", password);
    }
  };

  /** handles login submit */
  const handleLogin = async (e) => {
    e.preventDefault();
    setButtonIsLoading(true);
    try {
      const response = await onboarding.Login(email, password);
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
        setButtonIsLoading(false);
        navigate(AuthRoutes.dashboard);
      }
    } catch (error) {
      setTimeout(() => {
        setButtonIsLoading(false);
      }, 1000);
      // console.error(error);
      const { error: errorMessage, email: errorEmail } = error.response.data;
      setLoginErrorText(errorMessage || errorEmail);
      setIsLoginError(true);
    }

    handleRememberMe();
  };

  return (
    <main className="min-h-screen grid md:grid-cols-2 grid-cols-1 font-sans">
      <section
        className="hidden md:block"
        style={{
          backgroundImage: `url(${squazzleBackground})`,
          backgroundSize: "cover",
          backgroundPositionY: "top",
          position: "fixed",
          width: "50%",
          height: "100vh",
        }}
      >
        <section
          className="text-squazzle-background-white-color py-6 px-20 h-[50vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 0), #016D71)",
          }}
        >
          <SquazzleDesktopLogo className="w-[173px] h-[53px] lg:w-[177px] lg:h-[57px]" />
          <div className="text-squazzle-text-deep-grey2-color mt-8">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              Welcome to Squazzle
            </h1>
            <p className="text-squazzle-text-deep-grey2-color text-lg lg:text-xl font-normal mt-[16px]">
              Lets help you find a home you 'll love
            </p>
          </div>
        </section>
      </section>
      <section className="md:absolute md:right-0 md:w-1/2 flex flex-col w-full min-h-screen bg-white md:bg-squazzle-background-white-color lg:md:bg-squazzle-background-white-color">
        <div className="block md:hidden my-4">
          <SquazzleMobileLogo className="my-2 ml-5 " />
        </div>
        <hr className="block md:hidden" />
        <div className="px-5 md:px-10 lg:px-20 py-8 md:py-12 lg:pt-[63px]">
          <header>
            <h1 className="font-bold text-base lg:text-4xl text-squazzle-grey-text-color mb-2 max-w-[530px]">
              {isLoginError
                ? "Oops! We can't sign you in at the moment"
                : "Welcome back!"}
            </h1>
            {isLoginError ? (
              <p className="font-normal text-squazzle-text-error-red-color text-sm lg:text-xl">
                {loginErrorText}
              </p>
            ) : (
              <p className="font-normal text-squazzle-text-deep-grey1-color text-sm lg:text-xl">
                We are thrilled to see you
              </p>
            )}
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
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="Email"
                  className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm  lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyUp={() => validateEmail()}
                />
              </label>
              {showEmailError ? displayEmailErrorText() : null}
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
                    className="absolute top-[49px] right-5 lg:top-[53px] lg:right-5"
                    onClick={() => handleShowPassword()}
                  />
                ) : (
                  <PasswordHide
                    className="absolute top-[48px] right-5 lg:top-[52px] lg:right-5"
                    onClick={() => handleShowPassword()}
                  />
                )}
              </label>
            </div>
            <div className="flex items-center justify-between mt-2">
              <label
                htmlFor="remember"
                className="text-squazzle-password-light-grey-color text-sm lg:text-lg font-normal"
              >
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  value={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="border-squazzle-checkbox-border-color border-2 accent-squazzle-button-bg-deep-green-color w-[12px] h-[12px] mr-[6px] lg:w-[16px] lg:h-[16px] lg:mr-[11px] "
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-sm lg:text-lg text-squazzle-success-green-color font-normal"
                onClick={() => navigate(NonAuthRoutes.forgotPassword)}
              >
                Forgot Password
              </button>
            </div>
          </form>
          <button
            type="submit"
            className="enabled md:flex md:align-middle md:justify-center hidden w-full py-[15px] lg:py-5 text-squazzle-button-bg-light-green-color bg-squazzle-button-bg-deep-green-color disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color rounded-xl font-bold text-sm lg:text-xl mt-12 mb-6 cursor-pointer"
            onClick={(e) => handleLogin(e)}
            disabled={!isEmailValid || !password}
          >
            {buttonIsLoading ? (
              <LoadingIcon className="suspense-loading-icon md:mt-0 lg:mt-1 mr-3" />
            ) : null}
            Sign in
          </button>
          <button
            type="submit"
            className="enabled flex align-middle justify-center md:hidden text-squazzle-button-bg-light-green-color bg-squazzle-button-bg-deep-green-color disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color w-full py-[15px] lg:py-5 rounded-xl font-bold text-sm mt-8 mb-4 cursor-pointer"
            onClick={(e) => handleLogin(e)}
            disabled={!isEmailValid || !password}
          >
            {buttonIsLoading ? (
              <LoadingIcon className="suspense-loading-icon mt-0 mr-3" />
            ) : null}
            Continue
          </button>
          <button
            type="button"
            className="bg-squazzle-background-white-color font-bold text-sm lg:text-xl w-full py-[15px] lg:py-5 rounded-xl text-squazzle-button-bg-deep-green-color border-2 border-squazzle-button-bg-deep-green-color"
            onClick={() => navigate(NonAuthRoutes.landingPage)}
          >
            Cancel
          </button>
          <div className="flex justify-center mt-8">
            <p>
              <span className="font-semibold text-sm lg:text-lg">
                New to squazzle account ?
              </span>
              <button
                type="button"
                className="ml-2 w-fit text-squazzle-success-green-color cursor-pointer font-semibold text-sm lg:text-lg"
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
