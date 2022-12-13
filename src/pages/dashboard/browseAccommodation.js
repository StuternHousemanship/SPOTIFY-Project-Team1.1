import React from "react";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import Footer from "../../components/footer/footer";
import browseAccommodationBackgroundImage from "../../assets/img/browse-accommodation-background.png";

const browseAccommodation = () => {
  return (
    <>
      <DashboardNavs />
      <main className="mt-[-25px] md:mt-[95px] md:mb-[85px]">
        <section
          className="h-[233px] md:h-[509px]"
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
          <div className="flex gap-6">
            <div className="rounded-lg p-8 bg-[#f5f5f5] opacity-60">search</div>
            <button
              type="button"
              className="bg-[#F5F5F5] rounded-xl py-5 px-[57.5px]"
            >
              Filter
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default browseAccommodation;
