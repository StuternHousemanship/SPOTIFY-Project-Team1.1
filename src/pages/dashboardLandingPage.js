import React from "react";
import dashboardBackgroundImage from "../assets/img/dashboard-background-image.png";

const dashboardLandingPage = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-4">
      <section
        className="h-full md:min-h-screen"
        style={{
          backgroundImage: `url(${dashboardBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <section className="flex flex-col justify-around items-center text-center text-white min-h-full md:min-h-screen">
          <div className="flex flex-col justify-around items-center gap-4 md:gap-2 md:pt-10">
            <h1 className="text-[28px] md:text-[54px] font-[600]">
              Find that perfect home with squazzle
            </h1>
            <p className="text-[16px] md:text-[28px] font-[400] max-w-[818px]">
              Get the best accommodation and list your property for the right
              prices.
            </p>
            <p className="hidden md:block text-[28px] font-[600]">
              So what would you like to do?
            </p>
          </div>
          <div className="hidden md:flex flex-row gap-4 justify-center pt-10">
            <button
              type="button"
              className="py-5 w-[320px] text-squazzle-button-font-deep-green-color font-bold bg-squazzle-button-bg-light-green-color rounded-xl"
            >
              List accomodation
            </button>
            <button
              type="button"
              className="py-5 w-[320px] text-squazzle-button-font-deep-green-color font-bold bg-squazzle-button-bg-light-green-color rounded-xl"
            >
              Browse accomodation
            </button>
          </div>
        </section>
      </section>

      <div className="flex md:hidden flex-col gap-4 justify-center items-center">
        <button
          type="button"
          className="py-3 px-6 w-full text-squazzle-button-font-deep-green-color font-bold bg-squazzle-button-bg-light-green-color rounded-xl"
        >
          List accomodation
        </button>
        <button
          type="button"
          className="py-3 px-6 w-full text-squazzle-button-font-deep-green-color font-bold bg-squazzle-button-bg-light-green-color rounded-xl"
        >
          Browse accomodation
        </button>
      </div>
    </main>
  );
};

export default dashboardLandingPage;
