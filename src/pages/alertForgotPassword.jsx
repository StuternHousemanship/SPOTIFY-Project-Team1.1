import React from "react";

function alertForgotPassword() {
  return (
    <div className="grid place-items-center bg-squazzle-background-grey-color py-60">
      <div
        className="py-12 px-20 box-border bg-white"
        style={{ width: "min(100vw, 609px)" }}
      >
        <h2 className="text-4xl font-bold text-squazzle-grey-text-color">
          Forgot Password
        </h2>
        <div className="py-10 px-0">
          Kindly go to your email or spam folder to confirm and change your
          password.
        </div>
        <div>
          <button
            type="button"
            className="bg-squazzle-grey-text-color w-full py-3 text-squazzle-white-background-color"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
export default alertForgotPassword;
