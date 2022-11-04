import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router-dom";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Login.css";
import { NonAuthRoutes } from "../url";

const login = () => {
  const navigate = useNavigate();
  const [eyeToggle, setEyeToggle] = useState(false);

  const handleEyeToggle = () => {
    setEyeToggle(!eyeToggle);
  };

  const resetEye = () => {
    if (eyeToggle) {
      setEyeToggle(!eyeToggle);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-full max-w-[620px] py-8 px-20">
        <header>
          <h1 className="font-bold text-4xl text-squazzle-grey-text-color">
            Log in
          </h1>
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
            console.log(`Email:${values.email}, Password: ${values.password}`);
            resetForm({ values: "" });

            // reset-eye
            resetEye();
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

            <section className="relative">
              <label htmlFor="password" className="text-base font-normal">
                <span>Password</span>
                <Field
                  type={eyeToggle ? "text" : "password"}
                  name="password"
                  id="password"
                  className="border border-squazzle-grey-text-color w-full py-3 px-2 rounded"
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <div className="text-red-700 text-sm">&#x2757;{msg}</div>
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

            <Link to="/forgotPassword" className="self-end underline">
              Forgot Password
            </Link>

            <button
              type="submit"
              className="bg-squazzle-grey-text-color w-full py-3 text-squazzle-white-background-color"
            >
              Continue
            </button>
          </Form>
        </Formik>
        <button
          type="button"
          className="bg-white text-base px-0 mx-0 text-squazzle-grey-text-color border-b border-squazzle-grey-text-color cursor-pointer"
          onClick={() => navigate(NonAuthRoutes.signUp)}
        >
          Back to login
        </button>
      </div>
    </main>
  );
};

export default login;
