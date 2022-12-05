import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import Footer from "../../components/footer/footer";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrow-right-icon.svg";
import { ReactComponent as AddNewListingIcon } from "../../assets/svg/add-new-listing-icon.svg";
import accommodationImage from "../../assets/img/accomodation_image_one_desktop.png";

const listedAccommodations = () => {
  const navigate = useNavigate();
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
        <div className="flex items-center gap-[23.89px]">
          <ArrowRight />
          <h1 className="text-sm font-normal opacity-[0.67]">My Listing</h1>
        </div>
      </div>
      <p className="text-lg font-[600] text-squazzle-text-deep-grey2-color mt-8 ml-5 md:hidden">
        Add a new listing
      </p>
      <main className="font-sans mt-[40px] mb-[190px] md:ml-20 md:mt-[30px] flex items-center gap-5 flex-col md:flex-row  md:items-center">
        <button
          type="button"
          className="w-[305px]"
          onClick={() => navigate(AuthRoutes.dashboardAccommodationDetails)}
        >
          <img
            src={accommodationImage}
            alt="primrose cover"
            className="h-[222px] w-[305px]"
          />
          <div className="py-2 bg-squazzle-background-white-color text-squazzle-text-deep-grey2-color text-sm lg:text-lg font-[600]">
            Primrose View
          </div>
        </button>
        <button
          type="button"
          className="w-[305px]"
          onClick={() => navigate(AuthRoutes.addNewListing)}
        >
          <div className="relative bg-squazzle-background-white-color h-[222px] w-[305px] ">
            <AddNewListingIcon className="absolute top-[84.335px] left-[125px]" />
          </div>
          <div className="py-2 bg-[#D7D7D7] text-squazzle-text-deep-grey2-color text-sm lg:text-lg font-[600]">
            List new property
          </div>
        </button>
      </main>
      <Footer />
    </>
  );
};

export default listedAccommodations;
