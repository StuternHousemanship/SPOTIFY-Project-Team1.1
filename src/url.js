/** Authenticated URL Routes */
const AuthRoutes = {
  dashboard: "/dashboard",
  // dashboardLandingPage: "/dashboardLandingPage",
  dashboardAccommodationDetails: "/dashboard/accommodation-details",
  dashboardManageAccount: "/dashboard/manage-account",
};

/** Non Authenticated URL Routes */
const NonAuthRoutes = {
  landingPage: "/",
  signUp: "/sign-up",
  login: "/login",
  forgotPassword: "/forgot-password",
  alertForgotPassword: "/alert-forgot-password",
  enterEmailVerificationCode: "/enter-email-verification-code",
  enterPasswordResetCode: "/enter-password-reset-code",
  resetPassword: "/reset-password",
  alertResetPassword: "/alert-reset-password",
  alertVerifyEmail: "/alert-verify-email",
  errorOnSignUp: "/error-on-sign-up",
  errorEmailVerification: "/error-email-verification",
};

export { AuthRoutes, NonAuthRoutes };
