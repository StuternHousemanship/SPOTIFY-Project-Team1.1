import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import desktop from "../assets/img/desktop.png";
import mail from "../assets/img/mail.png";

function alertForgotPassword() {
  const navigate = useNavigate();
  return (
    <div>
      <img src={desktop} className="App-logo h-9" alt="logo" />

      <main className="min-h-screen flex items-center justify-center bg-squazzle-background-white-color rounded-xl">
        <div className="flex flex-col w-full max-w-[620px] py-8 px-20 bg-white rounded-xl">
          <header>
            <img
              src={mail}
              alt="mail"
              className="h-12 ml-12 py-6 items-center"
            />
            <h1 className="font-bold text-4xl text-center text-squazzle-grey-text-color">
              Email has been sent
            </h1>
            <h3 className="text-sm md:text-lg py-4 text-center text-squazzle-grey-text-color">
              Please check your inbox and click on the recieved link to reset
              password
            </h3>
          </header>
          <button
            type="submit"
            className="hidden md:block bg-squazzle-button-bg-deep-green-color w-full py-4 text-squazzle-white-background-color rounded-md font-bold text-lg mt-12 mb-6"
            onClick={() => navigate(NonAuthRoutes.alertForgotPassword)}
          >
            Get a reset link
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
            Resend link
          </button>
        </div>
      </main>
    </div>
  );
}
export default alertForgotPassword;
