import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/login");
  };

  return (
    <main className="min-h-screen">
      <div className="flex justify-end p-4 bg-squazzle-white-background-color">
        <button
          onClick={logOut}
          type="button"
          className="bg-squazzle-grey-text-color py-2 px-3 rounded-md text-squazzle-white-background-color"
        >
          Log out
        </button>
      </div>
    </main>
  );
}

export default Dashboard;
