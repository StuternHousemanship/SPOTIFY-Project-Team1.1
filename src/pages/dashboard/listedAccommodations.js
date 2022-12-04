import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import Footer from "../../components/footer/footer";
import { ReactComponent as AddNewListingIcon } from "../../assets/svg/add-new-listing-icon.svg";

const listedAccommodations = () => {
  const navigate = useNavigate();
  return (
    <>
      <DashboardNavs />
      <main className="font-sans mt-[80px] md:mt-[170px] mb-[192px] ml-[80px]">
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
