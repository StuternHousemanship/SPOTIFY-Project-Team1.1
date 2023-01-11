/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-else-return */
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { NonAuthRoutes } from "url";
import Cookies from "js-cookie";

function PrivateRoutes() {
  /** Defines if the token is authenticated or not */
  const isAuthenticated = () => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return !!(accessToken && refreshToken);
  };

  if (isAuthenticated()) {
    return <Outlet />;
  } else {
    return <Navigate to={NonAuthRoutes.login} replace />;
  }
}

export default PrivateRoutes;
