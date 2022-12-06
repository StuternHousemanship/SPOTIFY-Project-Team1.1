import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import Footer from "../../components/footer/footer";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import { ReactComponent as ArrowForwardIcon } from "../../assets/svg/arrow_forward_icon.svg";
import { ReactComponent as ArrowBackIcon } from "../../assets/svg/arrow_back_icon.svg";
import { ReactComponent as OverviewIcon } from "../../assets/svg/overview-icon.svg";
import { ReactComponent as DescriptionIcon } from "../../assets/svg/description-icon.svg";
import { ReactComponent as GalleryIcon } from "../../assets/svg/gallery-icon.svg";
import { ReactComponent as PricingIcon } from "../../assets/svg/pricing-icon.svg";
import Overview1 from "../../components/listAccommodation/overview1";
import Overview2 from "../../components/listAccommodation/overview2";
import Description from "../../components/listAccommodation/description";
import UploadImages from "../../components/listAccommodation/uploadImages";

const editAccommodation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab1");

  const handleSaveAndContinueToTab2 = () => {
    setActiveTab("tab2");
  };

  const handleSaveAndContinueToTab3 = () => {
    setActiveTab("tab3");
  };

  const handleSaveAndContinueToTab4 = () => {
    setActiveTab("tab4");
  };

  const handleBackToTab1 = () => {
    setActiveTab("tab1");
  };

  const handleBackToTab2 = () => {
    setActiveTab("tab2");
  };

  const handleBackToTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <>
      <DashboardNavs />
      <section className="md:flex lg:gap-6 md:pl-[70px]">
        <aside className="pt-[137px] hidden md:block">
          <div className="flex gap-x-5 max-[1116px]:gap-x-1 mb-[40px] w-[305px]">
            <button
              type="button"
              className="cursor-pointer text-[#353535] text-sm max-[1116px]:text-xs font-semibold"
              onClick={() => navigate(AuthRoutes.dashboardManageAccount)}
            >
              Manage Account
            </button>
            <ArrowForwardIcon />
            <button
              type="button"
              className="text-sm max-[1116px]:text-xs text-[#353535]"
            >
              My Listing
            </button>
          </div>
          <div className="py-5 px-6 bg-[#001A1B] mb-4">
            <button
              type="button"
              className="cursor-pointer text-sm max-[1116px]:text-xs text-[#CCE6E7] flex gap-2"
              onClick={() => navigate(AuthRoutes.dashboardAccommodationDetails)}
            >
              <ArrowBackIcon />
              <span>Back to my listing</span>
            </button>
          </div>

          <div
            className="py-3 px-3 flex flex-col"
            style={{
              backgroundColor: "white",
              boxShadow: "0px 2px 10px rgba(0, 26, 27, 0.1)",
            }}
          >
            <button type="button" onClick={() => setActiveTab("tab1")}>
              <div className="accomodation_details px-3 py-3  hover:bg-[#CCE6E7] border border-transparent border-b-[#D7D7D7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px] flex justify-start items-center gap-5">
                  <OverviewIcon className="h-[18.67px] w-[18.67px]" />
                  Overview
                </span>
              </div>
            </button>
            <button type="button" onClick={() => setActiveTab("tab2")}>
              <div className="accomodation_details px-3 py-3  hover:bg-[#CCE6E7] border border-transparent border-b-[#D7D7D7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px] flex justify-start items-center gap-5">
                  <PricingIcon className="h-[18.67px] w-[18.67px]" />
                  Pricing
                </span>
              </div>
            </button>
            <button type="button" onClick={() => setActiveTab("tab3")}>
              <div className="accomodation_details px-3 py-3  hover:bg-[#CCE6E7] border border-transparent border-b-[#D7D7D7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px] flex justify-start items-center gap-5">
                  <DescriptionIcon className="h-[18.67px] w-[18.67px]" />
                  Description
                </span>
              </div>
            </button>
            <button type="button" onClick={() => setActiveTab("tab4")}>
              <div className="accomodation_details px-3 py-3  hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px] flex justify-start items-center gap-5">
                  <GalleryIcon className="h-[18.67px] w-[18.67px]" />
                  Gallery
                </span>
              </div>
            </button>
          </div>
        </aside>
        <main className="md:pt-[181px]">
          <div className="flex flex-row gap-[12px] overflow-x-scroll scrollbar-hide md:hidden font-sans px-5">
            <button
              type="button"
              className="text-xs font-semibold bg-squazzle-background-white-color hover:bg-[#CCE6E7] py-[10px] px-[12px] flex gap-x-[10px] items-center"
              onClick={() => setActiveTab("tab1")}
            >
              <OverviewIcon />
              Overview
            </button>
            <button
              type="button"
              className="text-xs font-semibold bg-squazzle-background-white-color hover:bg-[#CCE6E7] py-[10px] px-[12px] flex gap-x-[10px] items-center"
              onClick={() => setActiveTab("tab2")}
            >
              <PricingIcon className="h-[13.33px] w-[10.67px]" />
              Pricing
            </button>
            <button
              type="button"
              className="text-xs font-semibold bg-squazzle-background-white-color hover:bg-[#CCE6E7] py-[10px] px-[12px] flex gap-x-[10px] items-center"
              onClick={() => setActiveTab("tab3")}
            >
              <DescriptionIcon />
              Description
            </button>
            <button
              type="button"
              className="text-xs font-semibold bg-squazzle-background-white-color hover:bg-[#CCE6E7] py-[10px] px-[12px] flex gap-x-[10px] items-center"
              onClick={() => setActiveTab("tab4")}
            >
              <GalleryIcon />
              Gallery
            </button>
          </div>
          {activeTab === "tab1" ? (
            <Overview1 handleSaveAndContinue={handleSaveAndContinueToTab2} />
          ) : (
            ""
          )}
          {activeTab === "tab2" ? (
            <Overview2
              handleSaveAndContinue={handleSaveAndContinueToTab3}
              handleBackToTab1={handleBackToTab1}
            />
          ) : (
            ""
          )}
          {activeTab === "tab3" ? (
            <Description
              handleSaveAndContinue={handleSaveAndContinueToTab4}
              handleBackToTab2={handleBackToTab2}
            />
          ) : (
            ""
          )}
          {activeTab === "tab4" ? (
            <UploadImages handleBackToTab3={handleBackToTab3} />
          ) : (
            ""
          )}
        </main>
      </section>
      <Footer />
    </>
  );
};

export default editAccommodation;
