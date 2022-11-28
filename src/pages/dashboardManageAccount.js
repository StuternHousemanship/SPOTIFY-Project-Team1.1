import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as UserIcon } from "../assets/svg/profile-icon.svg";
import { ReactComponent as PersonalDetailsIcon } from "../assets/svg/dashboard-personalDetails-icon.svg";
import { ReactComponent as PaymentIcon } from "../assets/svg/dashboard-payment-icon.svg";
import { ReactComponent as DeleteAccountIcon } from "../assets/svg/dashboard-deleteAccount-icon.svg";
import { ReactComponent as MyListingIcon } from "../assets/svg/dashboard-myListing-icon.svg";
import { ReactComponent as NotificationIcon } from "../assets/svg/dashboard-notification-icon.svg";
import { ReactComponent as PasswordSettingsIcon } from "../assets/svg/dashboard-passwordSettings-icon.svg";

const dashboardManageAccount = () => {
  return (
    <main className="min-h-[70vh] md:min-h-screen flex items-center justify-center px-10">
      <section className="hidden md:flex flex-col gap-y-6">
        <p className="font-normal text-sm">Manage Account</p>

        <section className="flex flex-row items-center justify-between gap-x-10">
          <button
            type="button"
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}
            className="flex flex-col items-center justify-center gap-y-4 p-4 bg-squazzle-white-background-color h-[312px] w-[305px] "
          >
            <h1 className="font-semibold text-[28px] text-squazzle-text-deep-grey2-color text-center w-[203px]">
              Welcome back Zhara Doe
            </h1>
            <p className="font-normal text-xl text-squazzle-text-deep-grey1-color">
              zhara@gmail.com
            </p>
            <UserIcon className="w-[87px] h-[87px]" />
          </button>

          <div className="flex-1 grid grid-cols-3 gap-6">
            <button
              type="button"
              style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center justify-center gap-y-4 p-4 bg-squazzle-white-background-color w-[280px] h-[144px] rounded-lg"
            >
              <PersonalDetailsIcon className="w-[24px] h-[24px]" />
              <h1 className="font-semibold text-[14px] text-squazzle-text-deep-grey1-color text-center">
                Personal Details
              </h1>
            </button>

            <button
              type="button"
              style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center justify-center gap-y-4 p-4 bg-squazzle-white-background-color w-[280px] h-[144px] rounded-lg"
            >
              <MyListingIcon className="w-[24px] h-[24px]" />
              <h1 className="font-semibold text-[14px] text-squazzle-text-deep-grey1-color text-center">
                My Listing
              </h1>
            </button>

            <button
              type="button"
              style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center justify-center gap-y-4 p-4 bg-squazzle-white-background-color w-[280px] h-[144px] rounded-lg"
            >
              <NotificationIcon className="w-[24px] h-[24px]" />
              <h1 className="font-semibold text-[14px] text-squazzle-text-deep-grey1-color text-center">
                Notification
              </h1>
            </button>

            <button
              type="button"
              style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center justify-center gap-y-4 p-4 bg-squazzle-white-background-color w-[280px] h-[144px] rounded-lg"
            >
              <PasswordSettingsIcon className="w-[24px] h-[24px]" />
              <h1 className="font-semibold text-[14px] text-squazzle-text-deep-grey1-color text-center">
                Password Settings
              </h1>
            </button>

            <button
              type="button"
              style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center justify-center gap-y-4 p-4 bg-squazzle-white-background-color w-[280px] h-[144px] rounded-lg"
            >
              <PaymentIcon className="w-[24px] h-[24px]" />
              <h1 className="font-semibold text-[14px] text-squazzle-text-deep-grey1-color text-center">
                Payments and Payout
              </h1>
            </button>

            <button
              type="button"
              style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center justify-center gap-y-4 p-4 bg-squazzle-white-background-color w-[280px] h-[144px] rounded-lg"
            >
              <DeleteAccountIcon className="w-[24px] h-[24px]" />
              <h1 className="font-semibold text-[14px] text-squazzle-text-deep-grey1-color text-center">
                Delete Account
              </h1>
            </button>
          </div>
        </section>
      </section>

      <section className="flex md:hidden flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-3">
          <UserIcon className="w-[45px] h-[45px]" />
          <h2 className="w-[168px] h-[60px] font-semibold text-2xl text-squazzle-text-deep-grey1-color">
            Welcome back Zhara Doe
          </h2>
          <p className="font-normal text-sm text-squazzle-text-deep-grey2-color">
            zhara@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-y-6 w-full">
          <h2 className="text-squazzle-text-deep-grey1-color text-lg font-semibold">
            Manage Account
          </h2>
          <ul className="flex flex-col gap-y-6 w-full">
            <li className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-x-4">
                <PersonalDetailsIcon className="w-[20px] h-[20px]" />
                <h2 className="font-normal text-sm">Personal Information</h2>
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-normal text-sm"
              />
            </li>
            <li className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-x-4">
                <MyListingIcon className="w-[20px] h-[20px]" />
                <h2 className="font-normal text-sm">My Listing</h2>
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-normal text-sm"
              />
            </li>
            <li className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-x-4">
                <PasswordSettingsIcon className="w-[20px] h-[20px]" />
                <h2 className="font-normal text-sm">Privacy Settings</h2>
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-normal text-sm"
              />
            </li>
            <li className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-x-4">
                <NotificationIcon className="w-[20px] h-[20px]" />
                <h2 className="font-normal text-sm">Notifications</h2>
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-normal text-sm"
              />
            </li>
            <li className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-x-4">
                <PaymentIcon className="w-[20px] h-[20px]" />
                <h2 className="font-normal text-sm">Payment and payouts</h2>
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-normal text-sm"
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default dashboardManageAccount;
