import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "../../url";
import { ReactComponent as CloseModalIcon } from "../../assets/svg/close-modal-icon.svg";
import { ReactComponent as BarIcon } from "../../assets/svg/bar-icon.svg";

const deleteAccount = ({ closeDeleteModal }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [understandCondition, setUnderstandCondition] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  /** handles log out */
  const handleLogout = () => {
    navigate(NonAuthRoutes.login);
    window.localStorage.clear();
  };

  return (
    <>
      <div className=" hidden md:block absolute bg-[rgba(0,0,0,0.2)] w-screen h-[220vh] z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-white font-sans py-[44px] px-10 max-w-[630px] rounded-lg">
            <div className="flex items-center justify-between mb-7 max-[1024px]:mb-6">
              <h2 className="font-semibold text-4xl max-[1024px]:text-3xl text-squazzle-text-deep-grey2-color">
                Delete your squazzle account
              </h2>
              <button type="button" onClick={closeDeleteModal}>
                <CloseModalIcon className="h-[14px] w-[14px]" />
              </button>
            </div>
            <p className="text-lg font-[400] text-squazzle-text-deep-grey1-color mb-[38px]">
              We’re sorry to see you go. Once your account is deleted, the
              profile and listings associated with this account will disappear.
              You won’t be able to access your account information.
            </p>
            <p className="text-lg font-[400] text-quazzle-text-deep-grey1-color mb-8">
              To confirm, enter your password below:
            </p>
            <form>
              <div>
                <label htmlFor="password">
                  <input
                    type="text"
                    placeholder="Please confirm your password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-xl font-normal py-5 px-4 w-full focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-4">
                <label htmlFor="understand-condition">
                  <input
                    type="checkbox"
                    name="understand-condition"
                    id="understand-condition"
                    value={understandCondition}
                    onClick={(e) => setUnderstandCondition(e.target.checked)}
                    className="text-squazzle-text-deep-grey1-color mr-[11px] accent-squazzle-profileCard-logout-red-color"
                  />
                  <span>
                    I understand that deleting my account is permanent and
                    cannot be undone
                  </span>
                </label>
              </div>
              <div className="flex gap-x-[230px] mt-8">
                <button
                  type="button"
                  className="font-bold text-xl border-2 border-squazzle-profileCard-logout-red-color rounded-xl text-squazzle-profileCard-logout-red-color py-5 w-[160px]"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="enabled disabled:bg-[#F6D3DD] disabled:text-[#460B1D] bg-squazzle-profileCard-logout-red-color text-white rounded-xl py-5 w-[160px] text-xl  font-bold"
                  disabled={!password || !understandCondition}
                  onClick={() => navigate(NonAuthRoutes.signUp)}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* MOBILE SCREEN */}
      <div className="block md:hidden">
        <div className=" absolute bg-white w-screen h-[220vh] z-50 top-0 font-sans">
          <nav
            className="flex flex-row  items-center justify-between h-[76px] bg-squazzle-profileCard-background-white-color px-10 fixed top-0 w-full z-10"
            style={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="">
              <button type="button" onClick={closeDeleteModal}>
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
                Delete your squazzle account
              </h1>
              <p className="text-sm font-normal text-squazzle-text-deep-grey1-color mt-5 ">
                We’re sorry to see you go. Once your account is deleted, the
                profile and listings associated with this account will
                disappear. You won’t be able to access your account information.
              </p>
              <p className="text-sm font-normal text-squazzle-text-deep-grey1-color mt-8 mb-5">
                To confirm,enter your password below:
              </p>
            </section>
            <form>
              <div>
                <label htmlFor="password">
                  <input
                    type="text"
                    placeholder="Please confirm your password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-sm font-normal py-[15px] px-4 w-full focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-4">
                <label htmlFor="understand-condition">
                  <input
                    type="checkbox"
                    name="understand-condition"
                    id="understand-condition"
                    value={understandCondition}
                    onClick={(e) => setUnderstandCondition(e.target.checked)}
                    className="text-squazzle-text-deep-grey1-color mr-[11px] accent-squazzle-profileCard-logout-red-color"
                  />
                  <span className="text-sm text-squazzle-text-deep-grey1-color">
                    I understand that deleting my account is permanent and
                    cannot be undone
                  </span>
                </label>
              </div>
              <div className="flex flex-col gap-y-4 mt-9">
                <button
                  type="button"
                  className="font-bold text-sm border-2 border-squazzle-profileCard-logout-red-color rounded-xl text-squazzle-profileCard-logout-red-color py-[15px] "
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="enabled disabled:bg-[#F6D3DD] disabled:text-[#460B1D] bg-squazzle-profileCard-logout-red-color text-white rounded-xl py-[15px] text-sm  font-bold"
                  disabled={!password || !understandCondition}
                  onClick={() => navigate(NonAuthRoutes.signUp)}
                >
                  Delete
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

export default deleteAccount;
