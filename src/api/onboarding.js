/* eslint-disable import/no-cycle */
import { squazzleOnboarding } from "../config";

export default {
  /** Send a POST request to Sign Up Users */
  async SignUp(firstName, lastName, email, phoneNumber, password) {
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return squazzleOnboarding.post("/users/signUp", stringifiedData);
  },

  /** Send a POST request to Login Users */
  async Login(email, password) {
    const data = {
      email,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return squazzleOnboarding.post("/users/login", stringifiedData);
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
};
