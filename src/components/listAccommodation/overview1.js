import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";

const overview1 = ({ handleSaveAndContinue }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden md:block">
        <main className="font-sans mt-7 mb-[117px]">
          <div className="flex justify-center">
            <div className="border border-squazzle-background-white-color p-10 rounded-lg">
              <form>
                <section>
                  <label htmlFor="accommodation-name">
                    <span className="block font-normal text-[28px]">
                      Accommodation name
                    </span>
                    <input
                      type="text"
                      id="accommodation-name"
                      placeholder="Name"
                      className="font-normal text-lg text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                    />
                  </label>
                </section>
                <section className="mt-10 mb-12">
                  <label htmlFor="accommodation-type">
                    <span className="block font-normal text-[28px]">
                      Accommodation type
                    </span>
                    <span className="block font-normal text-base mb-[34px]">
                      Choose accomodation type
                    </span>
                    <div className="flex gap-[178.5px]">
                      <div className="flex flex-col gap-7">
                        <label htmlFor="duplex">
                          <input
                            type="radio"
                            id="duplex"
                            name="accommodation-type"
                            className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                          />
                          <span className="text-squazzle-text-deep-grey1-color">
                            Duplex
                          </span>
                        </label>
                        <label htmlFor="bungalow">
                          <input
                            type="radio"
                            id="bungalow"
                            name="accommodation-type"
                            className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                          />
                          <span className="text-squazzle-text-deep-grey1-color">
                            Bungalow
                          </span>
                        </label>
                        <label htmlFor="mansion">
                          <input
                            type="radio"
                            id="mansion"
                            name="accommodation-type"
                            className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                          />
                          <span className="text-squazzle-text-deep-grey1-color">
                            Mansion
                          </span>
                        </label>
                      </div>
                      <div className="flex flex-col gap-7">
                        <label htmlFor="apartment">
                          <input
                            type="radio"
                            id="apartment"
                            name="accommodation-type"
                            className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                          />
                          <span className="text-squazzle-text-deep-grey1-color">
                            Apartment
                          </span>
                        </label>
                        <label htmlFor="flat">
                          <input
                            type="radio"
                            id="flat"
                            name="accommodation-type"
                            className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                          />
                          <span className="text-squazzle-text-deep-grey1-color">
                            Flat
                          </span>
                        </label>
                      </div>
                      <div className="flex flex-col gap-7">
                        <label htmlFor="single-room">
                          <input
                            type="radio"
                            id="single-room"
                            name="accommodation-type"
                            className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                          />
                          <span className="text-squazzle-text-deep-grey1-color">
                            Single room
                          </span>
                        </label>
                        <label htmlFor="studio">
                          <input
                            type="radio"
                            id="studio"
                            name="accommodation-type"
                            className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                          />
                          <span className="text-squazzle-text-deep-grey1-color">
                            Studio
                          </span>
                        </label>
                      </div>
                    </div>
                  </label>
                </section>
                <section className="border-t-[1px] border-t-[#D7D7D7] pt-10">
                  <label htmlFor="location">
                    <span className="block font-normal text-[28px]">
                      Location
                    </span>
                    <textarea
                      type="text"
                      id="location"
                      rows="5"
                      placeholder="Location address"
                      className="font-normal text-lg text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                    >
                      {}
                    </textarea>
                  </label>
                  <div className="flex gap-6 mt-10">
                    <label htmlFor="State">
                      <span className="block font-normal text-[28px]">
                        State
                      </span>
                      <input
                        type="text"
                        id="state"
                        placeholder="State"
                        className="font-normal text-lg text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-[335px] border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                      />
                    </label>
                    <label htmlFor="city">
                      <span className="block font-normal text-[28px]">
                        City
                      </span>
                      <input
                        type="text"
                        id="city"
                        placeholder="City"
                        className="font-normal text-lg ttext-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-[335px] border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                      />
                    </label>
                  </div>
                </section>
                <section className="flex gap-[323px] mt-16">
                  <button
                    type="button"
                    className="text-xl font-bold text-squazzle-button-bg-deep-green-color py-5 w-40 border-2 border-squazzle-button-bg-deep-green-color rounded-xl"
                    onClick={() => navigate(AuthRoutes.listedAccommodations)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-xl font-bold py-5 w-[211px] bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-color rounded-xl"
                    onClick={handleSaveAndContinue}
                  >
                    Save & Continue
                  </button>
                </section>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* mobile screen */}
      <div className="md:hidden font-sans px-5">
        <form className="mt-8">
          <section>
            <label htmlFor="accommodation-name">
              <span className="block font-[600] text-lg">
                Accommodation name
              </span>
              <input
                type="text"
                id="accommodation-name"
                placeholder="What is the title of your listing?"
                className="font-normal text-sm ttext-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-[15px] px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
              />
            </label>
          </section>
          <section className="mt-6">
            <label htmlFor="accommodation-type">
              <span className="block font-[600] text-lg">
                Accommodation type
              </span>
              <span className="block font-normal text-sm mb-[35px]">
                Choose accomodation type
              </span>
              <div className="flex gap-[60px]">
                <div className="flex flex-col gap-5">
                  <label htmlFor="duplex">
                    <input
                      type="radio"
                      id="duplex"
                      className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                    />
                    <span className="text-squazzle-text-deep-grey1-color text-sm">
                      Duplex
                    </span>
                  </label>
                  <label htmlFor="bungalow">
                    <input
                      type="radio"
                      id="bungalow"
                      className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                    />
                    <span className="text-squazzle-text-deep-grey1-color text-sm">
                      Bungalow
                    </span>
                  </label>
                  <label htmlFor="mansion">
                    <input
                      type="radio"
                      id="mansion"
                      className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                    />
                    <span className="text-squazzle-text-deep-grey1-color text-sm">
                      Mansion
                    </span>
                  </label>
                  <label htmlFor="apartment">
                    <input
                      type="radio"
                      id="apartment"
                      className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                    />
                    <span className="text-squazzle-text-deep-grey1-color text-sm">
                      Apartment
                    </span>
                  </label>
                  <label htmlFor="flat">
                    <input
                      type="radio"
                      id="flat"
                      className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                    />
                    <span className="text-squazzle-text-deep-grey1-color text-sm">
                      Flat
                    </span>
                  </label>
                </div>
                <div className="flex flex-col gap-5">
                  <label htmlFor="single-room">
                    <input
                      type="radio"
                      id="single-room"
                      className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                    />
                    <span className="text-squazzle-text-deep-grey1-color text-sm">
                      Single room
                    </span>
                  </label>
                  <label htmlFor="studio">
                    <input
                      type="radio"
                      id="studio"
                      className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                    />
                    <span className="text-squazzle-text-deep-grey1-color text-sm">
                      Studio
                    </span>
                  </label>
                </div>
              </div>
            </label>
          </section>
          <section className="mt-6">
            <label htmlFor="accommodation-address">
              <span className="block font-[600] text-lg">
                Accommodation address
              </span>
              <input
                type="text"
                id="accommodation-address"
                placeholder="Enter accommodation address"
                className="font-normal text-sm text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-[15px] px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg mb-6 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
              />
            </label>
            <label htmlFor="state">
              <span className="block font-[600] text-sm">State</span>
              <input
                type="text"
                id="state"
                placeholder="State"
                className="font-normal text-sm text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-[15px] px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg mb-6 hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
              />
            </label>
            <label htmlFor="city">
              <span className="block font-[600] text-sm">City</span>
              <input
                type="text"
                id="city"
                placeholder="City"
                className="font-normal text-sm text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-[15px] px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
              />
            </label>
          </section>
          <button
            type="submit"
            className="text-sm font-bold py-[15px] w-full bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-color rounded-xl mt-10"
            onClick={handleSaveAndContinue}
          >
            Save & Continue
          </button>
          <button
            type="button"
            className="text-sm font-bold text-squazzle-button-bg-deep-green-color py-[15px] w-full border-2 border-squazzle-button-bg-deep-green-color rounded-xl mt-4"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default overview1;
