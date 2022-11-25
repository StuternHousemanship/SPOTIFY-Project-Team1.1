import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import footer from "../components/footer/footer";
import { NonAuthRoutes } from "../url";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../assets/svg/squazzle-desktop-green-logo.svg";
import { ReactComponent as BellIcon } from "../assets/svg/bell-icon.svg";
import { ReactComponent as UserIcon } from "../assets/svg/profile-icon.svg";
import dashboardBackgroundImage from "../assets/img/dashboard-background-image.png";

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
    <main className="min-h-screen bg-white font-sans">
      <nav className="flex flex-row items-center justify-between bg-squazzle-white-background-color border-b border-squazzle-background-white-color py-9 px-20 fixed top-0 w-full z-10">
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
              onClick={() => toggleProfileCard()}
            />
          </li>
        </ul>
      </nav>
      <ul
        className={
          profileCard ? "profile-card-active absolute z-10" : "profile-card"
        }
      >
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
        className="hidden md:grid md:place-items-center"
        style={{
          backgroundImage: `url(${dashboardBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPositionY: "top",
          position: "relative",
          width: "100%",
          height: "509px",
          marginTop: "96px",
        }}
      >
        <section className="text-center text-white">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[54px] font-[600] pb-6">
              Find that perfect home with squazzle
            </h1>
            <p className="text-[28px] font-[400] pb-8 max-w-[818px]">
              Get the best accommodation and list your property for the right
              prices.
            </p>
            <p className="text-[28px] font-[600] pb-[88px]">
              So what would you like to do?
            </p>
          </div>
          <div className="flex gap-x-[197px] justify-center">
            <button
              type="button"
              className="py-5 w-[420px] text-squazzle-button-font-deep-green-color font-bold bg-squazzle-button-bg-light-green-color rounded-xl"
            >
              List accomodation
            </button>
            <button
              type="button"
              className="py-5 w-[420px] text-squazzle-button-font-deep-green-color font-bold bg-squazzle-button-bg-light-green-color rounded-xl"
            >
              Browse accomodation
            </button>
          </div>
        </section>
      </section>
      <div className="bg-white w-full h-[112px]">{}</div>
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
      {footer()}
    </main>
  );
}

export default dashboard;
