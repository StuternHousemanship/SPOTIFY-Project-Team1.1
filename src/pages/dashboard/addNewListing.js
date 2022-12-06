import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrow-right-icon.svg";
import Overview1 from "../../components/listAccommodation/overview1";
import Overview2 from "../../components/listAccommodation/overview2";
import Description from "../../components/listAccommodation/description";
import UploadImages from "../../components/listAccommodation/uploadImages";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import Footer from "../../components/footer/footer";

const addNewListing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab1");
  const [progress, setProgress] = useState(0.25);

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Add New Listing - Squazzle";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  const handleSaveAndContinueToTab2 = () => {
    setActiveTab("tab2");
    setProgress(0.5);
  };

  const handleSaveAndContinueToTab3 = () => {
    setActiveTab("tab3");
    setProgress(0.75);
  };

  const handleSaveAndContinueToTab4 = () => {
    setActiveTab("tab4");
    setProgress(1);
  };

  const handleBackToTab1 = () => {
    setActiveTab("tab1");
    setProgress(0.25);
  };

  const handleBackToTab2 = () => {
    setActiveTab("tab2");
    setProgress(0.5);
  };

  const handleBackToTab3 = () => {
    setActiveTab("tab3");
    setProgress(0.75);
  };
  return (
    <>
      <DashboardNavs />
      <div className="font-sans gap-[24.33px] mt-[130px] ml-20 hidden md:flex">
        <button
          type="button"
          onClick={() => navigate(AuthRoutes.dashboardManageAccount)}
        >
          <h1 className="text-sm font-[600] opacity-[0.67]">Manage Account</h1>
        </button>
        <button
          type="button"
          onClick={() => navigate(AuthRoutes.listedAccommodations)}
        >
          <div className="flex items-center gap-[23.89px]">
            <ArrowRight />
            <h1 className="text-sm font-[600] opacity-[0.67]">My Listing</h1>
          </div>
        </button>
        <div className="flex items-center gap-[23.89px]">
          <ArrowRight />
          <h1 className="text-sm font-normal opacity-[0.67]">New Listing</h1>
        </div>
      </div>
      <p className="text-lg font-[600] text-squazzle-text-deep-grey2-color mt-8 ml-5 md:hidden">
        Add a new listing
      </p>
      <div className="">
        <div className="font-sans flex gap-[10px] md:gap-4 items-center justify-center mt-7 md:mt-[59px] px-10 md:px-0">
          <button
            type="button"
            onClick={() => {
              setActiveTab("tab1");
              setProgress(0.25);
            }}
          >
            <div
              className={
                activeTab === "tab1" || progress >= 0.25
                  ? "h-2 w-[72px] md:w-[75px] rounded-sm bg-[#56ACB0] "
                  : "h-2 w-[72px] md:w-[75px] rounded-sm bg-squazzle-button-bg-light-green-color"
              }
            >
              {}
            </div>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("tab2");
              setProgress(0.5);
            }}
          >
            <div
              className={
                activeTab === "tab2" || progress >= 0.5
                  ? "h-2 w-[72px] md:w-[75px] rounded-sm bg-[#56ACB0] "
                  : "h-2 w-[72px] md:w-[75px]  rounded-sm bg-squazzle-button-bg-light-green-color"
              }
            >
              {}
            </div>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("tab3");
              setProgress(0.75);
            }}
          >
            <div
              className={
                activeTab === "tab3" || progress >= 0.75
                  ? "h-2 w-[72px] md:w-[75px] rounded-sm bg-[#56ACB0] "
                  : "h-2 w-[72px] md:w-[75px] rounded-sm bg-squazzle-button-bg-light-green-color"
              }
            >
              {}
            </div>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("tab4");
              setProgress(1);
            }}
          >
            <div
              className={
                activeTab === "tab4" || progress === 1
                  ? "h-2 w-[72px] md:w-[75px]  rounded-sm bg-[#56ACB0] "
                  : "h-2 w-[72px] md:w-[75px]  rounded-sm bg-squazzle-button-bg-light-green-color"
              }
            >
              {}
            </div>
          </button>
        </div>
        <div className="absolute top-[-42px] right-[313px]">
          <p>1/4</p>
          <p>Overview</p>
        </div>
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
      <Footer />
    </>
  );
};

export default addNewListing;
