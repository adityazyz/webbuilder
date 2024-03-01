import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";

function Breadcrumb() {
    const [pathElements, setPathElements] = useState();

  useEffect(() => {
    // breadcrum made for dynamic pathname display

    const longPath =
      "https://xyz.com/Home/Hosting-for-all/Hosting/Hosting6/Hosting5"; // dummy url

    const short = longPath.split(".com/")[1];
    const paths = short.split("/");
    let finalPathArray = [];

    // check for paths with "-" in name and fix it and add final versions to finalPathArray
    paths.map((item) => {
      if (item.includes("-")) {
        let p = "";
        let newArr = item.split("-");
        newArr.map((i) => {
          if (p === "") {
            p = i;
          } else {
            p = `${p} ${i}`;
          }
        });
        if(p!= "Home"){
          finalPathArray.push(p)
        }
        
      } else {
        if(item != "Home"){
        finalPathArray.push(item);
        }
      }
    });

    // if finalPathArray have some elements, set pathElements usestate variable equalt to it
    if(finalPathArray.length > 0){
        setPathElements(finalPathArray);
    }

  }, []);

  return <div className="flex text-[#727D87] text-[13px] font-light my-3">
    <div className="flex items-center">
    Home 
    </div>
    {pathElements?.map((item, index)=>{
        return <div key={`path-${index}`} className="flex items-center">
          <FaGreaterThan className="h-[11px] w-[11px] mx-3"/>
            {item}
        </div>
    })}
  </div>;
}

export default Breadcrumb;
