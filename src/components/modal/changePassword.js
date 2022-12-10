import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as CloseModalIcon } from "../../assets/svg/close-modal-icon.svg";

const changePassword = ({ closePasswordModal }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterNewPassword, setReEnterNewPassword] = useState("");
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);
  const [matchFirstPassword, setMatchFirstPassword] = useState(false);

  const displayConfirmPasswordErrorText = () => {
    return (
      <p
        className={
          matchFirstPassword
            ? "text-squazzle-success-green-color text-xs font-semibold mt-[6px]"
            : "text-squazzle-border-error--red-color text-xs font-semibold mt-[6px]"
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
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] w-screen h-[220vh] z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="bg-white font-sans py-[44px] px-10 max-w-[630px] rounded-lg">
          <div className="flex justify-end">
            <button type="button" onClick={closePasswordModal}>
              <CloseModalIcon className="h-[14px] w-[14px]" />
            </button>
          </div>
          <h2 className="font-semibold text-[36px] text-squazzle-text-deep-grey2-color mb-7">
            Change Password
          </h2>
          <p className="text-lg font-[400] text-squazzle-text-deep-grey1-color mb-[38px]">
            To Change your password, enter your old password followed by your
            preferred password
          </p>
          <div>
            <label htmlFor="password">
              <span className="block">Password</span>
              <input
                type="text"
                placeholder="Enter your old password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-xl font-normal py-5 px-4 w-full focus:outline-none mt-[6px]"
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="new-password">
              <span>New Password</span>
              <input
                type="text"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-xl font-normal py-5 px-4 w-full focus:outline-none mt-[6px]"
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="re-enter-new-password">
              <span>Re-enter Password</span>
              <input
                type="text"
                placeholder="Re-enter your new password"
                value={reEnterNewPassword}
                pattern={newPassword}
                onChange={(e) => setReEnterNewPassword(e.target.value)}
                className="block placeholder:text-squazzle-placeholder-grey-color text-squazzle-text-deep-grey2-color border border-squazzle-border-grey-color rounded-lg text-xl font-normal py-5 px-4 w-full focus:outline-none mt-[6px] invalid:border-squazzle-text-error-red-color"
                onKeyUp={() => handleOnkeyUpForConfirmPasswordInput()}
              />
            </label>
            {showConfirmPasswordError
              ? displayConfirmPasswordErrorText()
              : null}
          </div>
          <div className="flex gap-x-[230px] mt-8">
            <button
              type="button"
              className="font-bold text-xl border-2 border-squazzle-button-bg-deep-green-color rounded-xl text-squazzle-button-bg-deep-green-color py-5 w-[160px]"
              onClick={closePasswordModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="enabled disabled:bg-squazzle-button-bg-light-green-color disabled:text-squazzle-button-font-deep-green-color bg-squazzle-button-bg-deep-green-color text-white rounded-xl py-5 w-[160px] text-xl  font-bold"
              disabled={!password || !newPassword || !reEnterNewPassword}
              onClick={() => navigate(NonAuthRoutes.signUp)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default changePassword;
