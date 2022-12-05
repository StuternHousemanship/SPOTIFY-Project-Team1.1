/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";

const LandingPage = React.lazy(() => import("./pages/onboarding/landingPage"));
const SignUp = React.lazy(() => import("./pages/onboarding/signUp"));
const Login = React.lazy(() => import("./pages/onboarding/login"));
const EnterEmailVerificationCode = React.lazy(() =>
  import("./pages/onboarding/enterEmailVerificationCode")
);
const EnterPasswordResetCode = React.lazy(() =>
  import("./pages/onboarding/enterPasswordResetCode")
);
const ForgotPassword = React.lazy(() =>
  import("./pages/onboarding/forgotPassword")
);
const AlertForgotPassword = React.lazy(() =>
  import("./pages/onboarding/alertForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("./pages/onboarding/resetPassword")
);
const AlertResetPassword = React.lazy(() =>
  import("./pages/onboarding/alertResetPassword")
);
const AlertVerifyEmail = React.lazy(() =>
  import("./pages/onboarding/alertVerifyEmail")
);

const AlertVerificationSuccess = React.lazy(() =>
  import("./pages/onboarding/alertVerificationSuccess")
);

const DashboardLandingPage = React.lazy(() =>
  import("./pages/dashboard/dashboardLandingPage")
);
const DashboardAccommodationDetails = React.lazy(() =>
  import("./pages/dashboard/accommodationDetails")
);
const DashboardManageAccount = React.lazy(() =>
  import("./pages/dashboard/dashboardManageAccount")
);
const Profile = React.lazy(() => import("./pages/dashboard/profile"));

const EditProfile = React.lazy(() => import("./pages/dashboard/editProfile"));

const ListedAccommodations = React.lazy(() =>
  import("./pages/dashboard/listedAccommodations")
);

const AddNewListing = React.lazy(() =>
  import("./pages/dashboard/addNewListing")
);

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-[300px]">
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
            path={NonAuthRoutes.alertVerificationSuccess}
            element={<AlertVerificationSuccess />}
          />
          <Route
            path={AuthRoutes.dashboard}
            element={<DashboardLandingPage />}
          />
          <Route
            path={AuthRoutes.dashboardAccommodationDetails}
            element={<DashboardAccommodationDetails />}
          />

          <Route
            path={AuthRoutes.dashboardManageAccount}
            element={<DashboardManageAccount />}
          />

          <Route path={AuthRoutes.profile} element={<Profile />} />

          <Route path={AuthRoutes.editProfile} element={<EditProfile />} />
          <Route
            path={AuthRoutes.listedAccommodations}
            element={<ListedAccommodations />}
          />
          <Route path={AuthRoutes.addNewListing} element={<AddNewListing />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
