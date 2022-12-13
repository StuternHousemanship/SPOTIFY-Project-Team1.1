/* eslint-disable react/no-unescaped-entities */
import React from "react";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import Footer from "../../components/footer/footer";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import { ReactComponent as FilterIcon } from "../../assets/svg/filter-icon.svg";
import { ReactComponent as RadioButtonCheckedIcon } from "../../assets/svg/radio_button_checked_icon.svg";
import browseAccommodationBackgroundImage from "../../assets/img/browse-accommodation-background.png";
import BrowsePhoto1 from "../../assets/img/browse-photo1.png";
import BrowsePhoto2 from "../../assets/img/browse-photo2.png";
import BrowsePhoto3 from "../../assets/img/browse-photo3.png";
import BrowsePhoto4 from "../../assets/img/browse-photo4.png";
import BrowsePhoto5 from "../../assets/img/browse-photo5.png";
import BrowsePhoto6 from "../../assets/img/browse-photo6.png";
import BrowsePhoto7 from "../../assets/img/browse-photo7.png";
import BrowsePhoto8 from "../../assets/img/browse-photo8.png";

const browseAccommodation = () => {
  return (
    <>
      <DashboardNavs />
      <div className="hidden md:block font-sans">
        <main className="mt-[-25px] md:mt-[95px]">
          <section
            className="h-[442px]"
            style={{
              background: `linear-gradient(0deg, rgba(53, 53, 53, 0.2), rgba(53, 53, 53, 0.2)),url(${browseAccommodationBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="flex gap-6 items-center">
              <div className="flex gap-6 max-[1098px]:gap-5 items-center rounded-lg bg-[#f5f5f5]/60 p-8 max-[1098px]:p-7">
                <div className="flex gap-12 max-[1098px]:gap-11">
                  <label htmlFor="search" className="relative">
                    <SearchIcon className="absolute top-[38%] left-[19px]" />
                    <input
                      type="text"
                      placeholder="Search by state or city"
                      className="py-5 px-12 max-[1098px]:py-4 max-[1098px]:px-11 bg-white placeholder:text-squazzle-password-light-grey-color text-squazzle-text-deep-grey2-color text-lg max-[1098px]:text-base font-normal border border-squazzle-border-grey-color rounded-lg focus:outline-none"
                    />
                  </label>
                  <label htmlFor="search">
                    <input
                      type="text"
                      placeholder="Check in - Checkout"
                      className="py-5 px-4 max-[1098px]:py-4 max-[1098px]:px-13 bg-white placeholder:text-squazzle-password-light-grey-color text-squazzle-text-deep-grey2-color text-lg max-[1098px]:text-base font-normal border border-squazzle-border-grey-color rounded-lg focus:outline-none"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  className="text-xl max-[1098px]:text-lg font-bold py-5 px-14 max-[1098px]:py-4 max-[1098px]:px-[52px] text-squazzle-button-bg-light-green-color bg-squazzle-button-bg-deep-green-color rounded-xl"
                >
                  Search
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="flex justify-center items-center gap-[11px] bg-[#F5F5F5] rounded-xl px-[57.5px] py-5 max-[1098px]:py-4 max-[1098px]:px-[53.5px]"
                >
                  <FilterIcon />
                  <p className="text-squazzle-button-bg-deep-green-color text-xl max-[1098px]:text-lg font-bold">
                    Filter
                  </p>
                </button>
              </div>
            </div>
          </section>
        </main>
        <section className="py-16 px-20 grid grid-cols-4 gap-[44px] max-[1098px]:py-12 max-[1098px]:px-[40px]">
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={BrowsePhoto1} alt="a bedroom" />
            <div className="mt-8 text-lg font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Primrose View
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Duplex
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 65,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={BrowsePhoto2} alt="a bedroom" />
            <div className="mt-8 text-lg font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Stable House
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Mansion
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 45,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={BrowsePhoto3} alt="a bedroom" />
            <div className="mt-8 text-lg font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Lake View
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Apartment
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 15,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={BrowsePhoto4} alt="a bedroom" />
            <div className="mt-8 text-lg font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Ivylands
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Flat
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 5,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={BrowsePhoto5} alt="a bedroom" />
            <div className="mt-8 text-lg font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Sunny House
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Duplex
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 67,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={BrowsePhoto6} alt="a bedroom" />
            <div className="mt-8 text-lg font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Orchard View
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Flat
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 25,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={BrowsePhoto7} alt="a bedroom" />
            <div className="mt-8 text-lg font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Christopher's Lodge
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Flat
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 24,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={BrowsePhoto8} alt="a bedroom" />
            <div className="mt-8 text-lg font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Fir Lodge
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Flat
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 20,0000/</span>night
            </p>
          </section>
        </section>
      </div>
      {/* MOBILE SCREEN */}
      <div className="md:hidden font-sans">
        <main className="mt-[-25px]">
          <section
            className="h-[385px] py-6 px-5"
            style={{
              background: `linear-gradient(0deg, rgba(53, 53, 53, 0.2), rgba(53, 53, 53, 0.2)),url(${browseAccommodationBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
          >
            <div className="flex flex-col gap-6 bg-[#f5f5f5]/60 p-5">
              <label htmlFor="search" className="relative">
                <SearchIcon className="absolute top-[41%] left-[19px] h-[11.66px] w-[11.66px]" />
                <input
                  type="text"
                  placeholder="Search by state or city"
                  className="py-[15.5px] px-[44px] w-full bg-white placeholder:text-squazzle-password-light-grey-color text-squazzle-text-deep-grey2-color text-sm font-normal border border-squazzle-border-grey-color rounded-lg focus:outline-none"
                />
              </label>
              <label htmlFor="search">
                <input
                  type="text"
                  placeholder="Check in - Checkout"
                  className="py-[15.5px] px-4 w-full bg-white placeholder:text-squazzle-password-light-grey-color text-squazzle-text-deep-grey2-color text-sm font-normal border border-squazzle-border-grey-color rounded-lg focus:outline-none"
                />
              </label>
              <button
                type="button"
                className="text-sm font-bold py-5 w-full text-squazzle-button-bg-light-green-color bg-squazzle-button-bg-deep-green-color rounded-xl"
              >
                Search
              </button>
              <div>
                <button
                  type="button"
                  className="flex justify-center items-center gap-[11px] bg-[#F5F5F5] rounded-xl w-full py-5"
                >
                  <FilterIcon className="h-[9px] w-[13.5px]" />
                  <p className="text-squazzle-button-bg-deep-green-color text-sm font-bold">
                    Filter
                  </p>
                </button>
              </div>
            </div>
          </section>
        </main>
        <section className="py-8 px-5 flex flex-col gap-8 items-center">
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img
              src={BrowsePhoto1}
              alt="a bedroom"
              className="h-[230px] w-[318px]"
            />
            <div className="mt-8 text-base font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Primrose View
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Duplex
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 65,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img
              src={BrowsePhoto2}
              alt="a bedroom"
              className="h-[230px] w-[318px]"
            />
            <div className="mt-8 text-base font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Primrose View
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Duplex
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 65,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img
              src={BrowsePhoto3}
              alt="a bedroom"
              className="h-[230px] w-[318px]"
            />
            <div className="mt-8 text-base font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Primrose View
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Duplex
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 65,0000/</span>night
            </p>
          </section>
          <section
            className="p-4"
            style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}
          >
            <img
              src={BrowsePhoto4}
              alt="a bedroom"
              className="h-[230px] w-[318px]"
            />
            <div className="mt-8 text-base font-semibold text-squazzle-text-deep-grey1-color border border-transparent border-b-[#D7D7D7] pb-[6px]">
              Primrose View
            </div>
            <p className="mt-3 text-base text-squazzle-text-deep-grey2-color">
              Jos, Nigeria
            </p>
            <div className="flex gap-6 mt-3">
              <p className="text-base text-squazzle-text-deep-grey2-color flex items-center gap-2">
                <RadioButtonCheckedIcon />
                Available
              </p>
              <p className="text-base text-squazzle-text-deep-grey2-color">
                Duplex
              </p>
            </div>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-4">
              Duration: Fri 18 Nov - Fri 16 Dec
            </p>
            <p className="text-base text-squazzle-text-deep-grey2-color mt-8">
              <span className="font-semibold">NGN 65,0000/</span>night
            </p>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default browseAccommodation;
