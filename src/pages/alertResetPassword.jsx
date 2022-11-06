import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";

function alertResetPassword() {
  const navigate = useNavigate();
  return (
    <div className=" h-screen grid place-items-center bg-squazzle-background-grey-color py-60">
      <div
        className="py-12 px-20 box-border bg-white"
        style={{ width: "min(100vw, 609px)" }}
      >
        <h2 className="text-4xl font-bold text-squazzle-grey-text-color">
          Account Recovered!
        </h2>
        <div className="py-10 px-0">
          You have successfully confirmed and recovered your account!
        </div>
        <div>
          <button
            type="submit"
            className="bg-squazzle-grey-text-color  w-full py-3 text-squazzle-white-background-color "
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
export default alertResetPassword;
