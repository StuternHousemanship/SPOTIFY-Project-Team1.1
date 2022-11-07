import React from "react";

function Dashboard() {
  const logOut = () => {
    window.location = window.location.origin;
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
