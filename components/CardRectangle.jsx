import React from "react";
import { SlTrophy } from "react-icons/sl";
import { IoDiamondOutline } from "react-icons/io5";

import Rating from "@mui/material/Rating";
import { makeStyles } from "@mui/styles";

import { SlArrowDown } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { FaCheck } from "react-icons/fa6";

const useStyles = makeStyles({
  smallerStars: {
    fontSize: "0.77rem", // Adjust the font size to make the stars smaller
  }
});

function CardRectangle({data, index}) {
  const classes = useStyles();

  return (
    <>
      {data && <div className="relative mb-5">
        {/* // best choice / value badge  */}
        {data?.badgeType === "Choice" ? (
          <div className="absolute  top-0 left-0  bg-[#FF7724] text-white px-3 py-[6px] rounded-r-lg tracking-wide font-light text-sm  -mt-4 -ml-2 flex items-center justify-center">
            <SlTrophy className="h-4 w-4 mr-2" />
            Best Choice
          </div>
        ) : data?.badgeType === "Value" ? (
          <div className="absolute top-0 left-0  bg-[#FF7724] text-white px-3 py-[6px] rounded-r-lg tracking-wide font-light text-sm  -mt-4 -ml-2 flex items-center justify-center">
            <IoDiamondOutline className="h-4 w-4 mr-2" />
            Best Value
          </div>
        ) : null}
        {/* // ------- */}
        {/* Number badge */}
        <div className="absolute top-0 left-0  bg-white border border-1 border-[#E1E5E6] rounded-full text-gray-500 px-3 py-[6px]  tracking-wide font-light text-sm  mt-7 -ml-3 flex items-center justify-center">
          <span className="text-[#636E79] text-[18px]"> {index} </span>
        </div>

        {/* // -----card data  */}

        <div
          className={`w-[100%]  ${
            data?.type === "cdk" ? "h-full" : "h-fit"
          } pl-2  shadow-sm flex rounded-lg bg-white`}
        >
          {/* ------------ 1st segment */}

          <div className=" h-20 w-[23%]">
            <img src={data?.image} alt="builder-image" className="h-[32vh]" />
          </div>

          {/* ------------ 2nd segment */}

          <div className=" h-[100%] w-[51%]">
            {/* // text content  */}
            <div
              className={`${data?.type === "cdk" ? "h-fit" : "h-[87%]"} py-3`}
            >
              <div className="text-[#4B5665] text-[14px]">
                <span className="font-semibold tracking-wide text-[14px]">
                  {data.heading}
                </span>
                <span className="font-light tracking-wide">
                  {data.description}
                </span>
              </div>
              {data?.type === "cdk" ? (
                <div className="text-[#074786] text-[11px] w-fit mt-2 rounded-sm bg-[#F2F4F6] px-1 py-1">
                  26% off
                </div>
              ) : null}

              <div
                className={`text-[#4B5665] text-[14px] ${
                  data?.type === "cdk" ? null : "mt-2"
                }`}
              >
                <span className="font-semibold tracking-wide text-[14px]">
                  Main highlights
                </span>

                {data?.type === "cdk" ? (
                  <div>
                    <div className="ml-3 bg-[#FEF4ED] p-2 px-3 rounded-lg text-[14px] mt-1">
                      <div className="my-[10px]">
                        <span className="text-[#1B88F5] p-1 px-2 rounded-[6px] bg-[#FFFEFE]">
                          9.9
                        </span>
                        <span className="ml-2 font-light tracking-wide">
                          Building Responsive
                        </span>
                      </div>
                      <div className="my-[10px]">
                        <span className="text-[#1B88F5] p-1 px-2 rounded-[6px] bg-[#FFFEFE]">
                          8.9
                        </span>
                        <span className="ml-2 font-light tracking-wide">
                          Cool
                        </span>
                      </div>
                      <div className="my-[10px]">
                        <span className="text-[#1B88F5] p-1 px-2 rounded-[6px] bg-[#FFFEFE]">
                          8.9
                        </span>
                        <span className="ml-2 font-light tracking-wide">
                          Docs
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-[13px]">
                      <h3 className="text-sm mb-2">Why we love it </h3>
                      <div className="flex my-[6px]">
                        <div className="p-1 bg-[#EBF5FE] rounded-full w-fit">
                          <FaCheck className="text-[#0A56A0] h-3 w-3 bg-[#EBF5FE] " />
                        </div>
                        <span className="ml-2 tracking-wide font-light text-[#4A5665]">
                          Documentation
                        </span>
                      </div>
                      <div className="flex my-[6px]">
                        <div className="p-1 bg-[#EBF5FE] rounded-full w-fit">
                          <FaCheck className="text-[#0A56A0] h-3 w-3 bg-[#EBF5FE] " />
                        </div>
                        <span className="ml-2 tracking-wide font-light text-[#4A5665]">
                          Easy Use
                        </span>
                      </div>
                      <div className="flex mt-[6px]">
                        <div className="p-1 bg-[#EBF5FE] rounded-full w-fit">
                          <FaCheck className="text-[#0A56A0] h-3 w-3 bg-[#EBF5FE] " />
                        </div>
                        <span className="ml-2 tracking-wide font-light text-[#4A5665]">
                          Out Of Box
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="font-light tracking-wide ml-3 mt-[6px]">
                    {data.highlight}
                  </div>
                )}
              </div>
            </div>

            <div className="h-[13%] flex items-center text-[14px] font-light tracking-wide text-[#1B88F5] mb-2">
              Show more
              <SlArrowDown className="h-3 w-2 ml-2" />
            </div>
          </div>

          {/* ------------ 3rd segment */}

          <div
            className={`rounded-r-lg ${
              data?.type === "cdk" ? "h-[55vh]" : "h-[33vh]"
            } w-[26%] flex flex-col justify-between items-center `}
          >
            <div
              className={`${
                data?.type === "cdk" ? "h-[25%]" : "h-[50%]"
              } bg-[#F3F9FE] flex flex-col items-center py-2 px-6 rounded-b-lg mb-5`}
            >
              <div className="text-[26px] font-light text-[#074786] mb-[7px] relative">
                {/* // info badge over rating  */}
                <div
                  className="absolute top-0 right-0 
                 text-[#BBBFC3] px-3 tracking-wide font-light text-sm -mr-6 -mt-1 flex items-center justify-center"
                >
                  <IoIosInformationCircleOutline className="text-[0.60em]" />
                </div>
                {data.rating}
              </div>
              <div className="text-[13px] font-light tracking-wide mb-[6px] text-[#074786]">
                {data.review}
              </div>
              <Rating
                classes={{ icon: classes.smallerStars }}
                name="size-small"
                defaultValue={index === 1 || index === 3 ? 5 : index === 2 ? 4.5 : index === 4 ? 4 : 0 }
                precision={0.5}
                size="small"
                readOnly
              />
            </div>
            <button className="bg-[#1B89F5] w-[90%] rounded-[10px] text-white text-[14px] font-light tracking-wider h-12 py-3 px-5 mx-3 mb-2">
              View
            </button>
          </div>
        </div>
      </div>}
    </>
  );
}

export default CardRectangle;
