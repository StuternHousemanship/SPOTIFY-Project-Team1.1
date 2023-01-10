/* eslint-disable import/no-cycle */
import { squazzleApi } from "../config";

export default {
  async ViewProfile() {
    return squazzleApi.post("/viewProfile");
  },

  async EditProfile(
    // userFirstName,
    // userLastName
    userOccupation
    // UserNinToNumber,
    // userAboutYou
  ) {
    const data = {
      // firstName: userFirstName,
      // lastName: userLastName,
      occupation: userOccupation,
      // NIN: UserNinToNumber,
      // description: userAboutYou,
    };

    const stringifiedData = JSON.stringify(data);

    return squazzleApi.patch("/editProfile", stringifiedData);
  },

  async LogOut() {
    return squazzleApi.delete("/logOut");
  },
};
