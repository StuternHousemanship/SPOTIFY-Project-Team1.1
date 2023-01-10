/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboard from "../../api/dashboard";
import { NonAuthRoutes, AuthRoutes } from "../../url";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import Footer from "../../components/footer/footer";
import { ReactComponent as UserIcon } from "../../assets/svg/profile-icon.svg";
import { ReactComponent as GreaterThanIcon } from "../../assets/svg/greaterthan-icon.svg";
import { ReactComponent as EditIcon } from "../../assets/svg/edit-icon.svg";
import { ReactComponent as LoadingIcon } from "../../assets/svg/loading-light-icon.svg";

function editProfile() {
  const navigate = useNavigate();
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userOccupation, setUserOccupation] = useState("");
  const [userNin, setUserNin] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userAboutYou, setUserAboutYou] = useState("");
  const [buttonIsLoading, setButtonIsLoading] = useState(false);

  const handleViewProfile = () => {
    try {
      dashboard.ViewProfile().then((response) => {
        if (response.status === 200) {
          const {
            email,
            firstName,
            lastName,
            phone,
            occupation,
            NIN,
            description,
            address,
          } = response.data.profile;
          setUserEmail(email);
          setUserFirstName(firstName);
          setUserLastName(lastName);
          setUserPhone(phone);
          setUserOccupation(occupation);
          setUserNin(NIN);
          setUserAddress(address);
          setUserAboutYou(description);
        }
      });
    } catch (error) {
      navigate(NonAuthRoutes.login);
    }
  };

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Edit Profile - Squazzle";

    handleViewProfile();

    window.scroll(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  const UserNinToNumber = Number(userNin);

  const handleEditProfile = () => {
    setButtonIsLoading(true);
    try {
      dashboard.EditProfile(userOccupation).then((response) => {
        if (response.status === 202) {
          setButtonIsLoading(false);
          navigate(AuthRoutes.profile);
        }
      });
    } catch (error) {
      setTimeout(() => {
        setButtonIsLoading(false);
      }, 1000);
      console.error("error:", error);
    }
  };

  return (
    <>
      <div className="hidden md:block">
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
              <div className="flex justify-center flex-col  gap-[0px] shadow rounded-lg border-[1px] border-solid border-[#F5F5F5] bg-[#ffffff]  box-border h-[469px] w-[305px] pt-[24px] pb-[40px] items-center mb-10 ">
                <p className="font-[600] text-[28px] leading-[35px] mt-5">
                  {`${userFirstName} ${userLastName}`}
                </p>
                {/* <div className="font-[400] gap-4 text-[20px] mt-4">
                  <button type="button">{userEmail}</button>
                </div> */}
                <ul className="flex-auto w-32  flex flex-col items-center justify-between ">
                  <li>
                    <UserIcon className="w-[86.67px] h-[86.67px] position-absolute mt-12 cursor-pointer" />
                  </li>
                </ul>
                <div className="font-Sans flex gap-2 text-[15px] leading-[24px] font-[400] text-[#353535] mb-[180px] mt-2 ">
                  <button type="button">Edit profile</button>
                  <EditIcon className="cursor-pointer inset-2" />
                </div>
              </div>
            </div>
            <div className="px-20 box-border h-[1,373px] w-[774px] py-16 rounded-lg border-[2px] border-solid border-[#F5F5F5] bg-[#ffffff] mt-4 ">
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  ">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    value={userFirstName}
                    onChange={(e) => {
                      setUserFirstName(e.target.value);
                    }}
                    className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none hover:bg-squazzle-button-bg-light-green-color focus:border-squazzle-button-bg-deep-green-color block h-16 w-full rounded-md text-sm  lg:text-xl mb-6"
                    placeholder="First Name"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    Last Name
                  </span>
                  <input
                    value={userLastName}
                    onChange={(e) => {
                      setUserLastName(e.target.value);
                    }}
                    type="text"
                    name="lastName"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-16 w-full rounded-md text-sm  lg:text-xl mb-6"
                    placeholder="Last Name"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    Occupation
                  </span>
                  <input
                    type="text"
                    name="occupation"
                    value={userOccupation}
                    onChange={(e) => {
                      setUserOccupation(e.target.value);
                    }}
                    className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-16 w-full rounded-md text-sm  lg:text-xl  mb-6"
                    placeholder="Your Occupation"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    Gender
                  </span>
                  <select
                    name="Gender"
                    className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-16 w-full rounded-md text-sm  lg:text-xl  mb-6"
                  >
                    <option value="male">Male</option>
                    <option value="female" selected>
                      Female
                    </option>
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                  Address
                </span>
                <input
                  type="text"
                  name="address"
                  value={userAddress}
                  onChange={(e) => {
                    setUserAddress(e.target.value);
                  }}
                  className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color block h-16 w-full rounded-md text-sm  lg:text-xl  mb-6 mr-4"
                  placeholder="Address"
                />
              </label>
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    NIN
                  </span>
                  <input
                    type="occupation"
                    name="occupation"
                    value={userNin}
                    onChange={(e) => {
                      setUserNin(e.target.value);
                    }}
                    className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color block h-16 w-full rounded-md text-sm  lg:text-xl  mb-6"
                    placeholder="NIN"
                  />
                </label>
              </div>
              <div>
                <div className="mt-4">
                  <label htmlFor="phone-number">
                    <span className="text-squazzle-text-deep-grey1-color text-sm">
                      Phone Number
                      <span className="text-squazzle-text-error-red-color pl-[5px]">
                        *
                      </span>
                    </span>
                    <div className="">
                      <input
                        id="phone-number"
                        type="tel"
                        value={userPhone}
                        placeholder="Phone Number"
                        pattern="[0-9]{13}"
                        onChange={(e) => {
                          setUserPhone(e.target.value);
                        }}
                        className="block bg-white border border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-xl px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color after:content-[''] after:top-0 mb-6"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                  About You
                </span>
                <textarea
                  type="text"
                  name="occupation"
                  value={userAboutYou}
                  onChange={(e) => {
                    setUserAboutYou(e.target.value);
                  }}
                  rows="5"
                  className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color focus:ring-sky-500 block h-[219px] w-full rounded-md text-sm  lg:text-xl mb-6 placeholder:mb-[500px]"
                  placeholder="Describe Yourself "
                />
              </label>
              <div className="flex flex-row space-x-[290px]">
                <button
                  type="button"
                  className="py-[15px] w-[160px] h-[64px] text-squazzle-button-bg-deep-green-color font-bold border-squazzle-button-bg-deep-green-color rounded-xl border "
                  onClick={() => navigate(AuthRoutes.profile)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-[15px] w-[160px] h-[64px] text-squazzle-button-bg-light-green-color font-bold bg-squazzle-button-bg-deep-green-color rounded-xl "
                  onClick={() => handleEditProfile()}
                >
                  {buttonIsLoading ? (
                    <LoadingIcon className="suspense-loading-icon mt-0 mr-3" />
                  ) : null}
                  Save
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="md:hidden font-sans px-5">
        <DashboardNavs />
        <div>
          <UserIcon className="w-[45px] h-[45px]  mt-6  cursor-pointer" />
        </div>
        <h1 className="font-[600] text-[24px] mt-5 text-[#232323]">
          {`${userFirstName} ${userLastName}`}
        </h1>
        {/* <p className="font-[400] text-sm mt-[8px] text-[#353535]">
          {userEmail}
        </p> */}
        <div className=" flex  flex-row gap-2 mt-4 ">
          <button type="button" className="font-[400] text-sm">
            Edit profile
          </button>
          <button type="button">
            <EditIcon className="cursor-pointer h-[12px] w-[12px]" />
          </button>
        </div>
        <section className="mt-8">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  ">
              First Name
            </span>
            <input
              type="text"
              name="firstName"
              value={userFirstName}
              onChange={(e) => {
                setUserFirstName(e.target.value);
              }}
              className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color block h-12 w-full rounded-md sm:text-sm mb-6"
              placeholder="First Name"
            />
          </label>
        </section>
        <section className="mt-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  ">
              Last Name
            </span>
            <input
              type="text"
              name="lastName"
              value={userLastName}
              onChange={(e) => {
                setUserLastName(e.target.value);
              }}
              className="mt-1 px-3 py-2 bg-white border  border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color block h-12 w-full rounded-md sm:text-sm  mb-6"
              placeholder="First Name"
            />
          </label>
        </section>
        <section className="mt-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
              Gender
            </span>
            <select
              name="Gender"
              className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-12 w-full rounded-md sm:text-sm  mb-6"
            >
              <option value="male">Male</option>
              <option value="female" selected>
                Female
              </option>
            </select>
          </label>
        </section>
        <section className="mt-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
              Address
            </span>
            <input
              type="text"
              name="address"
              value={userAddress}
              onChange={(e) => {
                setUserAddress(e.target.value);
              }}
              className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-12 w-full rounded-md sm:text-sm  mb-6 mr-4"
              placeholder="Address"
            />
          </label>
        </section>
        <section className="mt-6">
          <div>
            <div className="mt-4">
              <label htmlFor="phone-number">
                <span className="text-squazzle-text-deep-grey1-color text-sm">
                  Phone Number
                  <span className="text-squazzle-text-error-red-color pl-[5px]">
                    *
                  </span>
                </span>
                <div className="">
                  <input
                    id="phone-number"
                    type="tel"
                    placeholder="Phone Number"
                    value={userPhone}
                    onChange={(e) => {
                      setUserPhone(e.target.value);
                    }}
                    pattern="[0-9]{13}"
                    className="block bg-white border border-squazzle-border-grey-color rounded-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 sm:text-sm px-3 h-12 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color after:content-[''] after:top-0 mb-6"
                  />
                </div>
              </label>
            </div>
          </div>
        </section>
        <section className="mt-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
              NIN
            </span>
            <input
              type="text"
              name="occupation"
              value={userNin}
              onChange={(e) => {
                setUserNin(e.target.value);
              }}
              className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-12 w-full rounded-md sm:text-sm  mb-6"
              placeholder="NIN"
            />
          </label>
        </section>
        <section className="mt-6 mb-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
              About You
            </span>
            <textarea
              type="text"
              name="occupation"
              rows="5"
              value={userAboutYou}
              onChange={(e) => {
                setUserAboutYou(e.target.value);
              }}
              className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-[219px] w-full rounded-md sm:text-sm  mb-6 placeholder:mb-[500px]"
              placeholder="Describe Yourself"
            />
          </label>
        </section>
        <section className="border border-transparent border-t-[#D7D7D7] pt-6 pb-16 ">
          <div className="flex flex-row">
            <button
              type="button"
              className="py-[15px] w-full h-[48px] text-squazzle-button-bg-light-green-color font-bold bg-squazzle-button-bg-deep-green-color  rounded-xl "
              onClick={() => handleEditProfile()}
            >
              Save
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="py-[15px] w-full h-[48px] text-squazzle-button-bg-deep-green-color font-bold border-squazzle-button-bg-deep-green-color rounded-xl border "
              onClick={() => navigate(AuthRoutes.profile)}
            >
              Cancel
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default editProfile;
