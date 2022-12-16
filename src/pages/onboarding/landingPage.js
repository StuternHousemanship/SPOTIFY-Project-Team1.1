import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as ExploreNow } from "../../assets/svg/explore-now-icon.svg";
import Footer from "../../components/footer/footer";
import LandingPageNav from "../../components/navigation/landingPageNav";
import landingPagePhoto1 from "../../assets/img/landing-page-photo1.png";
import landingPagePhoto2 from "../../assets/img/landing-page-photo2.png";
import landingPagePhoto3 from "../../assets/img/landing-page-photo3.png";
import landingPagePhoto4 from "../../assets/img/landing-page-photo4.png";
import landingPagePhoto5 from "../../assets/img/landing-page-photo5.png";
import landingPageIcon1 from "../../assets/svg/landing-page-icon1.svg";

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
    <div className="relative font-sans">
      <LandingPageNav openModal={openModal} />
      <div className="hidden md:flex flex-col gap-y-20">
        <div
          className="min-h-screen flex font-sans"
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

        <section className="flex items-center justify-center bg-squazzle-button-bg-deep-green-color h-[659px]">
          <div className="relative flex flex-row items-center justify-center gap-8 text-squazzle-profileCard-background-white-color w-full">
            <div className="flex-[0.7]">
              <img
                src={landingPagePhoto2}
                alt="a nice home"
                className="h-[507px] w-[385px] mx-auto relative z-[1]"
              />
              <div className="flex flex-col gap-8 absolute left-[-100px] top-[40%] max-[1030px]:top-[20%]">
                <div className="bg-squazzle-landingPage-bar-orange-color h-[42px] w-[400px] max-lg:w-[250px] -rotate-[40deg]" />
                <div className="bg-squazzle-landingPage-bar-black-color h-[42px] w-[400px] max-lg:w-[250px] -rotate-[40deg]" />
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[533px]">
              <h1 className="font-bold text-[40px]">
                What makes us different from others
              </h1>
              <p className="font-normal text-[20px] leading-[35px]">
                We have more than five years of experience to provide suitable
                housing for you to live in later, we also ensure that all the
                housing we provide a conducive environment with basic housing
                facilities that have met the standards, so you&apos;ll feel
                satisfied when you use squazzle.
              </p>
              <div className="flex flex-row items-center justify-between w-full max-w-[504px] gap-5 mt-4">
                <div className="flex flex-col w-[88px]">
                  <h2 className="font-semibold text-[32px]">5</h2>
                  <p className="font-normal text-[16px]">Years of experience</p>
                </div>
                <div className="flex flex-col w-[88px]">
                  <h2 className="font-semibold text-[32px]">250</h2>
                  <p className="font-normal text-[16px]">Apartments listed</p>
                </div>
                <div className="flex flex-col w-[88px]">
                  <h2 className="font-semibold text-[32px]">10+</h2>
                  <p className="font-normal text-[16px]">Awards gained</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE VIEW */}
      <div className="flex justify-center md:hidden mt-[141px] font-sans">
        <main className="">
          <div className="flex flex-col items-center px-5">
            <h1 className="text-[36px] font-bold leading-[45px] max-w-[349px]">
              The easiest way to find the property of your choice
            </h1>
            <p className="text-squazzle-text-deep-grey1-color text-base max-w-[334px] mt-5">
              We provide various property models for you at affordable prices
              and the best quality
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
              className="h-[513px] w-[351px] mb-[34px] rounded-[4px]"
              style={{ boxShadow: "0px, 4px, rgba(0, 0, 0, 0.25)" }}
            />
          </div>

          <section className="flex items-center justify-center min-h-screen bg-squazzle-button-bg-deep-green-color text-squazzle-profileCard-background-white-color">
            <div className="flex flex-col items-center gap-5 px-5 py-8 text-center">
              <h1 className="font-bold text-[32px]">
                What makes us different from others
              </h1>
              <p className="font-normal text-[16px] leading-[35px]">
                We have more than five years of experience to provide suitable
                housing for you to live in later, we also ensure that all the
                housing we provide a conducive environment with basic housing
                facilities that have met the standards, so you&apos;ll feel
                satisfied when you use squazzle.
              </p>
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center w-[88px]">
                  <h2 className="font-semibold text-[32px]">5</h2>
                  <p className="font-normal text-[16px]">Years of experience</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[88px] text-center">
                  <h2 className="font-semibold text-[32px]">250</h2>
                  <p className="font-normal text-[16px]">Apartments listed</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[88px] text-center">
                  <h2 className="font-semibold text-[32px]">10+</h2>
                  <p className="font-normal text-[16px]">Awards gained</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center min-h-screen ">
            <div className="flex flex-col items-center gap-5 px-5 py-8 w-[350px]">
              <div className="flex flex-col">
                <h1 className="font-bold text-[32px] text-squazzle-text-black-color leading-[42px]">
                  The most trusted Real Estate website
                </h1>
                <p className="font-normal text- text-squazzle-terms-policy-grey-color mt-5">
                  We ensure that what you see is what you get. Our displayed
                  property have been reviewed and verified
                </p>
              </div>
              <div className="relative flex flex-col items-center justify-between h-[692px] gap w-full">
                <div
                  style={{
                    backgroundImage: `url(${landingPagePhoto3})`,
                    backgroundSize: "cover",
                    height: "571px",
                    width: "100%",
                  }}
                >
                  <img
                    src={landingPagePhoto4}
                    alt="a nice apartment"
                    className="border-t-2 border-l-2 rounded-br-lg"
                  />
                </div>
                <img
                  src={landingPageIcon1}
                  alt="testimonies"
                  className="absolute bottom-[80px] right-0"
                />
                <button
                  type="button"
                  onClick={() => navigate(NonAuthRoutes.signUp)}
                  className="bg-squazzle-button-bg-deep-green-color text-squazzle-profileCard-background-white-color font-bold text-xl w-full py-[16px] rounded-xl"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center min-h-screen px-5 w-full">
            <div className="flex flex-col w-full">
              <div
                className="rounded-tl-[20px] rounded-tr-[20px]"
                style={{
                  backgroundImage: `url(${landingPagePhoto5})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "253px",
                  width: "100%",
                }}
              />
              <div className="flex-1 flex items-center justify-center rounded-bl-[20px] rounded-br-[20px] bg-squazzle-text-deep-green-color p-5">
                <div className="flex flex-col gap-4 text-squazzle-profileCard-background-white-color">
                  <h1 className="font-bold text-[32px]">
                    List your properties with us
                  </h1>
                  <p className="text-base font-normal">
                    Space sharing earns you extra income and opens up new
                    opportunities
                  </p>
                  <button
                    type="button"
                    className="bg-squazzle-button-bg-deep-green-color text-squazzle-profileCard-background-white-color font-bold text-xl mx-auto w-full max-w-[154px] py-[16px] rounded-xl"
                    onClick={() => navigate(NonAuthRoutes.signUp)}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
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
