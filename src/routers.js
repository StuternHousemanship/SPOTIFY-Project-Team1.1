/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";

const LandingPage = React.lazy(() => import("./pages/landingPage"));
const SignUp = React.lazy(() => import("./pages/signUp"));
const Login = React.lazy(() => import("./pages/login"));
const VerifyEmail = React.lazy(() => import("./pages/verifyEmail"));
const EnterEmailVerificationCode = React.lazy(() =>
  import("./pages/enterPasswordResetCode")
);
const EnterPasswordResetCode = React.lazy(() =>
  import("./pages/enterPasswordResetCode")
);
const ForgotPassword = React.lazy(() => import("./pages/forgotPassword"));
const AlertForgotPassword = React.lazy(() =>
  import("./pages/alertForgotPassword")
);
const ResetPassword = React.lazy(() => import("./pages/resetPassword"));
const AlertResetPassword = React.lazy(() =>
  import("./pages/alertResetPassword")
);
const Dashboard = React.lazy(() => import("./pages/dashboard"));

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
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
