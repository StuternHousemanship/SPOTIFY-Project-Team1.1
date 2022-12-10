import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import Footer from "../../components/footer/footer";
import { ReactComponent as UserIcon } from "../../assets/svg/profile-icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/profile2-icon.svg";
import { ReactComponent as MansionIcon } from "../../assets/svg/mansion-icon.svg";
import { ReactComponent as PrivacyIcon } from "../../assets/svg/privacy-icon.svg";
import { ReactComponent as GreaterThanIcon } from "../../assets/svg/greaterthan-icon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svg/notification-icon.svg";
import { ReactComponent as PaymentIcon } from "../../assets/svg/payment-icon.svg";
import { ReactComponent as EditIcon } from "../../assets/svg/edit-icon.svg";
import DeleteAccountModal from "../../components/modal/deleteAccount";

const profile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    document.title = "User Profile - Squazzle";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="hidden sm:block relative">
        <DashboardNavs />
        <div className="bg-[#ffff]">
          <div>
            <ul className="flex flex-[0.4] flex-row items-center pl-[5rem] space-x-4 font-san font-[600] text-[14px] text-squazzle-text-deep-grey2-color mt-7">
              <li>
                <button type="button">Manage Account</button>
              </li>
              <GreaterThanIcon className="cursor-pointer inset-2 " />
              <li>
                <button type="button">Personal Details</button>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 p-[3rem] items-start">
            <div className="p-[1rem]  rounded  ">
              <div className="flex justify-center flex-col  gap-[10px] shadow rounded-lg border-[1px] border-solid border-[#F5F5F5] bg-[#ffffff]  box-border h-[293px] w-[305px] pt-[24px] pb-[40px] items-center mb-10 ">
                <p className="font-[600] text-[28px] leading-[35px] mt-5">
                  Zhara Doe
                </p>
                <div className="font-[400] gap-4 text-[20px]">
                  <button type="button">zhara@gmail.com</button>
                </div>
                <ul className="flex-auto w-32  flex flex-col items-center justify-between ">
                  <li>
                    <UserIcon className="w-[86.67px] h-[86.67px] position-absolute mt-5 cursor-pointer" />
                  </li>
                </ul>
                <div className="font-Sans flex gap-2 text-[15px] leading-[24px] font-[400] text-[#353535">
                  <button
                    type="button"
                    onClick={() => navigate(AuthRoutes.editProfile)}
                  >
                    Edit profile
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(AuthRoutes.editProfile)}
                  >
                    <EditIcon className="cursor-pointer inset-2" />
                  </button>
                </div>
              </div>
              <div className="p-[1rem] bg-[white]  box-border w-[305px] shadow rounded-lg border-[1px] border-solid border-[#F5F5F5] pt-[24px] pb-[40px] items-center mb-10">
                <ul className=" ml-2">
                  <li className="border-[#D7D7D7] hover:bg-[#CCE6E7] p-2 border-b-[1px] w-full flex gap-5 items-center my-3">
                    <ProfileIcon className="w-[16px] h-[20px] cursor-pointer inset-2" />
                    <p className="text-[15px] font-[600]  text-[black]">
                      Personal details
                    </p>
                  </li>
                  <button
                    type="button"
                    className="w-full"
                    onClick={() => navigate(AuthRoutes.listedAccommodations)}
                  >
                    <li className="border-[#D7D7D7] hover:bg-[#CCE6E7] p-2 border-b-[1px] w-full flex gap-5 items-center my-3">
                      <MansionIcon className="w-[16px] h-[20px] cursor-pointer inset-2" />
                      <p className=" text-[15px] font-[600] text-[black]">
                        My listings
                      </p>
                    </li>
                  </button>
                  <li className="border-[#D7D7D7] hover:bg-[#CCE6E7] p-2 border-b-[1px] w-full flex gap-5 items-center my-3">
                    <PrivacyIcon className="w-[16px] h-[20px] cursor-pointer inset-2" />
                    <p className="text-[15px] font-[600] text-[black]">
                      Privacy settings
                    </p>
                  </li>
                  <li className="border-[#D7D7D7] hover:bg-[#CCE6E7] p-2 border-b-[1px] w-full flex gap-5 items-center my-3">
                    <NotificationIcon className="w-[16px] h-[20px] cursor-pointer inset-2" />
                    <p className="text-[15px] font-[600] text-[black]">
                      Notification
                    </p>
                  </li>
                  <li className="border-[#D7D7D7] hover:bg-[#CCE6E7] p-2 border-b-[1px] w-full flex gap-5 items-center my-3">
                    <PaymentIcon className="w-[16px] h-[20px] cursor-pointer inset-2" />
                    <p className="text-[15px]  font-[600] text-[black]">
                      Payment details
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-20 box-border w-[774px] py-12 rounded-lg border-[2px] border-solid border-[#F5F5F5] bg-[#ffffff] mt-4 ">
              <p className="font-Sans text-[24px] leading-[30px] text-[#232323] font-[600] justify-items-start">
                Personal Details
              </p>
              <p className="font-sans  text-[18px] font-[400] leading-[24px] text-[#787878] mt-2">
                update your personal info and how we can reach you
              </p>
              <div>
                <p className="font-Sans text-[18px]  font-[600] justify-items-start text-[#232323] mt-9">
                  Name
                </p>
                <p className="font-sans text-[15px]  font-[400]  text-[#353535]">
                  Zhara Doe
                </p>
              </div>
              <div>
                <p className="font-sans text-[18px] leading-[26px] font-[600] text-[#232323]  justify-items-start mt-6">
                  Email address
                </p>
                <div className="flex gap-[12px] flex-row">
                  <p className="font-sans text-[15px] leading-[24px] font-[400]  text-[#353535]">
                    zharadoe@gmail.com
                  </p>
                  <p className="text-[#DEF2E4] grid place-items-center  font-[400] px-[4px] text-sm bg-[#3d7d50] rounded">
                    Verified
                  </p>
                </div>
              </div>
              <div>
                <p className="font-sans text-[18px] leading-[26px] font-[600] text-[#232323] justify-items-start mt-6">
                  Occupation
                </p>
                <p className="font-sans text-[15px] leading-[24px] font-[400]  text-[#353535]">
                  Real Estate Manager
                </p>
              </div>
              <div>
                <p className="font-sans text-[18px] leading-[26px] font-[600] text-[#232323] justify-items-start mt-6">
                  Gender
                </p>
                <p className="font-sans text-[15px] leading-[24px] font-[400]  text-[#353535]">
                  Female
                </p>
              </div>
              <div>
                <p className="font-sans text-[18px] leading-[26px] font-[600] text-[#232323] justify-items-start mt-6">
                  Address
                </p>
                <p className="font-sans text-[15px] leading-[24px] font-[400] text-[#353535]">
                  No 49 East-End, Jos, Plateau State, Nigeria.
                </p>
              </div>
              <div>
                <p className="font-sans text-[18px] leading-[26px] font-[600] text-[#232323] justify-items-start mt-6">
                  Phone number
                </p>
                <p className="font-sans text-[15px] leading-[24px] font-[400] text-[#353535]">
                  08123181961
                </p>
              </div>
              <div>
                <p className="font-sans text-[18px] leading-[26px] font-[600] text-[#232323] justify-items-start mt-6">
                  NIN
                </p>
                <p className="font-sans text-[15px] leading-[24px] font-[400] text-[#353535]">
                  75312208056610
                </p>
              </div>
              <div>
                <p className="font-sans text-[18px] leading-[26px] font-[600] text-[#232323]  justify-items-start mt-6">
                  About me
                </p>
                <p className="font-sans text-[15px] leading-[24px] font-[400]  text-[#353535]">
                  Lorem ipsum is simply a dummy text of the printing and
                  typesetting industry.lorem ipsum has been in the industry
                </p>
              </div>
              <hr className="text-[#D7D7D7] mt-6" />
              <ul>
                <li className="font-sans text-[18px] leading-[26px] font-[600] text-[#8D173A] mt-6">
                  <button type="button" onClick={() => setIsOpen(true)}>
                    Delete Account
                  </button>
                </li>
              </ul>
              <p className="font-sans text-[15px] leading-[24px] font-[400]  justify-items-start ">
                Permanently delete your account and all your content
              </p>
            </div>
          </div>
          <Footer />
        </div>
        {isOpen ? <DeleteAccountModal closeModal={closeModal} /> : ""}
      </div>

      {/* MOBILE SCREEN */}
      <div className="sm:hidden font-sans px-5">
        <DashboardNavs />
        <div>
          <UserIcon className="w-[45px] h-[45px]  mt-6  cursor-pointer" />
        </div>
        <h1 className="font-[600] text-[24px] mt-5 text-[#232323]">
          Zhara Doe
        </h1>
        <p className="font-[400] text-sm mt-[8px] text-[#353535]">
          zhardoe@gmail.com
        </p>
        <div className=" flex  flex-row gap-2 mt-4 ">
          <button
            type="button"
            className="font-[400] text-sm"
            onClick={() => navigate(AuthRoutes.editProfile)}
          >
            Edit profile
          </button>
          <button
            type="button"
            onClick={() => navigate(AuthRoutes.editProfile)}
          >
            <EditIcon className="cursor-pointer h-[12px] w-[12px]" />
          </button>
        </div>
        <section className="mt-8">
          <p className="font-[600] text-lg text-[#232323]">Name</p>
          <p className="font-[400] text-sm text-[#353535]">Zhara Doe</p>
        </section>
        <section className="mt-6">
          <p className="font-[600] text-lg text-[#232323]">Email</p>
          <div className="flex flex-row gap-4">
            <p className="font-[400] text-sm text-[#353535]">
              Zharadoe@gmail.com
            </p>
            <p className="text-[#DEF2E4] grid place-items-center px-[4px] text-xs bg-[#3d7d50] rounded">
              Verified
            </p>
          </div>
        </section>
        <section className="mt-6">
          <p className="font-[600] text-lg text-[#232323]">Occupation</p>
          <p className="font-[400] text-sm text-[#353535]">
            Real Estate Manager
          </p>
        </section>
        <section className="mt-6">
          <p className="font-[600] text-lg text-[#232323]">Gender</p>
          <p className="font-[400] text-sm text-[#353535]">Female</p>
        </section>
        <section className="mt-6">
          <p className="font-[600] text-lg text-[#232323]">Address</p>
          <p className="font-[400] text-sm text-[#353535]">
            No 49 East-End, Jos, Plateau State, Nigeria.
          </p>
        </section>
        <section className="mt-6">
          <p className="font-[600] text-lg text-[#232323]">Phone Number</p>
          <p className="font-[400] text-sm text-[#353535]">08094580713</p>
        </section>
        <section className="mt-6">
          <p className="font-[600] text-lg text-[#232323]">NIN</p>
          <p className="font-[400] text-sm text-[#353535]">273294580713</p>
        </section>
        <section className="mt-6 mb-6">
          <p className="font-[600] text-lg text-[#232323]">About Me</p>
          <p className="font-[400] text-sm text-[#353535]">
            Lorem ipsum is simply a dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </section>
        <section className="border border-transparent border-t-[#D7D7D7] pt-6 pb-16 ">
          <p className="text-squazzle-profileCard-logout-red-color font-[600] text-lg">
            Delete Account
          </p>
          <p className="mt-[8px] font-[400] text-sm">
            Permanently delete your account and all your content
          </p>
        </section>

        <Footer />
      </div>
    </>
  );
};
export default profile;
