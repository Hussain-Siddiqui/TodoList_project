/* eslint-disable @next/next/no-img-element */
"use client";
import { React, useState } from "react";
import Sec from "./Sec";

const First = () => {
  const data = [
    {
      heading: "Free Shirts",
      des: " Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massami.",
      image: "/Images/black.jpg",
    },
    {
      heading: "Shirts",
      des: " Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
      image: "/Images/tshrt.jpg",
    },
    {
      heading: "kids Shirts",
      des: " Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massami.",
      image: "/Images/kids.jpg",
    },
    {
      heading: "Trusted Reviews",
      des: " Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massami.",
      image: "/Images/suit.jpg",
    },
  ];

  const [r, setR] = useState("pareant");
  const random = () => {
    return setR;
  };
  return (
    <div className=" mt-11 w-[80%] text-center bg-gray-500 rounded-3xl shadow-2xl  mx-auto p-4  gap-4 ">
      <div className="p-4  w-fit  text-black  font-normal  ">
        <p className="text-[40px] font-semibold ">Ecommerce</p>
      </div>
      i m {r}
      <Sec x={r} setX={random()} />
      <div className=" w-[100%] p-2  flex  h-[50%] justify-between ">
        {data.map((value, index) => (
          <div
            key={index}
            className="  w-[100%]  mx-auto shadow-lg flex flex-col items-center  rounded-lg p-2    bg-purple-300 "
          >
            <img
              src={value.image}
              alt="pic"
              className=" w-auto h-[60%] bg-cover"
            ></img>
            <p className="text-[18px] font-semibold ">{value.heading}</p>
            <p className="text-center w-fit ">{value.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default First;
// </div>
// <h1 className="p-4 bg-lime-600">Hello World 1</h1>

// <CounterContext.Provider value={foo}>
//   <Sec foo={foo} bgData="orange"></Sec>
//   <Sec foo={foo}></Sec>
//   <Sec foo={foo} bgData="brown" price={7890}></Sec>
// </CounterContext.Provider>
