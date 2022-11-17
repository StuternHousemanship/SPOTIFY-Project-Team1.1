/* eslint-disable import/no-cycle */
import { squazzleOnboarding } from "../config";

export default {
  /** Send a POST request to Sign Up Users */
  async SignUp(email, firstName, lastName, phoneNumber, password) {
    const data = {
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return squazzleOnboarding.post("/signUp", stringifiedData);
  },

  /** Send a POST request to Login Users */
  async Login(email, password) {
    const data = {
      email,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return squazzleOnboarding.post("/signIn", stringifiedData);
  },

  /** Send a POST request to verify users email verification code */
  async EnterEmailVerificationCode(emailVerificationCode) {
    const data = {
      code: emailVerificationCode,
    };
    const stringifiedData = JSON.stringify(data);

    return squazzleOnboarding.post("/activateAccount", stringifiedData);
  },

  /** Send a POST request to verify users password reset code */
  async EnterPasswordResetCode(
    passwordResetCode,
    newpassword,
    confirmNewPassword
  ) {
    const data = {
      code: passwordResetCode,
      password: newpassword,
      confirmPassword: confirmNewPassword,
    };
    const stringifiedData = JSON.stringify(data);

    return squazzleOnboarding.patch("/resetPassword", stringifiedData);
  },

  /** Send a POST request to verify users password reset code */
  async passwordCode(email) {
    const data = {
      email,
    };
    const stringifiedData = JSON.stringify(data);

    return squazzleOnboarding.patch("/forgotPassword", stringifiedData);
  },
};
