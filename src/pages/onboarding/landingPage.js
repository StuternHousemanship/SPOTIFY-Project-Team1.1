import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as ExploreNow } from "../../assets/svg/explore-now-icon.svg";
import Footer from "../../components/footer/footer";
import LandingPageNav from "../../components/navigation/landingPageNav";
import landingPagePhoto1 from "../../assets/img/landing-page-photo1.png";
import { ReactComponent as CloseModalIcon } from "../../assets/svg/close-modal-icon.svg";
import "../../App.css";

function App() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Landing Page - Squazzle";

    // navigate(NonAuthRoutes.login);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="relative">
      <LandingPageNav openModal={openModal} />
      <div className="hidden md:block">
        <div
          className="h-screen flex font-sans"
          style={{ justifyContent: "space-between" }}
        >
          <section className="px-[60px] mt-[168px] min-[1280px]:mt-[208px] min-[1280px]:px-[80px] max-[908px]:px-[40px]">
            <h1 className="text-[54px] leading-[73px] font-bold max-w-[595px] max-[1150px]:text-5xl max-[1150px]:leading-[63px] max-[908px]:text-4xl">
              The easiest way to find the property of your choice
            </h1>
            <p className="text-base font-normal text-squazzle-text-deep-grey1-color max-w-[445px] mt-5 max-[908px]:text-sm">
              We provide various property models for you at affordable prices
              and the best quality
            </p>
            <div className="flex flex-row gap-[9px] items-center mt-[60px]">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.signUp)}
              >
                <p className="text-lg font-bold text-[#018388] max-[908px]:text-base">
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
          <img
            src={`${landingPagePhoto1}`}
            alt="a beautiful home with a pool"
            className="max-[1150px]:w-[480px] max-[1150px]:h-[701.914px] max-[1010px]:w-[470px] max-[1010px]:h-[687.29px] max-[908px]:w-[400px] max-[908px]:h-[584.9287px]"
          />
        </div>
      </div>
      <div className="flex justify-center md:hidden px-5 mt-[141px] font-sans">
        <div>
          <h1 className="text-[36px] font-bold leading-[45px] max-w-[349px]">
            The easiest way to find the property of your choice
          </h1>
          <p className="text-squazzle-text-deep-grey1-color text-base max-w-[334px] mt-5">
            We provide various property models for you at affordable prices and
            the best quality
          </p>
          <div className="flex flex-row gap-[9px] items-center mt-[30px] mb-10">
            <button
              type="button"
              onClick={() => navigate(NonAuthRoutes.signUp)}
            >
              <p className="font-bold text-[#018388] text-base">
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
          <img
            src={`${landingPagePhoto1}`}
            alt="a beautiful home with a pool"
            className="h-[513px] w-[351px] mb-[34px]"
          />
        </div>
      </div>
      <Footer />
      {modalIsOpen ? (
        <ul className="fixed bg-white flex flex-col gap-6 font-normal text-base max-[1030px]:text-sm text-squazzle-text-deep-grey2-color top-0 right-0 left-0 bottom-0 px-5 z-20">
          <button type="button" onClick={() => setModalIsOpen(false)}>
            <div className="flex justify-end mt-6">
              <CloseModalIcon />
            </div>
          </button>
          <li className="mt-6">
            <button type="button">About us</button>
          </li>
          <li>
            <button type="button">FAQ</button>
          </li>
          <li className="">
            <button
              type="button"
              className="text-white bg-[#002C2D] text-base font-normal py-[6px] px-[17px] rounded-[6px]"
              onClick={() => navigate(NonAuthRoutes.login)}
            >
              Sign in
            </button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
