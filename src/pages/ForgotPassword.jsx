/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { Formik, Field, Form, ErrorMessage } from "formik";
import { NonAuthRoutes } from "../url";
import mail from "../assets/img/mail.png";
import desktop from "../assets/img/desktop.png";
import onboarding from "../api/onboarding";

function forgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    // These logic clear error messages when page loads
    if (email.length < 1) {
      setIsEmailValid(true);
    }
  });

  const validateEmail = (userEmail) => {
    setEmail(userEmail);
    // eslint-disable-next-line no-useless-escape
    const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    if (regex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const displayEmailErrorText = () => {
    return (
      <p className="text-squazzle-text-error-red-color text-xs font-semibold mt-2">
        Please enter a valid email address
      </p>
    );
  };

  const handleGetCode = () => {
    onboarding.passwordCode(email).then((response) => {
      if (response.status === 200) {
        navigate(NonAuthRoutes.alertForgotPassword);
      }
    });
  };

  return (
    <div>
      <img src={desktop} className="App-logo h-9" alt="logo" />

      <main className="min-h-screen flex items-center justify-center bg-squazzle-background-white-color rounded-xl">
        <div className="flex flex-col w-full max-w-[620px] py-8 px-20 bg-white">
          <header>
            <img src={mail} alt="mail" className="h-12 justify-items-center" />
            <h1 className="font-bold text-4xl text-center text-squazzle-grey-text-color">
              Forgot Password
            </h1>
            <h3 className="text-sm md:text-lg py-4 text-center text-squazzle-grey-text-color">
              Enter your registered email address below to recieve password
              reset instructions.
            </h3>
          </header>

          <form className="mt-8">
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
                  type="text"
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="Email"
                  className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm  lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                  onChange={(e) => validateEmail(e.target.value)}
                />
              </label>
            </div>
            {isEmailValid ? null : displayEmailErrorText()}
          </form>

          <button
            type="submit"
            className="hidden md:block bg-squazzle-button-bg-deep-green-color w-full py-4 text-squazzle-white-background-color rounded-xl font-bold text-lg mt-12 mb-6"
            onClick={() => handleGetCode()}
          >
            Get code
          </button>

          <button
            type="submit"
            className="block md:hidden bg-squazzle-button-bg-deep-green-color w-full py-4 text-squazzle-white-background-color rounded-xl font-bold text-sm mt-8 mb-4"
            //
          >
            Continue
          </button>

          <button
            type="button"
            className="bg-squazzle-background-white-color font-bold text-sm md:text-lg w-full py-4 rounded-xl text-squazzle-button-bg-deep-green-color border-2 border-squazzle-button-bg-deep-green-color"
            onClick={() => navigate(NonAuthRoutes.dashboard)}
          >
            Cancel
          </button>

          {/* <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            // eslint-disable-next-line
            console.log(`Email:${values.email}`);
            resetForm({ values: "" });
          }}
        >
          <Form className="flex flex-col my-8 gap-4">
            <section className="">
              <label htmlFor="email" className="text-base font-normal">
                <span>Email</span>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="border border-squazzle-grey-text-color w-full py-3 px-2 rounded"
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <div className="text-red-700 text-sm">&#x2757;{msg}</div>
                  )}
                </ErrorMessage>
              </label>
            </section>
            <button
              type="submit"
              className="bg-squazzle-grey-text-color  w-full py-3 text-squazzle-white-background-color "
              onClick={() => navigate(NonAuthRoutes.alertForgotPassword)}
            >
              Continue
            </button>
          </Form>
        </Formik> */}
        </div>
      </main>
    </div>
  );
}

export default forgotPassword;
