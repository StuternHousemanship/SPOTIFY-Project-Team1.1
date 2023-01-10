/* eslint-disable import/no-cycle */
/* eslint-disable no-else-return */
/* eslint-disable camelcase */
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import moment from "moment";
import { NonAuthRoutes } from "./url";

const TokenValidate = async () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) return navigate(NonAuthRoutes.login);

  let accessTokenExpireTime;

  try {
    // extracting the token's expiry time with jwt_decode plugin
    accessTokenExpireTime = jwt_decode(accessToken).exp;
  } catch (error) {
    return navigate(NonAuthRoutes.login);
  }

  if (moment.unix(accessTokenExpireTime) - moment(Date.now()) < 10000) {
    // generating new accessToken
    let refreshTokenExpireTime;

    try {
      refreshTokenExpireTime = jwt_decode(refreshToken).exp;
    } catch (error) {
      return navigate(NonAuthRoutes.login);
    }

    if (moment.unix(refreshTokenExpireTime) - moment(Date.now()) > 10000) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line consistent-return
        const email = localStorage.getItem("email");
        axios
          .post("https://squazzle.up.railway.app/api/v1/refresh", {
            refreshToken,
            email,
          })
          .then((response) => {
            if (!response.data.accessToken) {
              // the execution will never reach in this block, and if it did, it could be some backend issue.
              // eslint-disable-next-line no-console
              console.log("refresh token is gone");
              navigate(NonAuthRoutes.login);
            } else {
              const isAccessToken = response.data.accessToken;
              const isRefreshToken = response.data.refreshToken;
              Cookies.set("accessToken", isAccessToken);
              localStorage.setItem("refreshToken", isRefreshToken);

              resolve(accessToken);
            }
          });
      });
    } else {
      // refreshToken expired
      Cookies.remove("accessToken");
      localStorage.removeItem("token");
      navigate(NonAuthRoutes.login);
      // eslint-disable-next-line no-console
      console.log("Your session has expired, please login again.");
      // eslint-disable-next-line no-alert
      alert("Your session has expired, please login again.");
    }
    return accessToken;
  } else {
    return accessToken;
  }
};
export default TokenValidate;
