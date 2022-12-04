/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../url";
import { ReactComponent as AddNewListingIcon } from "../../assets/svg/add-new-listing-icon.svg";
import { ReactComponent as OpenModalIcon } from "../../assets/svg/open-modal-icon.svg";
import { ReactComponent as CloseModalIcon } from "../../assets/svg/close-modal-icon.svg";

const uploadImages = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  const onImageChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const toggleView = () => {
    setViewAll(!viewAll);
  };
  return (
    <>
      <div className="hidden md:block">
        <main className="font-sans mt-7 mb-[117px]">
          <div className="flex justify-center">
            <div className="border border-squazzle-background-white-color p-10 rounded-lg">
              <section className="mb-8">
                <h1 className="md:text-[28px] text-lg text-squazzle-text-deep-grey2-color">
                  Upload an image
                </h1>
                <p className="md:text-lg text-sm text-squazzle-text-deep-grey1-color mt-1">
                  You can upload at least 5 images
                </p>
              </section>
              <form>
                <div className="grid grid-cols-2 gap-y-5 gap-x-5">
                  {viewAll
                    ? imageURLs?.map((imageSrc, index) => (
                        <div key={index} className="relative">
                          <img
                            src={imageSrc}
                            alt=""
                            className="h-[350px] w-[264px] md:h-[245px] md:w-[337px]"
                          />
                          {showModal ? (
                            <div className="absolute flex flex-col h-[170px] bg-white z-20 top-[15px] right-[15px]">
                              <button
                                type="button"
                                className="text-sm py-[13px] px-[13px] flex justify-end border border-transparent border-b-squazzle-background-white-color w-full"
                                onClick={() => handleHideModal()}
                              >
                                <CloseModalIcon />
                              </button>
                              <button
                                type="button"
                                className="text-sm py-4 px-6"
                              >
                                Set as cover photo
                              </button>
                              <button type="button" className="text-sm pb-4">
                                Hide from gallery
                              </button>
                              <button type="button" className="text-sm pb-4">
                                Delete
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="bg-white h-10 px-[18px] top-[15px] right-[15px] z-10 absolute"
                              onClick={() => handleShowModal()}
                            >
                              <OpenModalIcon />
                            </button>
                          )}
                        </div>
                      ))
                    : imageURLs?.slice(0, 6).map((imageSrc, index) => (
                        <div key={index} className="relative">
                          <img
                            src={imageSrc}
                            alt=""
                            className=" h-[245px] w-[337px]"
                          />
                          {showModal ? (
                            <div className="absolute flex flex-col h-[170px] bg-white z-20 top-[15px] right-[15px]">
                              <button
                                type="button"
                                className="text-sm py-[13px] px-[13px] flex justify-end border border-transparent border-b-squazzle-background-white-color w-full"
                                onClick={() => handleHideModal()}
                              >
                                <CloseModalIcon />
                              </button>
                              <button
                                type="button"
                                className="text-sm py-4 px-6"
                              >
                                Set as cover photo
                              </button>
                              <button type="button" className="text-sm pb-4">
                                Hide from gallery
                              </button>
                              <button type="button" className="text-sm pb-4">
                                Delete
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="bg-white h-10 px-[18px] top-[15px] right-[15px] z-10 absolute"
                              onClick={() => handleShowModal()}
                            >
                              <OpenModalIcon />
                            </button>
                          )}
                        </div>
                      ))}
                  <section className="relative">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="opacity-0 absolute top-[90px] z-10"
                      onChange={(e) => onImageChange(e)}
                    />
                    <div
                      type="button"
                      className=" w-[350px] md:w-[337px] absolute"
                    >
                      <div className="relative bg-squazzle-background-white-color h-[264px] w-[350px] md:h-[210px] md:w-[335px] ">
                        <AddNewListingIcon className="absolute top-[81px] left-[140px]" />
                      </div>
                      <div className="py-2 bg-[#D7D7D7] text-squazzle-text-deep-grey2-color text-sm lg:text-lg grid place-items-center">
                        Add photo
                      </div>
                    </div>
                  </section>
                </div>

                <section className="pt-[250px]">
                  <button
                    type="button"
                    onClick={() => toggleView()}
                    className="text-sm text-squazzle-profileCard-logout-red-color mt-2"
                  >
                    {viewAll ? "View less" : "View all"}
                  </button>
                  <section className="flex gap-[300px] mt-16">
                    <button
                      type="button"
                      className="box-border text-xl font-bold text-squazzle-button-bg-deep-green-color py-5 w-40 border-2 border-squazzle-button-bg-deep-green-color rounded-xl"
                      onClick={() =>
                        navigate(AuthRoutes.dashboardManageAccount)
                      }
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-xl font-bold py-5 w-[211px] bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-color rounded-xl"
                    >
                      Save & Publish
                    </button>
                  </section>
                </section>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* MOBILE SCREEN */}
      <div className="md:hidden font-sans px-5 flex  flex-col items-center py-[18px]">
        <h1 className="text-lg font-[600] text-squazzle-text-deep-grey2-color mt-8 self-start">
          Upload an image
        </h1>
        <p className="text-sm text-squazzle-text-deep-grey1-color mt-1 mb-[50px] self-start">
          You can upload at least 5 images
        </p>
        <form>
          <div className="flex flex-col gap-5">
            {viewAll
              ? imageURLs?.map((imageSrc, index) => (
                  <div key={index} className="relative">
                    <img
                      src={imageSrc}
                      alt=""
                      className="w-[330px] h-[264px]"
                    />
                    {showModal ? (
                      <div className="absolute flex flex-col h-[170px] bg-white z-20 top-[15px] right-[15px]">
                        <button
                          type="button"
                          className="text-sm py-[13px] px-[13px] flex justify-end border border-transparent border-b-squazzle-background-white-color w-full"
                          onClick={() => handleHideModal()}
                        >
                          <CloseModalIcon />
                        </button>
                        <button type="button" className="text-sm py-4 px-6">
                          Set as cover photo
                        </button>
                        <button type="button" className="text-sm pb-4">
                          Hide from gallery
                        </button>
                        <button type="button" className="text-sm pb-4">
                          Delete
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="bg-white h-10 px-[18px] top-[15px] right-[15px] z-10 absolute"
                        onClick={() => handleShowModal()}
                      >
                        <OpenModalIcon />
                      </button>
                    )}
                  </div>
                ))
              : imageURLs?.slice(0, 6).map((imageSrc, index) => (
                  <div key={index} className="relative">
                    <img
                      src={imageSrc}
                      alt=""
                      className=" h-[264px] w-[350px]"
                    />
                    {showModal ? (
                      <div className="absolute flex flex-col h-[170px] bg-white z-20 top-[15px] right-[15px]">
                        <button
                          type="button"
                          className="text-sm py-[13px] px-[13px] flex justify-end border border-transparent border-b-squazzle-background-white-color w-full"
                          onClick={() => handleHideModal()}
                        >
                          <CloseModalIcon />
                        </button>
                        <button type="button" className="text-sm py-4 px-6">
                          Set as cover photo
                        </button>
                        <button type="button" className="text-sm pb-4">
                          Hide from gallery
                        </button>
                        <button type="button" className="text-sm pb-4">
                          Delete
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="bg-white h-10 px-[18px] top-[15px] right-[15px] z-10 absolute"
                        onClick={() => handleShowModal()}
                      >
                        <OpenModalIcon />
                      </button>
                    )}
                  </div>
                ))}
            <div className="">
              <section className="relative">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="opacity-0 absolute top-[90px] z-10"
                  onChange={(e) => onImageChange(e)}
                />
                <div type="button" className=" w-[330px] absolute">
                  <div className="relative bg-squazzle-background-white-color h-[226px] w-[330px]">
                    <AddNewListingIcon className="absolute top-[81px] left-[150px]" />
                  </div>
                  <div className="py-2 bg-[#D7D7D7] text-squazzle-text-deep-grey2-color text-sm grid place-items-center">
                    Add photo
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section className="pt-[320px]">
            <button
              type="button"
              onClick={() => toggleView()}
              className="text-sm text-squazzle-profileCard-logout-red-color mt-2"
            >
              {viewAll ? "View less" : "View all"}
            </button>
            <section className="flex flex-col gap-4 mt-10">
              <button
                type="submit"
                className="text-sm font-bold py-[15px] w-[330px] bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-color rounded-xl"
              >
                Save & Publish
              </button>
              <button
                type="button"
                className="box-border text-sm font-bold text-squazzle-button-bg-deep-green-color py-[15px] w-[330px] border-2 border-squazzle-button-bg-deep-green-color rounded-xl mb-16"
                onClick={() => navigate(AuthRoutes.dashboardManageAccount)}
              >
                Cancel
              </button>
            </section>
          </section>
        </form>
      </div>
    </>
  );
};

export default uploadImages;
