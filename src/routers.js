/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";

const LandingPage = React.lazy(() => import("./pages/landingPage"));
const SignUp = React.lazy(() => import("./pages/signUp"));
const Login = React.lazy(() => import("./pages/login"));
const EnterEmailVerificationCode = React.lazy(() =>
  import("./pages/enterEmailVerificationCode")
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
const AlertVerifyEmail = React.lazy(() => import("./pages/alertVerifyEmail"));
const EmailVerificationSuccess = React.lazy(() =>
  import("./pages/emailVerificationSuccess")
);
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const ErrorSignUp = React.lazy(() => import("./pages/errorSignUp"));

const ErrorEmailVerification = React.lazy(() =>
  import("./pages/errorEmailVerification")
);

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-[500px]">
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
          <Route
            path={`${NonAuthRoutes.enterEmailVerificationCode}/:verificationCode`}
            element={<EnterEmailVerificationCode />}
          />
          <Route
            path={`${NonAuthRoutes.enterPasswordResetCode}/:resetCode`}
            element={<EnterPasswordResetCode />}
          />
          <Route
            path={NonAuthRoutes.alertVerifyEmail}
            element={<AlertVerifyEmail />}
          />
          <Route
            path={NonAuthRoutes.emailVerificationSuccess}
            element={<EmailVerificationSuccess />}
          />
          <Route path={AuthRoutes.dashboard} element={<Dashboard />} />
          <Route path={NonAuthRoutes.errorSignUp} element={<ErrorSignUp />} />
          <Route
            path={NonAuthRoutes.errorEmailVerification}
            element={<ErrorEmailVerification />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
