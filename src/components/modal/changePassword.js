import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes, NonAuthRoutes } from "../../url";
import { ReactComponent as CloseModalIcon } from "../../assets/svg/close-modal-icon.svg";
import { ReactComponent as BarIcon } from "../../assets/svg/bar-icon.svg";

const changePassword = ({ closePasswordModal }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterNewPassword, setReEnterNewPassword] = useState("");
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);
  const [matchFirstPassword, setMatchFirstPassword] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    if (!reEnterNewPassword) {
      setMatchFirstPassword(false);
    }
  });

  const displayConfirmPasswordErrorText = () => {
    return (
      <p
        className={
          matchFirstPassword
            ? "text-squazzle-success-green-color text-xs font-semibold mt-[6px] max-[1024px]:mt-1"
            : "text-squazzle-border-error--red-color text-xs font-semibold mt-[6px] max-[1024px]:mt-1"
        }
      >
        Passwords must match
      </p>
    );
  };

  const handleOnkeyUpForConfirmPasswordInput = () => {
    setShowConfirmPasswordError(true);
    // checks that second password matches first
    if (newPassword === reEnterNewPassword) {
      setMatchFirstPassword(true);
    } else {
      setMatchFirstPassword(false);
    }
  };

  const handleLogout = () => {
    // navigates to login page
    navigate(NonAuthRoutes.login);
    window.localStorage.clear();
  };

  return (
    <>
      <div className="hidden md:block absolute bg-[rgba(0,0,0,0.2)] w-screen h-[220vh] z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-white font-sans py-[44px] max-[1024px]:py-[35px] px-10 max-w-[630px] rounded-lg">
            <div className="flex items-center justify-between mb-7 max-[1024px]:mb-6">
              <h2 className="font-semibold text-4xl max-[1024px]:text-3xl text-squazzle-text-deep-grey2-color">
                Change Password
              </h2>
              <button type="button" onClick={closePasswordModal}>
                <CloseModalIcon className="h-[14px] w-[14px]" />
              </button>
            </div>
            <p className="text-lg max-[1024px]:text-base font-[400] text-squazzle-text-deep-grey1-color mb-[38px] max-[1024px]:mb-[34px]">
              To Change your password, enter your old password followed by your
              preferred password
            </p>
            <div>
              <label htmlFor="password">
                <span className="block text-sm max-[1024px]:text-xs font-semibold">
                  Password
                </span>
                <input
                  type="text"
                  placeholder="Enter your old password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-lg max-[1024px]:text-base font-normal py-5 max-[1024px]:py-4 px-4 w-full focus:outline-none mt-[6px] max-[1024px]:mt-1"
                />
              </label>
            </div>
            <div className="mt-4">
              <label htmlFor="new-password">
                <span className="block text-sm max-[1024px]:text-xs font-semibold">
                  New Password
                </span>
                <input
                  type="text"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-lg max-[1024px]:text-base font-normal py-5 max-[1024px]:py-4 px-4 w-full focus:outline-none mt-[6px] max-[1024px]:mt-1"
                />
              </label>
            </div>
            <div className="mt-4">
              <label htmlFor="re-enter-new-password">
                <span className="block text-sm max-[1024px]:text-xs font-semibold">
                  Re-enter Password
                </span>
                <input
                  type="text"
                  placeholder="Re-enter your new password"
                  value={reEnterNewPassword}
                  pattern={newPassword}
                  onChange={(e) => setReEnterNewPassword(e.target.value)}
                  className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-lg max-[1024px]:text-base font-normal py-5 max-[1024px]:py-4 px-4 w-full focus:outline-none mt-[6px] max-[1024px]:mt-1 invalid:border-squazzle-text-error-red-color"
                  onKeyUp={() => handleOnkeyUpForConfirmPasswordInput()}
                />
              </label>
              {showConfirmPasswordError
                ? displayConfirmPasswordErrorText()
                : null}
            </div>
            <div className="flex gap-x-[230px] mt-8 max-[1024px]:mt-7">
              <button
                type="button"
                className="font-bold text-xl max-[1024px]:text-lg border-2 border-squazzle-button-bg-deep-green-color rounded-xl text-squazzle-button-bg-deep-green-color py-5 w-[160px]"
                onClick={closePasswordModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="enabled disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color bg-squazzle-button-bg-deep-green-color text-white rounded-xl py-5 w-[160px] text-xl  max-[1024px]:text-lg font-bold"
                disabled={!password || !newPassword || !reEnterNewPassword}
                onClick={() => navigate(NonAuthRoutes.login)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE SCREEN */}
      <div className="block md:hidden ">
        <div className="absolute bg-white w-screen h-[220vh] z-50 top-0 font-sans">
          <nav
            className="flex flex-row  items-center justify-between h-[76px] bg-squazzle-profileCard-background-white-color px-10 fixed top-0 w-full z-10"
            style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="">
              <button type="button" onClick={closePasswordModal}>
                <CloseModalIcon className="h-[14px] w-[14px]" />
              </button>
            </div>
            <button type="button" onClick={() => setIsSideBarOpen(true)}>
              <BarIcon />
            </button>
          </nav>
          <div className="px-5 min-[564px]:px-20">
            <section className="mt-[100px]">
              <h1 className="text-lg font-semibold text-squazzle-text-deep-grey2-color">
                Change Password
              </h1>
              <p className="text-sm font-normal text-squazzle-text-deep-grey1-color mt-5 ">
                To Change your password, enter your old password followed by
                your preferred password
              </p>
            </section>
            <form>
              <div className="mt-5">
                <label htmlFor="password">
                  <span className="text-sm text-squazzle-text-deep-grey1-color font-semibold">
                    Password
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your old password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-sm font-normal py-[15px] px-4 w-full focus:outline-none mt-[6px]"
                  />
                </label>
              </div>
              <div className="mt-4">
                <label htmlFor="new-password">
                  <span className="text-sm text-squazzle-text-deep-grey1-color font-semibold">
                    New Password
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your new password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-sm font-normal py-[15px] px-4 w-full focus:outline-none mt-[6px]"
                  />
                </label>
              </div>
              <div className="mt-4">
                <label htmlFor="re-enter-new-password">
                  <span className="text-sm text-squazzle-text-deep-grey1-color font-semibold">
                    Re-enter New Password
                  </span>
                  <input
                    type="text"
                    placeholder="Re-enter your new password"
                    id="re-enter-new-password"
                    value={reEnterNewPassword}
                    onChange={(e) => setReEnterNewPassword(e.target.value)}
                    className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-sm font-normal py-[15px] px-4 w-full focus:outline-none mt-[6px]"
                  />
                </label>
              </div>
              <div className="flex flex-col gap-y-4 mt-9">
                <button
                  type="button"
                  className="font-bold text-sm border-2 border-squazzle-button-bg-deep-green-color rounded-xl text-squazzle-button-bg-deep-green-color py-[15px] "
                  onClick={closePasswordModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="enabled disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color bg-squazzle-button-bg-deep-green-color text-white rounded-xl py-[15px] text-sm  font-bold"
                  disabled={!password || !newPassword || !reEnterNewPassword}
                  onClick={() => navigate(NonAuthRoutes.login)}
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
        {isSideBarOpen ? (
          <ul className="fixed bg-white flex flex-col gap-6 font-normal text-base max-[1030px]:text-sm text-squazzle-text-deep-grey2-color top-0 right-0 left-0 bottom-0 px-5 py-8 z-50 ">
            <div className="flex justify-end">
              <button type="button" onClick={() => setIsSideBarOpen(false)}>
                <CloseModalIcon className="h-[14px] w-[14px]" />
              </button>
            </div>
            <li>
              <button
                type="button"
                onClick={() => navigate(AuthRoutes.dashboardManageAccount)}
              >
                Manage Account
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() =>
                  navigate(AuthRoutes.dashboardAccommodationDetails)
                }
              >
                Accommodations
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate(AuthRoutes.listedAccommodations)}
              >
                List your properties
              </button>
            </li>
            <li>
              <button type="button"> About us </button>
            </li>
            <li>
              <button type="button"> FAQ </button>
            </li>
            <li>
              <button type="button"> Settings </button>
            </li>
            <li>
              <button type="button"> Wishlist </button>
            </li>
            <li className="w-full">
              <hr className="border border-squazzle-border-grey-color" />
            </li>
            <li className="text-squazzle-profileCard-logout-red-color mb-[500px]">
              <button type="button" onClick={() => handleLogout()}>
                Logout
              </button>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default changePassword;
