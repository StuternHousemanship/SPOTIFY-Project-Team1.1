import React from "react";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter-icon.svg";
import { ReactComponent as LinkdnIcon } from "../../assets/svg/linkedin-icon.svg";

const footer = () => {
  return (
    <>
      <section className="flex justify-between bg-white px-60 leading-10 text-sm text-squazzle-text-deep-grey2-color  border-t-[1px] border-t-[#D7D7D7] mb-20 ">
        <div className="mt-20">
          <p className="text-[16px]">Company</p>
          <ul>
            <li>
              <button type="button">About Us</button>
            </li>
            <li>
              <button type="button">Careers</button>
            </li>
            <li>
              <button type="button">Contact Us</button>
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <p className="text-[16px]">Products</p>
          <ul>
            <li>
              <button type="button">Become Our Partner</button>
            </li>
            <li>
              <button type="button">List Your Properties</button>
            </li>
            <li>
              <button type="button">Deals and Promo</button>
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <p className="text-[16px]">Useful Links</p>
          <ul>
            <li>
              <button type="button">FAQ</button>
            </li>
            <li>
              <button type="button">Blog</button>
            </li>
            <li>
              <button type="button">Help and support</button>
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <p className="text-[16px]">Newsletter</p>
          <p className="w-60 leading-6 py-3">
            Subscribe to our newsletter now to get the best deals for you.
          </p>
          <input
            type="email"
            placeholder="Email address"
            className="w-[310px] py-5 border-2 rounded-lg text-lg px-3 focus:bg-none"
          />
          <div>
            <button
              type="button"
              className="w-[178px] py-5 rounded-xl text-xl font-bold bg-squazzle-button-bg-deep-green-color text-white mt-5"
            >
              Subscribe!
            </button>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default footer;
