import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SquazzleMobileLogo } from "../../assets/svg/squazzle-mobile-logo.svg";
import { NonAuthRoutes } from "../../url";

const alertPageNavigation = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="bg-white fixed top-0 right-0 left-0 py-2 pl-5 sm:h-12 sm:pl-5 sm:py-2 md:h-[60px] md:pl-[70px] md:py-[10px] lg:h-[80px] lg:pl-[86px] lg:py-[10px]"
      style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
    >
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => navigate(NonAuthRoutes.login)}
      >
        <SquazzleMobileLogo className=" md:h-10 md:w-[158.81px] lg:h-14 lg:w-[222.33px]" />
      </button>
    </nav>
  );
};

export default alertPageNavigation;
