/* eslint-disable react/function-component-definition */
import React from "react";
import alertPageNavigation from "../navigation/alert-page-navigation";
import { ReactComponent as CheckCircleIcon } from "../../assets/svg/check_circle_icon.svg";
import { ReactComponent as ErrorIcon } from "../../assets/svg/error-icon.svg";

const successAndError = ({
  heading,
  message,
  buttonAction,
  buttonText,
  isError,
  isSuccess,
}) => {
  return (
    <div className="bg-squazzle-background-white-color pt-[130px] pb-[600px] md:pb-[800px] lg:pb-80 max-[640px]:bg-white">
      <div className="font-sans grid place-items-center h-full bg-squazzle-background-white-color max-[640px]:bg-white">
        {alertPageNavigation()}
        <div
          className="grid place-items-center w-[610px] py-[22px] px-[4px] md:px-10 lg:px-10 box-border bg-white text-centerr"
          style={{ width: "min(100vw, 609px)" }}
        >
          {isSuccess ? (
            <CheckCircleIcon className="h-[56.67px] w-[56.67px] lg:h-[73.33px] lg:w-[73.33px]" />
          ) : null}
          {isError ? (
            <ErrorIcon className="h-[56.67px] w-[56.67px] lg:h-[73.33px] lg:w-[73.33px]" />
          ) : null}
          <h2 className="text-2xl lg:text-4xl font-bold text-squazzle-grey-text-color mt-[37.67px] lg:mt-[35.33px]">
            {heading}
          </h2>
          {isSuccess ? (
            <p className="font-normal text-sm text-center lg:text-lg max-w-[310px] lg:max-w-[484px] text-squazzle-text-deep-grey1-color mt-4 lg:mt-7">
              {message}
            </p>
          ) : null}
          {isError ? (
            <p className="font-normal text-sm text-center lg:text-lg max-w-[310px] lg:max-w-[484px] text-squazzle-text-error-red-color mt-4 lg:mt-7">
              {message}
            </p>
          ) : null}
          <button
            type="submit"
            className="block bg-squazzle-button-bg-deep-green-color py-[15px]  lg:py-5 w-[320px] md:w-[350px] lg:w-[400px] text-squazzle-button-bg-light-green-color text-sm lg:text-xl font-bold rounded-xl cursor-pointer mt-7 lg:mt-12 mb-12 max-w-[420px]"
            onClick={buttonAction}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default successAndError;
