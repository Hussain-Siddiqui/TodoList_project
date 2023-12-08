"use client";
import React from "react";
/* eslint-disable @next/next/no-img-element */

const Five = ({
  imageUrl = "/Images/black.jpg",
  cardName = "  Black Shirt",
  price = "$50",
  color = "text-gray-300",
  dec = "lorem 300",
}) => {
  return (
    <div
      className="bg-gray-100 rounded-lg shadow-lg w-[20%] p-4 flex flex-col
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
        <p className={`${color} mt-2 text-center`}>
          {price} {dec}
        </p>
      </div>
    </div>
  );
};

export default Five;
