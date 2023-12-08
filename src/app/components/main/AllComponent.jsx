import React from "react";


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
    heading: "Trusted Rviews",
    des: " Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massami.",
    image: "/Images/suit.jpg",
  },
];


const AllComponent = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center">
        {data.map((value) => (
          <TT
            cardName={value.heading}
            imageUrl={value.image}
            color={"text-gray-600"}
          />
        ))}
      </div>
      <Third />
      <Extra color={"text-yellow-800"} />
      <div className="flex justify-center">
        {data.map((value) => (
          <Five
            cardName={value.heading}
            imageUrl={value.image}
            color={"text-blue-900"}
            price="100$"
          />
        ))}
      </div>
      <Sec />
      <First />
    </div>
  );
};

export default AllComponent;
