import React from "react";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter-icon.svg";
import { ReactComponent as LinkdnIcon } from "../../assets/svg/linkedin-icon.svg";

const footer = () => {
  return (
    <main className="flex flex-col gap-y-4">
      <section className="border-t border-[#D7D7D7] w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white px-6 md:px-24 leading-10 text-sm text-squazzle-text-deep-grey2-color">
        <div className="order-2 md:order-none flex flex-col">
          <h2 className="text-[16px] font-semibold"> Company </h2>
          <ul>
            <li>
              <button type="button"> About Us </button>
            </li>
            <li>
              <button type="button"> Careers </button>
            </li>
            <li>
              <button type="button"> Contact Us </button>
            </li>
          </ul>
        </div>
        <div className="order-3 md:order-none">
          <h2 className="text-[16px] font-semibold flex flex-col">Products</h2>
          <ul>
            <li>
              <button type="button"> Become Our Partner </button>
            </li>
            <li>
              <button type="button"> List Your Properties </button>
            </li>
            <li>
              <button type="button"> Deals and Promo </button>
            </li>
          </ul>
        </div>
        <div className="order-4 md:order-none flex flex-col">
          <h2 className="text-[16px] font-semibold"> Useful Links </h2>
          <ul>
            <li>
              <button type="button"> FAQ </button>
            </li>
            <li>
              <button type="button"> Blog </button>
            </li>
            <li>
              <button type="button"> Help and support </button>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-none flex flex-col items-start gap-y-2 mt-0 md:mt-[75px] py-4">
          <div className="flex flex-col">
            <h2 className="text-[16px] font-semibold"> Newsletter </h2>
            <p className="w-full md:w-60 leading-6">
              Subscribe to our newsletter now to get the best deals for you.
            </p>
          </div>
          <div className="flex flex-col items-start justify-beteen gap-y-2 w-full">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-[310px] py-3 md:py-5 border-2 rounded-md md:rounded-lg text-base md:text-lg px-2 md:px-3 focus:bg-none focus:outline-none"
            />
            <button
              type="button"
              className="w-[100px] md:w-[178px] py-3 md:py-5 rounded-md md:rounded-xl text-base md:text-xl font-bold bg-squazzle-button-bg-deep-green-color text-white"
            >
              Subscribe!
            </button>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center px-6 md:px-24 h-[180px] border-t-[1px] border-t-[#D7D7D7]">
        <footer className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3 w-full bg-squazzle-white-background-color">
          <div className="flex-[0.3]">
            <SquazzleDesktopGreenLogo className="w-[100px] md:w-[181px] h-[30px] md:h-[44px]" />
          </div>
          <ul className="flex flex-[0.4] flex-col md:flex-row items-start md:items-center justify-between gap-y-3 font-normal text-sm text-squazzle-text-deep-grey2-color">
            <li>
              <button type="button"> Privacy policy </button>
            </li>
            <li>
              <button type="button"> Terms and conditions </button>
            </li>
          </ul>
          <div className="flex flex-row items-start md:items-center gap-x-5">
            <InstagramIcon className="cursor-pointer" />
            <FacebookIcon className="cursor-pointer" />
            <TwitterIcon className="cursor-pointer" />
            <LinkdnIcon className="cursor-pointer" />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default footer;
