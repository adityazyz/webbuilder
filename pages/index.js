import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import Breadcrumb from "@/components/Breadcrumb";
import CardRectangle from "@/components/CardRectangle";
import CardSquare from "@/components/CardSquare";

export default function Home() {

  // data to be passed in rectangle cards
  const dataVert = [{
    type: "builder", 
    image: "/builder.png",
    heading: "WixPro 72-Inch Responsive Website Builder- ",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",

    review: "Exceptional",
    rating: 9.8,
    badgeType: "Choice", 
  },
  {
    type: "builder", 
    image: "/builder.png",
    heading: "SiteCraft 68-Inch Ultimate Web Design Studio- ",
    description:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    highlight: 
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",

    review: "Excellent",
    rating: 9.5,
    badgeType: "Choice", 
  },
  {
    type: "builder",
    image: "/builder.png",
    heading: "WixPro 72-Inch Responsive Website Builder- ",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",

    review: "Exceptional",
    rating: 9.3,
    badgeType: null, 
  },
  {
    type: "cdk", 
    image: "/cdk.png",
     
    heading: "CDK Resposive Builder: ",
    description:
      "An extensive library of widgets and apps, and detailed step-by-step guides",
    review: "Very Good",
    rating: 9.1,
    badgeType: null,
  }];

  const dataHorz = [{
    image : "/square.png",
    off : 20,
    limited : true
  }]

  return (
    <>
      <div className="px-[5vh] lg:px-[18vw] ">
        {/* // heading  */}
        <div className="pt-6">
          <h1 className=" tracking-wide text-[#2C394B] text-3xl lg:text-[43px] font-light">
            Best Website builders in the US
          </h1>
        </div>

        {/* // sorting bar  */}
        <div className="flex pb-2 pt-3 pl-1 mt-2 font-light tracking-wide text-[13px] justify-between text-[#4B5765] border border-1 border-r-0 border-l-0 border-[#E0E4E7]">
          <div className="flex flex-col md:flex-col">
          <div className="flex items-center ">
            <IoIosCheckmarkCircleOutline className="text-[#4B5765] h-[18px] w-[18px] mr-1" />
            Last Updated &nbsp; <span className="text-[12px]"> - February 22, 2020</span>
          </div>
          <div className="flex mt-2 md:mt-0 md:ml-6">
            <GoInfo className="text-[#4B5765] h-[18px] w-[18px] mr-1"/>
            Advertising Disclosure
          </div>
          </div>
          <div className="flex items-center">
            Top Relevant
            <SlArrowDown  className="text-[#4B5765] h-[15px] w-[12px] ml-2 mr-2"/>
          </div>
        </div>

        {/* // tools options */}
        <div className="mb-2 ">
          <ul className="flex flex-wrap">
            <li>
              <button className="text-[#4B5765] mt-2 tracking-wide mr-6 md:mr-12 bg-[#FEFFFF] hover:bg-gray-200 rounded-lg shadow-sm text-[13px] px-4 py-2 font-light">
                Tools
              </button>
            </li>
            <li>
              <button className="text-[#4B5765] mt-2 tracking-wide mr-6 md:mr-12 bg-[#FEFFFF] hover:bg-gray-200 rounded-lg shadow-sm text-[13px] px-4 py-2 font-light">
                AWS Builder
              </button>
            </li>
            <li>
              <button className="text-[#4B5765] mt-2 tracking-wide mr-6 md:mr-12 bg-[#FEFFFF] hover:bg-gray-200 rounded-lg shadow-sm text-[13px] px-4 py-2 font-light">
                Start Build
              </button>
            </li>
            <li>
              <button className="text-[#4B5765] mt-2 tracking-wide mr-6 md:mr-12 bg-[#FEFFFF] hover:bg-gray-200 rounded-lg shadow-sm text-[13px] px-4 py-2 font-light">
                Build Supplies
              </button>
            </li>
            <li>
              <button className="text-[#4B5765] mt-2 tracking-wide mr-6 md:mr-12 bg-[#FEFFFF] hover:bg-gray-200 rounded-lg shadow-sm text-[13px] px-4 py-2 font-light">
                Tooling
              </button>
            </li>
            <li>
              <button className="text-[#4B5765] mt-2 tracking-wide mr-6 md:mr-12 bg-[#FEFFFF] hover:bg-gray-200 rounded-lg shadow-sm text-[13px] px-4 py-2 font-light">
                BlueHosting
              </button>
            </li>
          </ul>
        </div>

        {/* // breadcrumb  */}
        <Breadcrumb/>

        {/* // vertical content  */}
        <div className=" mt-[32px]"> 
          {dataVert.map((item, index)=>{
            return <CardRectangle key={`reccard-${item}`} data={item} index={index + 1}/>
          })}
        </div>

        {/* // horizontal content  */}
        <div className=" mt-6 mb-16" >
          <h3 className="tracking-wide text-[#2C394B] text-[27px] font-light mb-6 mt-10">Related deals you might like</h3>
          <div className="flex flex-col items-center w-full md:flex-row ">
          <CardSquare/>
          <CardSquare/>
          <CardSquare/>
          </div>
        </div>

        {/* // signup call to action  */}
        <div className="text-[#5D6874] flex justify-between my-5 mb-10">
          <h2 className="xl:w-[28vw] text-xl lg:text-3xl font-light tracking-wider">Signup and get exclusive special deals</h2>
          <button className="bg-[#1B89F5] rounded-[10px] text-white text-[13px] font-light tracking-wider h-fit lg:h-12 py-3 px-5">Sign up</button>
        </div>


      </div>
    </>
  );
}
