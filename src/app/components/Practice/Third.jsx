"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Third = () => {
  const [hope, setHope] = useState([]);
  const [hope1, setHope1] = useState([]);

  useEffect(() => {
    alert("i m use Effect");
  }, [hope1]);

  const random = async () => {
    try {
      const flope = await axios.get("https://api.example.com/data");
      setHope1(flope.random)
      console.log("data", flope)
    } catch (error) {
      console.warn(error, "errorr");
    }
  };

  const data = async () => {
    try {
      const drop = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setHope(drop.data);
      console.log("data", drop);
    } catch (error) {
      console.warn(error, "errrorrr");
    }
  };

  console.log(hope);
  console.log(hope1);

  return (
    <h1 className="bg-purple-900 p-4">
      <button onClick={data} className="bg-green-300 rounded-lg p-2">
        Log in
      </button>
      <button
        onClick={() => setHope1(hope1 + 1)}
        className="bg-green-300 rounded-lg p-2"
      >
        {random}
        Log in 2
      </button>
      Hello World 3
    </h1>
  );
};

export default Third;

// const Parent = () => {
//    const [data, setData] = useState("1sst show");
//    const [get, setGet] = useState();
//  const clickChild=()=>{
//  setData(get)
//  }
//   const refer=(a)=>{
//      setGet(a)
//  }
//    return (
//      <div className="h-96 w-full bg-green-500">
//        <p className="text-lg">Parent Data: {data} </p>
//        <button
//          className="bg-yellow-200 p-2 rounded-lg"
//          onClick={()=>clickChild()}
//        >
//          click parent Button
//        </button>
//       <Child refer={refer} />
//     </div>
//   );
// };

// export default Parent;
// import React from "react";

// const Child = ({ refer }) => {

//   refer("data chaild to Parent dat sending Hussain")

//   return (
//     <div className="bg-purple-400 rounded-lg text-lg p-3 w-fit">
//       <p>Child Component  </p>

//     </div>

//   );
// };
