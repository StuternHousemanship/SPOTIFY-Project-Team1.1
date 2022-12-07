import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import Footer from "../../components/footer/footer";
import dashboardBackgroundImage from "../../assets/img/dashboard-background-image.png";

const dashboardLandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Landing Page - Squazzle";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <>
      <DashboardNavs />
      <main className="flex flex-col items-center justify-between gap-4 mt-[-25px] md:mt-[95px] md:mb-[85px]">
        <section
          className="h-[233px] md:h-[509px]"
          style={{
            backgroundImage: `url(${dashboardBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <section className="flex flex-col justify-around text-center text-white min-h-full md:min-h-screen">
            <div className="flex flex-col justify-around items-center gap-4 md:gap-2">
              <h1 className="text-[28px] md:text-[54px] font-[600] max-w-[323.97px] md:max-w-[989px] mt-[-20px]">
                Find that perfect home with Squazzle
              </h1>
              <p className="text-[16px] md:text-[28px] font-[400] max-w-[350px] md:max-w-[818px] ">
                Get the best accommodation and list your property for the right
                prices.
              </p>
              <p className="hidden md:block text-[28px] font-[600]">
                So what would you like to do?
              </p>
            </div>
            <div className="hidden md:flex flex-row gap-[197px] justify-center mt-[-250px]">
              <button
                type="button"
                className="py-5 w-[320px] text-squazzle-button-bg-light-green-color font-bold bg-squazzle-button-bg-deep-green-color rounded-xl"
                onClick={() => navigate(AuthRoutes.listedAccommodations)}
              >
                List accomodation
              </button>
              <button
                type="button"
                className="py-5 w-[320px] text-white border-2 border-white font-bold bg-transparent rounded-xl"
              >
                Browse accomodation
              </button>
            </div>
          </section>
        </section>

        <div className="flex md:hidden flex-col gap-[13px] max-[883px]:gap-[8px] justify-center items-center mb-16">
          <button
            type="button"
            className="py-[15px] w-[320px] max-[883px]:max-w-[350px] text-squazzle-button-bg-light-green-color font-bold bg-squazzle-button-bg-deep-green-color rounded-xl"
            onClick={() => navigate(AuthRoutes.listedAccommodations)}
          >
            List accomodation
          </button>
          <button
            type="button"
            className="py-[15px] w-[330px] max-[883px]:max-w-[320px] text-squazzle-button-bg-deep-green-color border-2 border-squazzle-button-bg-deep-green-color font-bold bg-transparent rounded-xl"
          >
            Browse accomodation
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default dashboardLandingPage;
