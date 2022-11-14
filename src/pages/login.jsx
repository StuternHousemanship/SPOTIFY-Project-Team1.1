/* eslint-disable import/no-cycle */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import onboarding from "../api/onboarding";
import { NonAuthRoutes, AuthRoutes } from "../url";
import "../styles/Login.css";
import { ReactComponent as SquazzleDesktopLogo } from "../assets/svg/squazzle-desktop-logo.svg";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import squazzleBackground from "../assets/img/squazzle-login-background.png";

const login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeToggle, setEyeToggle] = useState(false);

  const handleEyeToggle = () => {
    setEyeToggle(!eyeToggle);
  };

  const resetEye = () => {
    if (eyeToggle) {
      setEyeToggle(!eyeToggle);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);
    onboarding.Login(email, password).then((response) => {
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
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
          <div className="text-black mt-6">
            <h1 className="text-4xl font-semibold">Welcome to Squazzle</h1>
            <p className="text-xl font-normal mt-3">
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

        <div className="mt-8 md:mt-0 py-3 px-10 md:p-0">
          <header>
            <h1 className="font-bold text-base md:text-4xl text-squazzle-grey-text-color mb-4">
              Welcome back!
            </h1>
            <p className="font-normal text-sm md:text-xl">
              We are thrilled to see you.
            </p>
          </header>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),

              password: Yup.string()
                .required("Password is required")
                .min(8, "Password is too short. Minimum of 8 characters.")
                .matches(
                  /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                  "Password must contain at least one number, one uppercase, one lowercase letter."
                ),
            })}
            onSubmit={(values, { resetForm }) => {
              // eslint-disable-next-line
              console.log(
                `Email:${values.email}, Password: ${values.password}`
              );
              resetForm({ values: "" });

              // reset-eye
              resetEye();
            }}
          >
            <Form
              onSubmit={() => handleLogin()}
              className="flex flex-col my-8 gap-4"
            >
              <section className="">
                <label htmlFor="email">
                  <span className="text-sm font-semibold">Email Address</span>
                  <span className="text-squazzle-text-error-red-color ml-[3px]">
                    *
                  </span>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="border border-squazzle-grey-text-color w-full py-3 px-2 rounded focus:outline-none hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <div className="text-squazzle-text-error-red-color text-sm">
                        &#x2757;{msg}
                      </div>
                    )}
                  </ErrorMessage>
                </label>
              </section>

              <section className="relative">
                <label htmlFor="password">
                  <span className="text-sm font-semibold">Password</span>
                  <span className="text-squazzle-text-error-red-color ml-[3px]">
                    *
                  </span>
                  <Field
                    type={eyeToggle ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="border border-squazzle-grey-text-color w-full py-3 px-2 rounded
                    hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <div className="text-squazzle-text-error-red-color text-sm">
                        &#x2757;{msg}
                      </div>
                    )}
                  </ErrorMessage>
                  <div id="password-toggle" className="absolute right-5 top-10">
                    <FontAwesomeIcon
                      icon={faEye}
                      className={eyeToggle ? "eye-active" : "eye"}
                      onClick={handleEyeToggle}
                    />

                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className={eyeToggle ? "eye-slash-active" : "eye-slash"}
                      onClick={handleEyeToggle}
                    />
                  </div>
                </label>
              </section>

              <div className="flex items-center justify-between">
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
                  className="underline text-sm md:text-lg text-squazzle-success-green-color font-normal"
                  onClick={() => navigate(NonAuthRoutes.forgotPassword)}
                >
                  Forgot Password
                </button>
              </div>

              <button
                type="submit"
                className="hidden md:block bg-squazzle-button-bg-deep-green-color w-full py-3 text-squazzle-white-background-color rounded-md font-bold text-lg"
                onClick={() => navigate(AuthRoutes.dashboard)}
              >
                Sign in
              </button>

              <button
                type="submit"
                className="block md:hidden bg-squazzle-button-bg-deep-green-color w-full py-3 text-squazzle-white-background-color rounded-md font-bold text-sm"
                onClick={() => navigate(AuthRoutes.dashboard)}
              >
                Continue
              </button>

              <button
                type="button"
                className="bg-squazzle-background-white-color font-bold text-sm md:text-lg w-full py-3 rounded-md text-squazzle-button-bg-deep-green-color border-2 border-squazzle-button-bg-deep-green-color"
                onClick={() => navigate(NonAuthRoutes.landingPage)}
              >
                Cancel
              </button>
            </Form>
          </Formik>

          <div className="flex justify-center">
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
