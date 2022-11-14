// /* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import axios from "axios";
import Cookies from "js-cookie";
// eslint-disable-next-line import/no-cycle
import TokenValidate from "./tokenvalidate";

/** Base Url for api PRODUCTION */
// const apiUrl = "https://squazzle.beargaze.com/";

/** Base Url for Images STAGING */
const apiUrl = "https://squazzle.beargaze.com/api";

/** creating an Axios Base Url for all Onboarding Request */
const squazzleOnboarding = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// JWT DECODE SETUP and Onboarding Request Interceptor
const squazzleApi = axios.create({
  baseURL: apiUrl,
});
squazzleApi.interceptors.request.use(
  async (config) => {
    if (config.url.includes("/signIn")) return config;
    if (config.url.includes("/refresh-token")) return config;

    TokenValidate();
    config.headers.Authorization = `${Cookies.get("accessToken")}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { squazzleOnboarding, squazzleApi };
