import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as CloseModalIcon } from "../../assets/svg/close-modal-icon.svg";

const deleteAccount = ({ closeDeleteModal }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [understandCondition, setUnderstandCondition] = useState(false);

  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] w-screen h-[220vh] z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="bg-white font-sans py-[44px] px-10 max-w-[630px] rounded-lg">
          <div className="flex justify-end">
            <button type="button" onClick={closeDeleteModal}>
              <CloseModalIcon className="h-[14px] w-[14px]" />
            </button>
          </div>
          <h2 className="font-semibold text-[36px] text-squazzle-text-deep-grey2-color mb-7">
            Delete your squazzle account
          </h2>
          <p className="text-lg font-[400] text-squazzle-text-deep-grey1-color mb-[38px]">
            We’re sorry to see you go. Once your account is deleted, the profile
            and listings associated with this account will disappear. You won’t
            be able to access your account information.
          </p>
          <p className="text-lg font-[400] text-quazzle-text-deep-grey1-color mb-8">
            To confirm, enter your password below:
          </p>
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
                I understand that deleting my account is permanent and cannot be
                undone
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
        </div>
      </div>
    </div>
  );
};

export default deleteAccount;
