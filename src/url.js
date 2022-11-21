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
  resetPassword: "/reset-password",
  alertResetPassword: "/alert-reset-password",
  emailVerificationSuccess: "/email-verification-success",
  verifyEmail: "/verify-email",
  errorSignUp: "/error-sign-up",
};

export { AuthRoutes, NonAuthRoutes };
