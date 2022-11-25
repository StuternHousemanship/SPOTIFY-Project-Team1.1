import React from "react";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter-icon.svg";
import { ReactComponent as LinkdnIcon } from "../../assets/svg/linkedin-icon.svg";

const footer = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <section className="border-t-[1px] border-t-[#D7D7D7] w-[1048px]">
        <footer className="flex flex-row items-center justify-between bg-squazzle-white-background-color border-b border-squazzle-background-white-color py-5 h-[96px]">
          <div>
            <SquazzleDesktopGreenLogo className="w-[181px] h-[44px]" />
          </div>
          <ul className="flex flex-[0.4] flex-row items-center justify-between font-normal text-sm text-squazzle-text-deep-grey2-color">
            <li>
              <button type="button">Privacy policy</button>
            </li>
            <li>
              <button type="button">Terms and conditions</button>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkdnIcon />
          </div>
        </footer>
      </section>
    </div>
  );
};

export default footer;
