import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as ExploreNow } from "../../assets/svg/explore-now-icon.svg";
import Footer from "../../components/footer/footer";
import LandingPageNav from "../../components/navigation/landingPageNav";
import landingPagePhoto1 from "../../assets/img/landing-page-photo1.png";
import "../../App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Landing Page - Squazzle";

    // navigate(NonAuthRoutes.login);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <>
      <LandingPageNav />
      <div
        className="h-screen flex font-sans"
        style={{ justifyContent: "space-between" }}
      >
        <section className="pl-[129px] mt-[188px]">
          <h1 className="text-[54px] leading-[73px] font-bold max-w-[595px]">
            The easiest way to find the property of your choice
          </h1>
          <p className="text-base font-normal text-squazzle-text-deep-grey1-color max-w-[445px] mt-5">
            We provide various property models for you at affordable prices and
            the best quality
          </p>
          <div className="flex flex-row gap-[9px] items-center mt-[60px]">
            <button
              type="button"
              onClick={() => navigate(NonAuthRoutes.signUp)}
            >
              <p className="text-lg font-bold text-[#018388]">
                Explore our properties Now
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate(NonAuthRoutes.signUp)}
            >
              <ExploreNow />
            </button>
          </div>
        </section>
        <img src={`${landingPagePhoto1}`} alt="a beautiful home with a pool" />
      </div>
      <Footer />
    </>
  );
}

export default App;
