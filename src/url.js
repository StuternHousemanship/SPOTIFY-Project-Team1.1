/** Authenticated URL Routes */
const AuthRoutes = {
  dashboard: "/dashboard",
  dashboardLandingPage: "/dashboardLandingPage",
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
  emailVerificationSuccess: "/email-verification-success",
  alertVerifyEmail: "/alert-verify-email",
  errorSignUp: "/error-sign-up",
  errorEmailVerification: "/error-email-verification",
};

export { AuthRoutes, NonAuthRoutes };
