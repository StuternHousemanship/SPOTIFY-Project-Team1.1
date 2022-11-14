import React from "react";
import { ReactComponent as ArrowDownIcon } from "../../assets/svg/arrow-down-icon.svg";

const countryDropDown = () => {
  return (
    <div className="select-wrapper">
      <ArrowDownIcon className="arrow-down" />
      <select
        name="country-code"
        id="country-code"
        className="w-[90px] pl-3 border border-y-squazzle-border-grey-color border-l-squazzle-border-grey-color border-r-white text-squazzle-placeholder-grey-color text-sm  lg:text-lg font-[400] rounded-tl-lg rounded-bl-lg h-[62px] mt-[6px] w-focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
      >
        <option data-countryCode="NG" value="234">
          +234
        </option>
        <option data-countryCode="DZ" value="213">
          +213
        </option>
        <option data-countryCode="AD" value="376">
          +376
        </option>
        <option data-countryCode="AO" value="244">
          +244
        </option>
        <option data-countryCode="AM" value="374">
          +374
        </option>
        <option data-countryCode="AW" value="297">
          +297
        </option>
        <option data-countryCode="AZ" value="994">
          +994
        </option>
        <option data-countryCode="BH" value="973">
          +973
        </option>
        <option data-countryCode="BD" value="880">
          +880
        </option>
        <option data-countryCode="BW" value="267">
          +267
        </option>
        <option data-countryCode="EE" value="372">
          +372
        </option>
        <option data-countryCode="ET" value="251">
          +251
        </option>
        <option data-countryCode="FI" value="358">
          +358
        </option>
        <option data-countryCode="GH" value="233">
          +233
        </option>
        <option data-countryCode="NI" value="505">
          +505
        </option>
        <option data-countryCode="NE" value="227">
          +227
        </option>
        <option data-countryCode="QA" value="974">
          +974
        </option>
        <option data-countryCode="SC" value="248">
          +248
        </option>
        <option data-countryCode="SL" value="232">
          +232
        </option>
        <option data-countryCode="SO" value="252">
          +252
        </option>
        <option data-countryCode="SI" value="963">
          +963
        </option>
        <option data-countryCode="TG" value="228">
          +228
        </option>
        <option data-countryCode="TN" value="216">
          +216
        </option>
        <option data-countryCode="UG" value="256">
          +256
        </option>
        <option data-countryCode="ZM" value="260">
          +260
        </option>
        <option data-countryCode="ZW" value="263">
          +263
        </option>
      </select>
    </div>
  );
};

export default countryDropDown;
