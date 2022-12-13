/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import DashboardNavs from "../../components/navigation/dashboardNavs";
import countryCodeDropDown from "../../components/countryCode/countryCode";
import Footer from "../../components/footer/footer";
import { ReactComponent as UserIcon } from "../../assets/svg/profile-icon.svg";
import { ReactComponent as GreaterThanIcon } from "../../assets/svg/greaterthan-icon.svg";
import { ReactComponent as EditIcon } from "../../assets/svg/edit-icon.svg";

function editProfile() {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);
  const [firstName, setFirstName] = useState("Zhara");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("zharadoe@gmail.com");
  const [mobile, setMobile] = useState("8123181961");
  const [occupation, setOccupation] = useState("Real Estate Manager");
  const [nin, setNin] = useState("75312208056610");
  const [state, setState] = useState("Jos");
  const [city, setCity] = useState("Plateau");
  const [aboutYou, setAboutYou] = useState(
    " Lorem ipsum is simply a dummy text of the printing and typesetting industry.lorem ipsum has been in the industry"
  );
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Edit Profile - Squazzle";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    fetch("https://squazzle.beargaze.com/api/editProfile").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
        setFirstName(resp[0].firstName);
        setLastName(resp[0].lastName);
        setMobile(resp[0].mobile);
        setEmail(resp[0].email);
        setState(resp[0].state);
        setOccupation(resp[0].occupation);
        setCity(resp[0].city);
        setUserId(resp[0].id);
      });
    });
  }

  function deleteUser(id) {
    fetch(`https://squazzle.beargaze.com/api/editProfile${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }
  function selectUser(id) {
    const item = users[id - 1];
    setFirstName(item.firstName);
    setLastName(item.lastName);
    setEmail(item.email);
    setMobile(item.mobile);
    setCity(item.city);
    setState(item.state);
    setOccupation(item.occupation);

    setUserId(item.id);
  }
  function updateUser() {
    const item = { firstName, lastName, mobile, email };
    console.warn("item", item);
    fetch(`https://squazzle.beargaze.com/api/editProfile${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }

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
                  Zhara Doe
                </p>
                <div className="font-[400] gap-4 text-[20px] mt-4">
                  <button type="button">zhara@gmail.com</button>
                </div>
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
                    type="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
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
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    type="lastName"
                    name="lastName"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-16 w-full rounded-md text-sm  lg:text-xl mb-6"
                    placeholder="Last Name"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color block h-16 w-full rounded-md text-sm lg:text-xl mb-6"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    Occupation
                  </span>
                  <input
                    type="occupation"
                    name="occupation"
                    value={occupation}
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
              <div className="flex">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    State
                  </span>
                  <input
                    type="state"
                    name="state"
                    value={state}
                    className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color block h-16 w-[298px] rounded-md text-sm  lg:text-xl  mb-6 mr-4"
                    placeholder="State"
                  />
                </label>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    City
                  </span>
                  <input
                    type="city"
                    name="city"
                    value={city}
                    className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color block w-[298px] h-16 rounded-md text-sm  lg:text-xl  mb-6"
                    placeholder="City"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
                    NIN
                  </span>
                  <input
                    type="occupation"
                    name="occupation"
                    value={nin}
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
                    <div className="flex">
                      <div>
                        <select
                          name="countryCode"
                          id="country-code"
                          pattern="+[0-9]{3}"
                          className="w-[80px] pl-3 border border-y-squazzle-border-grey-color border-l-squazzle-border-grey-color border-r-white text-squazzle-text-deep-grey2-color text-sm  lg:text-xl font-[400] rounded-tl-lg rounded-bl-lg h-[62px] mt-[6px] focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                        >
                          {countryCodeDropDown()}
                        </select>
                      </div>
                      <input
                        id="phone-number"
                        type="tel"
                        value={mobile}
                        placeholder="Phone Number"
                        pattern="[0-9]{10}"
                        className="block bg-white border border-squazzle-border-grey-color rounded-tr-lg rounded-br-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-full py-4 text-sm lg:text-xl px-3 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color after:content-[''] after:top-0 mb-6"
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
                  value={aboutYou}
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
                  className="py-[15px] w-[160px] h-[64px] text-squazzle-button-bg-light-green-color font-bold bg-squazzle-button-bg-deep-green-color rounded-xl "
                  onClick={updateUser}
                >
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
          Zhara Doe
        </h1>
        <p className="font-[400] text-sm mt-[8px] text-[#353535]">
          zhardoe@gmail.com
        </p>
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
              type="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
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
              type="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="mt-1 px-3 py-2 bg-white border  border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color block h-12 w-full rounded-md sm:text-sm  mb-6"
              placeholder="First Name"
            />
          </label>
        </section>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  ">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-1 px-3 py-2 bg-white border  border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-12 w-full rounded-md sm:text-sm mb-6"
            placeholder="First Name"
          />
        </label>
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
              City
            </span>
            <input
              type="city"
              name="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-12 w-full rounded-md sm:text-sm  mb-6 mr-4"
              placeholder="State"
            />
          </label>
        </section>
        <section className="mt-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm ">
              State
            </span>
            <input
              type="state"
              name="state"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              className="mt-1 px-3 py-2 bg-white border border-squazzle-border-grey-color text-squazzle-text-deep-grey2-color  placeholder:text-squazzle-placeholder-grey-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color hover:bg-squazzle-button-bg-light-green-color  block h-12 w-full rounded-md sm:text-sm  mb-6 mr-4"
              placeholder="State"
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
                <div className="flex">
                  <div>
                    <select
                      name="countryCode"
                      id="country-code"
                      pattern="+[0-9]{3}"
                      className="w-[91px] pl-3 border border-y-squazzle-border-grey-color border-l-squazzle-border-grey-color border-r-white text-squazzle-text-deep-grey2-color sm:text-sm  font-[400] rounded-tl-lg rounded-bl-lg h-[48px] mt-[6px] focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color"
                    >
                      {countryCodeDropDown()}
                    </select>
                  </div>
                  <input
                    id="phone-number"
                    type="tel"
                    placeholder="Phone Number"
                    value={mobile}
                    pattern="[0-9]{10}"
                    className="block bg-white border border-squazzle-border-grey-color rounded-tr-lg rounded-br-lg text-squazzle-text-deep-grey2-color font-[400] placeholder:text-squazzle-placeholder-grey-color mt-[6px] w-[259px] py-4 sm:text-sm px-3 h-12 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color invalid:border-squazzle-text-error-red-color after:content-[''] after:top-0 mb-6"
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
              value={nin}
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
              value={aboutYou}
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
              onClick={updateUser}
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
