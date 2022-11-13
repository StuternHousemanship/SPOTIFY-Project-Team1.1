import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";

function dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    navigate(NonAuthRoutes.login);
  };

  return (
    <main className="min-h-screen">
      <div className="flex justify-end p-4 bg-squazzle-white-background-color">
        <button
          onClick={() => logout()}
          type="button"
          className="bg-squazzle-grey-text-color py-2 px-3 rounded-md text-squazzle-white-background-color"
        >
          Log out
        </button>
      </div>
    </main>
  );
}

export default dashboard;
