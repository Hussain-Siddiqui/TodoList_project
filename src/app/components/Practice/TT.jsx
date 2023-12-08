"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";

const TT = ({
  imageUrl = "/Images/black.jpg",
  cardName = "  Black Shirt",
  price = "$20",
  color = "text-red-300",
}) => {

  return (
    <div
      className="bg-cyan-400 rounded-lg shadow-lg w-[20%] p-4 flex flex-col
        justify-between items-center"
    >
      <img
        src={imageUrl}
        alt=" Image"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          {cardName}
        </h2>
        <p className={`${color} mt-2 text-center`}>{price}</p>
      </div>
    </div>
  );
};

export default TT;

// <div className="bg-white rounded-lg shadow-lg w-[20%]">
// <img
//   src="/Images/shrt1.jpg"
//   alt=" Image"
//   className="w-full h-64 object-cover rounded-t-lg"
// />
// <div className="p-4">
//   <h2 className="text-xl font-semibold text-gray-800 text-center">
//     Shirt
//   </h2>
//   <p className="text-gray-600 mt-2 text-center">$20</p>
// </div>
// </div>

// <div className="bg-white rounded-lg shadow-lg w-[20%]">
// <img
//   src="/Images/kids.jpg"
//   alt=" Image"
//   className="w-full h-64 object-cover rounded-t-lg"
// />
// <div className="p-4">
//   <h2 className="text-xl font-semibold text-gray-800 text-center">
//     Kids Shirt
//   </h2>
//   <p className="text-gray-600 mt-2 text-center">$20</p>
// </div>
// </div>

// <div className="bg-white rounded-lg shadow-lg w-[20%]">
// <img
//   src="/Images/suit.jpg"
//   alt=" Image"
//   className="w-full h-64 object-cover rounded-t-lg"
// />
// <div className="p-4">
//   <h2 className="text-xl font-semibold text-gray-800 text-center">
//     Suits
//   </h2>
//   <p className="text-gray-600 mt-2 text-center">$20</p>
// </div>
// </div>
