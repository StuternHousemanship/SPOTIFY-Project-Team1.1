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
};
