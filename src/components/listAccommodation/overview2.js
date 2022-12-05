import React from "react";

const overview2 = () => {
  return (
    <>
      <div className="hidden md:block">
        <main className="font-sans mt-7 mb-[117px]">
          <div className="flex justify-center">
            <div className="border border-squazzle-background-white-color p-10 rounded-lg">
              <form>
                <section className="mb-12">
                  <label htmlFor="availability">
                    <span className="block font-normal text-[28px] text-squazzle-text-deep-grey1-color">
                      Availability{" "}
                    </span>{" "}
                    <span className="block font-normal text-base mb-[34px] text-squazzle-text-deep-grey1-color">
                      Choose availability{" "}
                    </span>{" "}
                    <div className="flex flex-col gap-7">
                      <label htmlFor="available">
                        <input
                          type="radio"
                          id="available"
                          className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                        />
                        <span className="text-squazzle-text-deep-grey1-color">
                          Available{" "}
                        </span>{" "}
                      </label>{" "}
                      <label htmlFor="not-available">
                        <input
                          type="radio"
                          id="not-available"
                          className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                        />
                        <span className="text-squazzle-text-deep-grey1-color">
                          Not available{" "}
                        </span>{" "}
                      </label>{" "}
                    </div>{" "}
                  </label>{" "}
                </section>{" "}
                <section className="border-t-[1px] border-t-[#D7D7D7] py-10">
                  <label htmlFor="price">
                    <span className="block font-normal text-[28px]">
                      Accommodation Price{" "}
                    </span>{" "}
                    <input
                      type="text"
                      id="price"
                      placeholder="0.00NGN"
                      className="font-normal text-lg text-squazzle-border-grey-color py-5 px-4 w-[694px] border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                    />
                  </label>{" "}
                </section>{" "}
                <section className="border-t-[1px] border-t-[#D7D7D7] pt-10">
                  <span className="block font-normal text-[28px] text-squazzle-text-deep-grey1-color mb-3">
                    Hosting Duration{" "}
                  </span>{" "}
                  <label htmlFor="start-date">
                    <span className="text-sm text-squazzle-text-deep-grey1-color">
                      Start date{" "}
                    </span>{" "}
                    <input
                      type="text"
                      id="start-date"
                      placeholder="DD/MM/YY"
                      className="font-normal text-lg text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] mb-3 rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                    />
                  </label>{" "}
                  <label htmlFor="end-date">
                    <span className="text-sm text-squazzle-text-deep-grey1-color">
                      End date{" "}
                    </span>{" "}
                    <input
                      type="text"
                      id="end-date"
                      placeholder="DD/MM/YY"
                      className="font-normal text-lg text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                    />
                  </label>{" "}
                </section>{" "}
                <section className="flex gap-[323px] mt-16">
                  <button
                    type="button"
                    className="text-xl font-bold text-squazzle-button-bg-deep-green-color py-5 w-40 border-2 border-squazzle-button-bg-deep-green-color rounded-xl"
                  >
                    Back{" "}
                  </button>{" "}
                  <button
                    type="submit"
                    className="text-xl font-bold py-5 w-[211px] bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-color rounded-xl"
                  >
                    Save & Continue{" "}
                  </button>{" "}
                </section>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </main>{" "}
      </div>
      {/* mobile screen */}{" "}
      <div className="md:hidden font-sans px-5">
        <form className="mt-8">
          <section>
            <label htmlFor="availability">
              <span className="block font-[600] text-lg text-squazzle-text-deep-grey1-color">
                Availability{" "}
              </span>{" "}
              <span className="block font-normal text-sm mb-[34px] text-squazzle-text-deep-grey1-color">
                Choose availability{" "}
              </span>{" "}
              <div className="flex flex-col gap-7">
                <label htmlFor="available">
                  <input
                    type="radio"
                    id="available"
                    className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                  />
                  <span className="text-squazzle-text-deep-grey1-color text-sm">
                    Available{" "}
                  </span>{" "}
                </label>{" "}
                <label htmlFor="not-available">
                  <input
                    type="radio"
                    id="not-available"
                    className="accent-squazzle-text-deep-grey1-color mr-[10px]"
                  />
                  <span className="text-squazzle-text-deep-grey1-color text-sm">
                    Not available{" "}
                  </span>{" "}
                </label>{" "}
              </div>{" "}
            </label>{" "}
          </section>{" "}
          <section className="mt-[26px]">
            <label htmlFor="price">
              <span className="block font-[600] text-lg">
                Accommodation Price{" "}
              </span>{" "}
              <input
                type="text"
                id="price"
                placeholder="0.00NGN"
                className="font-normal text-sm text-squazzle-border-grey-color py-[15px] px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg"
              />
            </label>{" "}
          </section>{" "}
          <section className="mt-6">
            <span className="block font-[600] text-lg text-squazzle-text-deep-grey1-color mb-3">
              Hosting Duration{" "}
            </span>{" "}
            <label htmlFor="start-date">
              <span className="text-sm text-squazzle-text-deep-grey1-color">
                Start date{" "}
              </span>{" "}
              <input
                type="text"
                id="start-date"
                placeholder="DD/MM/YY"
                className="font-normal text-sm text-squazzle-border-grey-color py-[15px] px-4 w-full border border-squazzle-border-grey-color mt-[6px] mb-3 rounded-lg"
              />
            </label>{" "}
            <label htmlFor="end-date">
              <span className="text-sm text-squazzle-text-deep-grey1-color">
                End date{" "}
              </span>{" "}
              <input
                type="text"
                id="end-date"
                placeholder="DD/MM/YY"
                className="font-normal text-sm text-squazzle-border-grey-color py-[15px] px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg"
              />
            </label>{" "}
          </section>{" "}
          <button
            type="submit"
            className="text-sm font-bold py-[15px] w-full bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-color rounded-xl mt-10"
          >
            Save & Continue{" "}
          </button>{" "}
          <button
            type="button"
            className="text-sm font-bold text-squazzle-button-bg-deep-green-color py-[15px] w-full border-2 border-squazzle-button-bg-deep-green-color rounded-xl mt-4"
          >
            Cancel{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </>
  );
};

export default overview2;
