import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as BellIcon } from "../assets/svg/bell-icon.svg";
import { ReactComponent as UserIcon } from "../assets/svg/profile-icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/svg/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter.svg";
import { ReactComponent as LinkdnIcon } from "../assets/svg/linkdn.svg";
import onboard from "../assets/img/onboard.png";

function dashboard() {
  const navigate = useNavigate();
  const [profileCard, setProfileCard] = useState(false);

  // handles profile card toggele
  const toggleProfileCard = () => {
    setProfileCard(!profileCard);
  };
  const handleLogout = () => {
    // navigates to login page
    navigate(NonAuthRoutes.login);
    window.localStorage.clear();
  };

  return (
    <main className="min-h-screen bg-squazzle-background-white-color font-sans">
      <nav className="flex flex-row items-center justify-between bg-squazzle-white-background-color border-b border-squazzle-background-white-color py-4 px-20 h-[96px]">
        <div>
          <SquazzleDesktopGreenLogo className="w-[181px] h-[44px]" />
        </div>
        <ul className="flex flex-[0.4] flex-row items-center justify-between font-normal text-base text-squazzle-text-deep-grey2-color">
          <li>
            <button type="button">Accommodations</button>
          </li>
          <li>
            <button type="button">List your property</button>
          </li>
          <li>
            <button type="button">About us</button>
          </li>
          <li>
            <button type="button">FAQ</button>
          </li>
        </ul>
        <ul className="flex-[0.07] flex flex-row items-center justify-between">
          <li>
            <BellIcon className="w-[16px] h-[20px] cursor-pointer" />
          </li>
          <li>
            <UserIcon
              className="w-[33px] h-[33px] cursor-pointer"
              onClick={toggleProfileCard}
            />
          </li>
        </ul>
      </nav>
      <ul className={profileCard ? "profile-card-active" : "profile-card"}>
        <li>
          <button type="button"> Manage Account </button>
        </li>
        <li>
          <button type="button"> Settings </button>
        </li>
        <li>
          <button type="button"> Wishlist </button>
        </li>
        <li>
          <button type="button"> Help </button>
        </li>
        <li className="w-full">
          <hr className="border border-squazzle-border-grey-color" />
        </li>
        <li className="text-squazzle-profileCard-logout-red-color">
          <button type="button" onClick={() => handleLogout()}>
            Logout
          </button>
        </li>
      </ul>

      <section
        className="hidden md:block"
        style={{
          backgroundImage: `url(${onboard})`,
          backgroundSize: "cover",
          backgroundPositionY: "top",
          position: "relative",
          width: "100%",
          height: "50vh",
        }}
      >
        <section className="text-center text-white">
          <div>
            <h1 className="text-4xl py-7">
              Find that perfect home with squazzle
            </h1>
            <p className="text-2xl font-light">
              Squatting made easy! Get the best accomodation and list your
              accomodation for the right prices
            </p>
            <p className="text-2xl py-5">So what would you like to do?</p>
          </div>
          <div>
            <button
              type="submit"
              className="px-12 w-68 bg-squazzle-button-bg-deep-green-color p-3 rounded-2xl m-5"
            >
              List accomodation
            </button>
            <button
              type="submit"
              className="px-12 w-68 bg-none p-3 rounded-2xl border-2"
            >
              Browse accomodation
            </button>
          </div>
        </section>
      </section>
      <section className="flex justify-between p-8 px-60 leading-10 text-squazzle-text-deep-grey2-color">
        <div>
          COMPANY
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
        <div>
          PRODUCTS
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
        <div>
          USEFUL LINKS
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
        <div>
          NEWSLETTER
          <p className="w-60 leading-6 py-3">
            Subscribe to our newsletter now to get the best deals for you.
          </p>
          <input
            type="email"
            placeholder="Email address"
            className="w-60 border-2 rounded-lg px-3"
          />
          <div>
            <button
              type="button"
              className="w-40 rounded-2xl border-4 bg-squazzle-button-bg-deep-green-color text-white my-3"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section>
        <footer className="flex flex-row items-center justify-between bg-squazzle-white-background-color border-b border-squazzle-background-white-color py-4 px-20 h-[96px]">
          <div>
            <SquazzleDesktopGreenLogo className="w-[181px] h-[44px]" />
          </div>
          <ul className="flex flex-[0.4] flex-row items-center justify-between font-normal text-base text-squazzle-text-deep-grey2-color">
            <li>
              <button type="button">Privacy policy</button>
            </li>
            <li>
              <button type="button">Terms and condition</button>
            </li>
          </ul>
          <div className="flex">
            <InstagramIcon className="w-[50px] h-[10px]" />
            <FacebookIcon className="w-[50px] h-[10px]" />
            <TwitterIcon className="w-[50px] h-[10px]" />
            <LinkdnIcon className="w-[50px] h-[10px]" />
          </div>
        </footer>
      </section>
    </main>
  );
}

export default dashboard;
