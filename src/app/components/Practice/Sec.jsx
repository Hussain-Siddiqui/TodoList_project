"use client";
import React from "react";
// const Sec = ({foo,bgData="blue",image='',text='',price=99}) => {
const Sec = ({setX}) => {
  return (
    <div className="bg-yellow-200">
      <p>I m a child</p>
      <button
        className="p-4 rounded-md bg-green-300 text-lg"
        onClick={() => setX("Chaild passs value to Parent")}
      >

        Sec Button
      </button>
    </div>
  );
};

export default Sec;

// const Sec = ({foo,bgData="blue",image='',text='',price=99}) => {

//   const fish =useContext(CounterContext)
//     const random=23
//     return (
//       <div>
//         <h1 className="bg-teal-900 p-4">Hello World 2 {fish(45)} {foo(99)} {foo()}</h1>
//         <button onClick={fish} style={{backgroundColor:bgData}}>click {price}</button>
//       </div>
//     );
//   };
