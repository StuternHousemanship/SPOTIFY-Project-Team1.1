/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { ReactComponent as AddNewListingIcon } from "../../assets/svg/add-new-listing-icon.svg";

const description = ({ handleSaveAndContinue, handleBackToTab2 }) => {
  const [rulesFields, setRulesFields] = useState([
    { name: "", description: "" },
  ]);

  const addNewRulesField = () => {
    const newfield = { name: "", description: "" };
    setRulesFields([...rulesFields, newfield]);
  };

  const removeRulesField = (index) => {
    const data = [...rulesFields];
    data.splice(index, 1);
    setRulesFields(data);
  };

  const handleRulesFieldChange = (e, index) => {
    const data = [...rulesFields];
    data[index][e.target.name] = e.target.value;
    setRulesFields(data);
  };
  return (
    <>
      <div className="hidden md:block">
        <main className="font-sans mt-7 mb-[117px]">
          <div className="flex justify-center">
            <div className="border border-squazzle-background-white-color p-10 rounded-lg">
              <form>
                <section className="mb-10">
                  <label htmlFor="about-this-accommodation">
                    <span className="block font-normal text-[28px]">
                      About this accommodation
                    </span>
                    <textarea
                      type="text"
                      id="about-this-accommodation"
                      rows="7"
                      placeholder="A brief description of the accommodation"
                      className="font-normal text-lg text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                    >
                      {}
                    </textarea>
                  </label>
                </section>
                <section className="border-t-[1px] border-t-[#D7D7D7] pt-10 mb-10">
                  <label htmlFor="reason-for-listing">
                    <span className="block font-normal text-[28px]">
                      Reason for listing this accommodation
                    </span>
                    <textarea
                      type="text"
                      id="reason-for-listing"
                      rows="4"
                      placeholder="Why are you listing this accommodation?"
                      className="font-normal text-lg text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                    >
                      {}
                    </textarea>
                  </label>
                </section>
                <section className="border-t-[1px] border-t-[#D7D7D7] pt-10 mb-10">
                  <label htmlFor="accommodation-rules">
                    <span className="block font-normal text-[28px]">
                      Accommodation rules
                    </span>
                    {rulesFields.map((rulesField, index) => {
                      return (
                        <div key={index} className="flex flex-col ">
                          <input
                            type="text"
                            name="name"
                            id="accommodation-rules"
                            placeholder="Rule name"
                            value={rulesField.name}
                            className="font-normal text-lg text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                            onChange={(e) => handleRulesFieldChange(e, index)}
                          />
                          <textarea
                            type="text"
                            name="description"
                            id="rule-description"
                            placeholder="Description"
                            rows="4"
                            value={rulesField.description}
                            className="font-normal text-lg text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                            onChange={(e) => handleRulesFieldChange(e, index)}
                          >
                            {}
                          </textarea>
                          <div className="self-end mt-2">
                            <button
                              type="button"
                              className="text-squazzle-profileCard-logout-red-color text-base"
                              onClick={() => removeRulesField(index)}
                            >
                              Remove rule
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <button
                      type="button"
                      className="flex flex-row gap-[14px] mt-8 items-center"
                      onClick={() => addNewRulesField()}
                    >
                      <p className="text-squazzle-profileCard-logout-red-color text-base font-[400]">
                        Add new rule
                      </p>
                      <AddNewListingIcon className="h-5 w-5" />
                    </button>
                  </label>
                </section>
                <section className="flex gap-[323px] mt-16">
                  <button
                    type="button"
                    className="text-xl font-bold text-squazzle-button-bg-deep-green-color py-5 w-40 border-2 border-squazzle-button-bg-deep-green-color rounded-xl"
                    onClick={handleBackToTab2}
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
            <label htmlFor="about-this-accommodation">
              <span className="block font-[600] text-lg">
                Give a brief description of your accomodation.
              </span>
              <textarea
                type="text"
                id="about-this-accommodation"
                rows="5"
                placeholder="A brief description of the accommodation"
                className="font-normal text-sm text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
              >
                {}
              </textarea>
            </label>
          </section>
          <section className="mt-6">
            <label htmlFor="reason-for-listing">
              <span className="block font-[600] text-lg">
                Why are you listing this accomodation?
              </span>
              <textarea
                type="text"
                id="reason-for-listing"
                rows="5"
                placeholder="Reason for listing this accommodation"
                className="font-normal text-sm text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
              >
                {}
              </textarea>
            </label>
          </section>
          <section className="mt-6">
            <label htmlFor="accommodation-rules">
              <span className="block font-[600] text-lg">
                Accommodation Rules
              </span>
              {rulesFields.map((rulesField, index) => {
                return (
                  <div key={index} className="flex flex-col ">
                    <input
                      type="text"
                      id="accommodation-rules"
                      placeholder="Rule name"
                      value={rulesField.name}
                      className="font-normal text-sm text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                      onChange={(e) => handleRulesFieldChange(e, index)}
                    />
                    <textarea
                      type="text"
                      id="rule-description"
                      placeholder="Description"
                      rows="4"
                      value={rulesField.description}
                      className="font-normal text-sm text-squazzle-text-deep-grey2-color placeholder:text-squazzle-border-grey-color py-5 px-4 w-full border border-squazzle-border-grey-color mt-[6px] rounded-lg hover:bg-squazzle-button-bg-light-green-color focus:outline-none focus:border-squazzle-button-bg-deep-green-color"
                      onChange={(e) => handleRulesFieldChange(e, index)}
                    >
                      {}
                    </textarea>
                    <div className="self-end mt-2">
                      <button
                        type="button"
                        className="text-squazzle-profileCard-logout-red-color text-base"
                        onClick={() => removeRulesField(index)}
                      >
                        Remove rule
                      </button>
                    </div>
                  </div>
                );
              })}
              <button
                type="button"
                className="flex flex-row gap-[14px] mt-5 items-center"
                onClick={() => addNewRulesField()}
              >
                <p className="text-squazzle-profileCard-logout-red-color text-base font-[400]">
                  Add new rule
                </p>
                <AddNewListingIcon className="h-5 w-5" />
              </button>
            </label>
          </section>
          <button
            type="submit"
            className="text-sm font-bold py-[15px] w-full bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-color rounded-xl mt-14"
            onClick={handleSaveAndContinue}
          >
            Save & Continue
          </button>
          <button
            type="button"
            className="text-sm font-bold text-squazzle-button-bg-deep-green-color py-[15px] w-full border-2 border-squazzle-button-bg-deep-green-color rounded-xl mt-4"
            onClick={handleBackToTab2}
          >
            Back
          </button>
        </form>
      </div>
    </>
  );
};

export default description;
