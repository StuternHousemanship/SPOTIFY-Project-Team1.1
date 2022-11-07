/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import VerifyEmail from "./pages/VerifyEmail";
import EnterEmailVerificationCode from "./pages/enterEmailVerificationCode";
import EnterPasswordResetCode from "./pages/enterPasswordResetCode";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import ForgotPassword from "./pages/ForgotPassword";
import AlertForgotPassword from "./pages/alertForgotPassword";
import ResetPassword from "./pages/resetPassword";
import AlertResetPassword from "./pages/alertResetPassword";
import Dashboard from "./pages/Dashboard";
import { NonAuthRoutes, AuthRoutes } from "./url";

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
            <p className="text-center"> Is Loading... </p>{" "}
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />
          <Route path={NonAuthRoutes.signUp} element={<SignUp />} />
          <Route path={NonAuthRoutes.login} element={<Login />} />
          <Route
            path={NonAuthRoutes.forgotPassword}
            element={<ForgotPassword />}
          />
          <Route
            path={NonAuthRoutes.resetPassword}
            element={<ResetPassword />}
          />
          <Route
            path={NonAuthRoutes.alertForgotPassword}
            element={<AlertForgotPassword />}
          />
          <Route
            path={NonAuthRoutes.alertResetPassword}
            element={<AlertResetPassword />}
          />
          <Route path={NonAuthRoutes.verifyEmail} element={<VerifyEmail />} />
          <Route
            path={NonAuthRoutes.enterEmailVerificationCode}
            element={<EnterEmailVerificationCode />}
          />
          <Route
            path={NonAuthRoutes.enterPasswordResetCode}
            element={<EnterPasswordResetCode />}
          />
          <Route path={AuthRoutes.dashboard} element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
