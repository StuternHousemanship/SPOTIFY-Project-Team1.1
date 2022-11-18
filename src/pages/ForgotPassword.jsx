/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SquazzleMobileLogo } from "../assets/svg/squazzle-mobile-logo.svg";
import { NonAuthRoutes } from "../url";
import { ReactComponent as MailIcon } from "../assets/svg/mail-icon.svg";
import onboarding from "../api/onboarding";

function forgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    // These logic clear error messages when page loads
    if (email.length < 1) {
      setIsEmailValid(true);
    }
  });

  const validateEmail = (userEmail) => {
    setEmail(userEmail);
    // eslint-disable-next-line no-useless-escape
    const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    if (regex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const displayEmailErrorText = () => {
    return (
      <p className="text-squazzle-text-error-red-color text-xs font-semibold mt-2">
        Please enter a valid email address
      </p>
    );
  };

  const handleGetCode = () => {
    navigate(NonAuthRoutes.alertForgotPassword);
    onboarding.passwordCode(email).then((response) => {
      if (response.status === 200) {
        //
      }
    });
  };

  return (
    <div className="font-sans grid place-items-center h-screen bg-squazzle-background-white-color max-[640px]:bg-white">
      <nav
        className="bg-white fixed top-0 right-0 left-0 py-2 pl-5 lg:py-2 lg:pl-[86px]"
        style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
      >
        <SquazzleMobileLogo className="h-8 w-[146.33px] lg:h-14 lg:w-[222.33px]" />
      </nav>
      <div
        className="grid justify-center md:w-[400px] lg:w-[500px] mt-10 lg:mt-20 py-7 lg:py-5 px-5 lg:px-10 box-border bg-white text-center"
        style={{ width: "min(100vw, 609px)" }}
      >
        <div className="mt-0 mb-4 lg:mt-2 lg:mb-2 grid place-items-center">
          <MailIcon className="h-[68px] w-[68px] lg:h-[88px] lg:w-[88px]" />
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold text-squazzle-grey-text-color mb-7">
          Password reset request
        </h2>
        <p className="font-normal text-sm lg:text-lg max-w-[420px] text-squazzle-text-deep-grey1-color">
          Enter your registered email address below to recieve the password
          reset code
        </p>
        <form className="text-left mt-8">
          <div>
            <label htmlFor="email">
              <span className="text-squazzle-text-deep-grey1-color text-sm font-[600]">
                Email Address
              </span>
              <input
                id="email"
                type="text"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="zharadoe@gmail.com"
                className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm  lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                onChange={(e) => validateEmail(e.target.value)}
              />
            </label>
          </div>
          {isEmailValid ? null : displayEmailErrorText()}
          <button
            type="submit"
            className=" bg-squazzle-button-bg-deep-green-color w-full py-4 text-squazzle-white-background-color rounded-xl font-bold text-sm lg:text-xl mt-8 lg:mt-12"
            onClick={() => handleGetCode()}
          >
            Get a reset code
          </button>
        </form>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-white text-sm lg:text-xl font-bold w-full border-2 rounded-xl border-squazzle-button-bg-deep-green-color h-12 lg:h-16 text-squazzle-button-bg-deep-green-color cursor-pointer mt-4 lg:mt-6 mb-3 lg:mb-2"
            onClick={() => navigate(NonAuthRoutes.login)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    // <div className="font-sans">
    //   <SquazzleMobileLogo className="h-8 md:h-14 lg:h-14 w-[146.33px] md:w-[222.22px] lg:w-[222.33px] my-2 md:my-5 lg:my-5 ml-5 md:ml-[86px] lg:ml-[86px]" />

    //   <main className="min-h-screen flex justify-center bg-white md:bg-squazzle-background-white-color rounded-xl">
    //     <div className="flex flex-col max-w-[620px] py-0 px-5 md:px-10 lg:px-10 bg-white">
    //       <header className="grid place-items-center ">
    //         <img src={mail} alt="mail" className="h-12 justify-items-center" />
    //         <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl text-center text-squazzle-grey-text-color mt-8">
    //           Forgot Password?
    //         </h1>
    //         <h3 className="text-sm md:text-lg lg:text-lg py-4 max-w-[420px]text-center text-squazzle-grey-text-color mt-4 md:mt-[24px] lg:mt-[24px]">
    //           Enter your registered email address below to recieve the password
    //           reset code
    //         </h3>
    //       </header>

    //       <form className="mt-8">
    //         <div>
    //           <label htmlFor="email">
    //             <span className="text-squazzle-text-deep-grey1-color text-sm font-[600]">
    //               Email Address
    //             </span>
    //             <input
    //               id="email"
    //               type="text"
    //               value={email}
    //               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    //               placeholder="zharadoe@gmail.com"
    //               className="block border bg-white border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm  lg:text-lg px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
    //               onChange={(e) => validateEmail(e.target.value)}
    //             />
    //           </label>
    //         </div>
    //         {isEmailValid ? null : displayEmailErrorText()}
    //       </form>

    //       <button
    //         type="submit"
    //         className=" bg-squazzle-button-bg-deep-green-color w-full py-4 text-squazzle-white-background-color rounded-xl font-bold text-lg mt-8 md:mt-12 lg:mt-12 mb-6"
    //         onClick={() => handleGetCode()}
    //       >
    //         Get a reset code
    //       </button>
    //       <button
    //         type="button"
    //         className="bg-squazzle-background-white-color font-bold text-sm md:text-lg w-full py-4 rounded-xl text-squazzle-button-bg-deep-green-color border-2 border-squazzle-button-bg-deep-green-color mb-5"
    //         onClick={() => navigate(NonAuthRoutes.dashboard)}
    //       >
    //         Cancel
    //       </button>
    //     </div>
    //   </main>
    // </div>
  );
}

export default forgotPassword;
