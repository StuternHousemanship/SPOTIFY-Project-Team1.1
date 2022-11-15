/** Authenticated URL Routes */
const AuthRoutes = {
  dashboard: "/dashboard",
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
  verifyEmail: "/verify-email",
  resetPassword: "/reset-password",
  alertResetPassword: "/alert-reset-password",
  emailVerificationSuccess: "email-verification-success",
};

export { AuthRoutes, NonAuthRoutes };
