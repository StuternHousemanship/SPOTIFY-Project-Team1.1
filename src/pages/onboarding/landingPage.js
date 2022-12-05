import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import logo from "../../logo.svg";
import "../../App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Landing Page - Squazzle";

    navigate(NonAuthRoutes.login);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo h-12" alt="logo" />
        <p className="font-bold mt-12 text-5xl"> A squatting platform </p>{" "}
        <p className="w-96 mt-3 text-lg">
          This platform allows people to accommodate others for an agreed period
          of time..{" "}
        </p>{" "}
        <button
          type="button"
          title="Sign Up"
          className="bg-red-500 text-xl h-12 px-8 mt-12 rounded font-bold cursor-pointer"
          onClick={() => navigate(NonAuthRoutes.signUp)}
        >
          SIGN UP NOW!
        </button>
        <button
          type="button"
          title="Login"
          className="bg-blue-500 text-xl h-12 px-16 mt-4 rounded font-bold cursor-pointer"
          onClick={() => navigate(NonAuthRoutes.login)}
        >
          LOGIN{" "}
        </button>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
