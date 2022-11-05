import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { NonAuthRoutes } from "../url";

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-full max-w-[620px] py-8 px-20">
        <header>
          <h1 className="font-bold text-4xl text-squazzle-grey-text-color">
            Forgot Password
          </h1>
        </header>

        <Formik
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
        </Formik>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-white w-fit text-base py-0 text-squazzle-grey-text-color border-b border-squazzle-grey-text-color cursor-pointer"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            Back to login
          </button>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
