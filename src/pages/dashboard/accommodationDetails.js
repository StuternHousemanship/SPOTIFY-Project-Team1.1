import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import { ReactComponent as RadioButtonCheckedIcon } from "../../assets/svg/radio_button_checked_icon.svg";
import { ReactComponent as MoneyIcon } from "../../assets/svg/money_icon.svg";
import { ReactComponent as MoreIcon } from "../../assets/svg/more-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu-icon.svg";
import { ReactComponent as LocationIcon } from "../../assets/svg/location_pin_icon.svg";
import { ReactComponent as AccommodationRuleIcon } from "../../assets/svg/accomodationrule_icon.svg";
import { ReactComponent as DateRangeIcon } from "../../assets/svg/date_range_icon.svg";
import { ReactComponent as HouseIcon } from "../../assets/svg/house_icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter-icon.svg";
import { ReactComponent as LinkdnIcon } from "../../assets/svg/linkedin-icon.svg";
import { ReactComponent as BellIcon } from "../../assets/svg/bell-icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/profile-icon.svg";
import { ReactComponent as ArrowForwardIcon } from "../../assets/svg/arrow_forward_icon.svg";
import { ReactComponent as ArrowBackIcon } from "../../assets/svg/arrow_back_icon.svg";
import { ReactComponent as CreateIcon } from "../../assets/svg/create_icon.svg";
import { ReactComponent as SquazzleMobileLogo } from "../../assets/svg/squazzle-mobile-logo.svg";
import { ReactComponent as SquazzleDesktopGreenLogo } from "../../assets/svg/squazzle-desktop-green-logo.svg";
import AccommodationImage from "../../assets/img/accommodation-image.png";
import AccommodationImageOne from "../../assets/img/accomodation_image_one_desktop.png";
import AccommodationImageTwo from "../../assets/img/accomodation_image_two_desktop.png";
import AccommodationImageThree from "../../assets/img/accomodation_image_three_desktop.png";
import Footer from "../../components/footer/footer";

const accommodationDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Desktop Screen */}
      <div className="hidden lg:block font-sans">
        <header
          name="header"
          className="lg:h-[96px] lg:px-20 fixed top-0 w-full bg-[#ffffff] z-20"
        >
          <div className="flex justify-between items-center mt-[25px]">
            <button
              type="button"
              onClick={() => navigate(AuthRoutes.dashboard)}
            >
              <SquazzleDesktopGreenLogo className="h-[46px] pr-10" />
            </button>

            <ul className="flex lg:gap-8 font-normal text-base text-[#232323]">
              <Link
                to="header"
                smooth="true"
                duration={500}
                spy="true"
                offset={-2000}
                className="cursor-pointer"
              >
                Accommodations
              </Link>

              <button
                type="button"
                onClick={() => navigate(AuthRoutes.listedAccommodations)}
              >
                List your property
              </button>

              <button type="button">About us</button>

              <button type="button">FAQ</button>
            </ul>
            <ul className="flex lg:gap-x-[20px]">
              <button type="button">
                <BellIcon className=" cursor-pointer" />
              </button>
              <button type="button">
                <ProfileIcon className="cursor-pointer" />
              </button>
            </ul>
          </div>
        </header>
        <section className="flex lg:gap-12 lg:pl-20 ">
          <aside className="w-[280px] pt-[128px]">
            <div className="flex w-[235px] gap-x-5 mb-[31px]">
              <button
                type="button"
                className="cursor-pointer text-[#353535] text-sm font-semibold"
                onClick={() => navigate(AuthRoutes.dashboardManageAccount)}
              >
                Manage Account
              </button>
              <ArrowForwardIcon />
              <button
                type="button"
                className="cursor-pointer text-sm text-[#353535]"
                onClick={() => navigate(AuthRoutes.listedAccommodations)}
              >
                My Listing
              </button>
            </div>

            <div className="h-16 py-5 px-6 bg-[#001A1B] flex gap-x-[109px] mb-4">
              <button
                type="button"
                className="cursor-pointer text-sm text-[#CCE6E7] flex gap-2"
                onClick={() => navigate(AuthRoutes.listedAccommodations)}
              >
                <ArrowBackIcon />
                <span>Back</span>
              </button>
              <button
                type="button"
                className="cursor-pointer text-sm text-[#CCE6E7] flex gap-2"
              >
                <CreateIcon />
                <span>Edit</span>
              </button>
            </div>

            <div className="py-3 px-3 ">
              <div className="accomodation_details px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Location
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] " />
                <span className="text-[#232323] text-[14px] leading-[22px] font-normal">
                  Federal Housing Estate, Number 49 East-End, Jos, Plateau
                  State, Nigeria.
                </span>
              </div>
              <div className="accomodation_details px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7] ">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Reason for listing this accommodation
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] " />
                <span className="text-[#232323] text-[14px] leading-[22px] font-normal">
                  To offer guests an interesting and enriching experience that
                  makes a holiday memorable for all the right reasons.
                </span>
              </div>
              <div className="accomodation_details px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Hosting duration
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] " />
                <span className="text-[#232323] text-[16px] leading-[24px] font-normal flex gap-x-[11px]">
                  <DateRangeIcon /> <span>Fri 18 Nov - Fri 16 Dec</span>
                </span>
              </div>
              <div className="accomodation_details px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Accommodation type
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] " />
                <span className="text-[#232323] text-[16px] leading-[24px] font-normal flex gap-x-[11px]">
                  <HouseIcon /> <span>Apartment</span>
                </span>
              </div>
            </div>
          </aside>
          <main className="pt-[181px]">
            <div className="h-16 flex flex-row gap-x-5 text-base font-normal w-[875px] mb-5 ">
              <span
                data-tip
                data-for="available"
                className="m-w-[155px] py-5 px-[28px] bg-[#F5F5F5] flex space-x-[9.33px] "
              >
                <RadioButtonCheckedIcon className="self-center" />
                <span>Available</span>
                <ReactTooltip
                  id="available"
                  place="bottom"
                  effect="solid"
                  backgroundColor="#DA4773"
                  padding="20px 16px"
                  className="!w-[179px] !ml-4"
                  offset="{'bottom':9}"
                >
                  <span className="text-base flex items-center justify-center">
                    Availability
                  </span>
                </ReactTooltip>
              </span>
              <span
                data-tip
                data-for="price"
                className="flex py-5 px-[28px] bg-[#F5F5F5] m-w-[250px] space-x-[9.33px]"
              >
                <MoneyIcon className="self-center" />
                <span>NGN 65,000 per night</span>
                <ReactTooltip
                  id="price"
                  place="bottom"
                  effect="solid"
                  backgroundColor="#DA4773"
                  padding="20px 16px"
                  className="!w-[179px] !ml-4"
                  offset="{'bottom':9}"
                >
                  <span className="text-base flex items-center justify-center">
                    Price
                  </span>
                </ReactTooltip>
              </span>
              <button
                type="button"
                className="flex py-5 px-[28px] bg-[#F5F5F5] m-w-[152px] space-x-[9.33px]"
              >
                <LocationIcon className="self-center" />
                <span>Location</span>
              </button>
              <Link
                to="accommodation_rules"
                smooth="true"
                duration={500}
                offset={-105}
                className="flex py-5 px-[28px] bg-[#F5F5F5] m-w-[258px] space-x-[9.33px] cursor-pointer"
              >
                <AccommodationRuleIcon className="self-center" />
                <span>Accomodation rules</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 grid-row-2 gap-5 mb-16">
              <img
                src={AccommodationImageOne}
                alt="accommodation__image"
                className="w-[582px] h-[530px] row-span-2"
              />
              <img
                src={AccommodationImageTwo}
                alt="accommodation__image"
                className="w-[350px] h-[255px]"
              />
              <img
                src={AccommodationImageThree}
                alt="accommodation__image"
                className="w-[350px] h-[255px]"
              />
            </div>
            <p className="text-[#232323] font-semibold text-[50px] mb-10 w-[794px]">
              Primrose View
            </p>
            <div className="flex flex-col gap-y-4 w-[794px] mb-10">
              <p className="text-[28px] font-normal text-[#232323]">
                About this apartment
              </p>
              <p className="font-normal text-base ">
                From the outside this house looks nice and traditional. It has
                windows that let in plenty of light. The house is equipped with
                a small kitchen and two bathrooms, it also has a cozy living
                room, two bedrooms, a roomy dining area, a playroom and a cozy
                garage.The building is fairly rounded in shape.The roof is low
                and v-shaped and is covered with grey ceramic tiles. The house
                itself is surrounded by a tranquil garden, with beautiful
                primrose flowers and various rock formations...
              </p>
              <p className="text-base text-[#8D173A]">Read more</p>
            </div>
            <hr className="border-[1px] w-[794px] mb-10 border-solid border-[#D7D7D7]" />
            <div
              name="accommodation_rules"
              className="w-[794px] flex flex-col gap-y-4 mb-[112px]"
            >
              <span className="font-normal text-[28px] text-[#222222]">
                Accommodation rules
              </span>
              <div className="p-8 flex flex-col gap-y-6 bg-[#F5F5F5]">
                <div className="bg-[#FFFFFF] py-3 px-6 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[18px] ">
                    Damage to property
                  </span>
                  <span className="text-[16px] ">
                    Guests will be held responsible for any loss or damage to
                    the property caused by negligence either by themselves,
                    their guests or any person for whom they are responsible
                    for.
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-6 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[18px] ">Check-in</span>
                  <span className="text-[16px] ">
                    Check-in time is from 12:00 - 22:00
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-6 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[18px] ">Departure</span>
                  <span className="text-[16px] ">
                    Check-out time is from 12:00 - 13:00
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-6 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[18px] ">Pets</span>
                  <span className="text-[16px] ">
                    Pets are not allowed here. Special arrangements could be
                    made upon request.
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-6 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[18px] ">
                    Settlement of bills
                  </span>
                  <span className="text-[16px] ">
                    Bills can be paid through bank transfers or cash. Checks are
                    not allowed.
                  </span>
                </div>
              </div>
            </div>
          </main>
        </section>
        <Footer />
      </div>

      {/* Mobile Screen */}
      <div className="lg:hidden font-sans">
        <div className="h-full ">
          <header className="flex flex-row justify-between py-4 drop-shadow-[1px_2px_rgba(0,0,0,0.06)] mb-8 px-5 sm:px-10 ">
            <MoreIcon className="self-center" />
            <MenuIcon className="self-center" />
          </header>
          <div className="flex flex-col px-5 sm:px-10">
            <div className="flex flex-col gap-y-3 ">
              <div className="accommodation_content flex flex-col gap-y-3 overflow-x-scroll ">
                <div className="h-8 flex flex-row gap-x-3 text-xs font-semibold w-[573px] mb-4 ">
                  <button
                    type="button"
                    className="m-w-[97px] py-2 px-[10px] bg-[#F5F5F5] flex space-x-[9.33px] "
                  >
                    <RadioButtonCheckedIcon className="self-center" />
                    <span>Available</span>
                  </button>
                  <button
                    type="button"
                    className="flex py-2 px-[10px] bg-[#F5F5F5] m-w-[169px] space-x-[9.33px]"
                  >
                    <MoneyIcon className="self-center" />
                    <span>NGN 65,000 per night</span>
                  </button>
                  <button
                    type="button"
                    className="flex py-2 px-[10px] bg-[#F5F5F5] m-w-[94px] space-x-[9.33px]"
                  >
                    <LocationIcon className="self-center" />
                    <span>Location</span>
                  </button>
                  <Link
                    to="accommodation_rules_mobile"
                    smooth="true"
                    duration={500}
                    className="flex py-2 px-[10px] bg-[#F5F5F5] m-w-[177px] space-x-[9.33px]"
                  >
                    <AccommodationRuleIcon className="self-center" />
                    <span>Accomodation rules</span>
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="mb-4"
              src={AccommodationImage}
              alt="accommodation__image"
            />
            <div
              className="flex flex-col gap-y-3 px-3 py-3 max-h-[609px] rounded-[10px] shadow-[#001A1B] mb-8"
              style={{ boxShadow: "0px 2px rgba(0, 26, 27, 0.1)" }}
            >
              <div className="accomodation_details px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Location
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] " />
                <span className="text-[#232323] text-[14px] leading-[22px] font-normal">
                  Federal Housing Estate, Number 49 East-End, Jos, Plateau
                  State, Nigeria.
                </span>
              </div>
              <div className="accomodation_details px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7] ">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Reason for listing this accommodation
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] " />
                <span className="text-[#232323] text-[14px] leading-[22px] font-normal">
                  To offer guests an interesting and enriching experience that
                  makes a holiday memorable for all the right reasons.
                </span>
              </div>
              <div className="accomodation_details px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Hosting duration
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] " />
                <span className="text-[#232323] text-[16px] leading-[24px] font-normal flex gap-x-[11px]">
                  <DateRangeIcon /> <span>Fri 18 Nov - Fri 16 Dec</span>
                </span>
              </div>
              <div className="accomodation_details px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Accommodation type
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] " />
                <span className="text-[#232323] text-[16px] leading-[24px] font-normal flex gap-x-[11px]">
                  <HouseIcon /> <span>Apartment</span>
                </span>
              </div>
            </div>
            <p className="text-[#232323] font-semibold text-[36px] mb-8">
              Primrose View
            </p>
            <div className="flex flex-col gap-y-4 mb-8">
              <p className="text-[24px] leading-[30px] font-normal text-[#232323]">
                About this apartment
              </p>
              <p className="font-normal text-[14px] leading-[22px]">
                From the outside this house looks nice and traditional. It has
                windows that let in plenty of light. The house is equipped with
                a small kitchen and two bathrooms, it also has a cozy living
                room, two bedrooms, a roomy dining area, a playroom and a cozy
                garage.The building is fairly rounded in shape.The roof is low
                and v-shaped and is covered with grey ceramic tiles. The house
                itself is surrounded by a tranquil garden, with beautiful
                primrose flowers and various rock formations...
              </p>
              <p className="text-[16px] leading-[24px] text-[#8D173A]">
                Read more
              </p>
            </div>
            <hr className="border-[1px] border-solid border-[#D7D7D7] mb-8" />
            <div
              name="accommodation_rules_mobile"
              className="mb-[64px] flex flex-col gap-y-4"
            >
              <span className="font-normal text-[24px] text-[#222222]">
                Accommodation rules
              </span>
              <div className="px-6 py-6 flex flex-col gap-y-6 bg-[#F5F5F5]">
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">
                    Damage to property
                  </span>
                  <span className="text-[14px] ">
                    Guests will be held responsible for any loss or damage to
                    the property caused by negligence either by themselves,
                    their guests or any person for whom they are responsible
                    for.
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">Check-in</span>
                  <span className="text-[14px] ">
                    Check-in time is from 12:00 - 22:00
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">Departure</span>
                  <span className="text-[14px] ">
                    Check-out time is from 12:00 - 13:00
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">Pets</span>
                  <span className="text-[14px] ">
                    Pets are not allowed here. Special arrangements could be
                    made upon request.
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">
                    Settlement of bills
                  </span>
                  <span className="text-[14px] ">
                    Bills can be paid through bank transfers or cash. Checks are
                    not allowed.
                  </span>
                </div>
              </div>
            </div>
            <hr className="mb-10 border-[1px] border-[#D7D7D7]" />
            <footer className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-8">
                  <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col gap-y-5">
                      <div className="flex flex-col gap-y-4">
                        <p className="text-[16px] text-[#232323] font-semibold">
                          Newsletter
                        </p>
                        <p className="text-[14px]">
                          Subscribe to our newsletter now to get the best deals
                          for you.
                        </p>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email address"
                          className="py-[15px] pl-4 border-[1px] border-[#BCBCBC] rounded-lg focus:bg-none focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        className="w-[160px] bg-[#016D71] text-[#CCE6E7] text-[14px] py-3 px-6 rounded-xl cursor-pointer"
                      >
                        Subscribe!
                      </button>
                    </div>
                    <div className="w-[133px] flex flex-col gap-y-8">
                      <ul className="flex flex-col gap-y-4">
                        <li className="text-[#232323] text-[16px] font-semibold">
                          Company
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            About us
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            Careers
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            Contact us
                          </button>
                        </li>
                      </ul>
                      <ul className="flex flex-col gap-y-4">
                        <li className="text-[#232323] text-[16px] font-semibold">
                          products
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            Become our partner
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            List your property
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            Deals & Promo
                          </button>
                        </li>
                      </ul>
                      <ul className="flex flex-col gap-y-4">
                        <li className="text-[#232323] text-[16px] font-semibold">
                          Useful Links
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            FAQ
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            Blog
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-[#232323] text-[14px] font-normal cursor-pointer"
                            type="button"
                          >
                            Help & Support
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className=" border-[1px] border-[#D7D7D7]" />
                </div>
              </div>
              <div className="mb-8 flex flex-col gap-y-6">
                <SquazzleMobileLogo />
                <div className="flex flex-col gap-y-6 text-[#232323] text-[14px] w-[129px] items-start">
                  <button type="button">Private Policy</button>
                  <button type="button">Terms & Conditions</button>
                </div>
                <div className="flex gap-x-5 w-[188px]">
                  <button type="button">
                    <InstagramIcon />
                  </button>
                  <button type="button">
                    <FacebookIcon />
                  </button>
                  <button type="button">
                    <TwitterIcon />
                  </button>
                  <button type="button">
                    <LinkdnIcon />
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default accommodationDetails;
