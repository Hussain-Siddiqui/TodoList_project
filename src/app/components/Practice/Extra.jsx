"use client";
import React from "react";
const Extra = () => {
  1; // change current context username in object field
  const user = {
    username: "hussain",
    a: 33,
    numb: "0000",
    num: () => {
      console.log(`${user.username},welcome`);
    },
  };
  console.log(user.num());
  user.username = "ali";
  console.log(user.num());

//   2; // local and  global scoop
//   const roseWalker = () => {
//     // Globle scoop
//     const rose = "128";
//     console.log(rose);
//     // declare verable to use local scoop veriables
//     let top;

//     const moon = () => {
//       // Local scoop
//       const vee = [1, 2];
//       top = vee;
//       console.log(roseWalker);
//       console.log(moon);
//     };
//   };
//   roseWalker;

//   3; // Immediately Invoked Function Expressions
//   ((name) => {
//     console.log(`i m cal ,${name}`);
//   })("Loffer");


//Flap method infinity destroy tree arrays

// const arr =[99,88,[22,77,34],45,67,[12,23,[123,435,23,[123,255]]]]
// const loser=arr.flat(Infinity)
// console.log(loser)



// // Array method Array.from for seprate element array
// const arr =["12233454676"]
// const y=Array.from(arr[0])
// console.log(y)



// // Array sort method for sequence /respectively
// const droune=[39,345,24,4,6,8,21,3,21,1]
// const uoo=droune.sort((a,b)=>b-a)
// console.log(uoo[0])


// // Array from method 
// const val=["234567890"]
// const rrr=Array.from(val[0])
// console.log(rrr)


//   const array = [3, 6, 3, 4, 5, 6, 7, 8];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
//   }
//   4; // incriment single value using map  condition base
//   const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8];
//   const rose = 4;
//   const govt = arrayOne.map((value, index) =>
//     index === rose ? value + 1 : value
//   );
//   console.log(govt);

//   // another easy method
//   const arrayOneOK = [1, 2, 3, 4, 5, 6, 7, 8];
//   arrayOneOK[5] += 1;
//   console.log(arrayOneOK);

//   // Check element array me wo data hai ya nhi written true or false
//   const newArayList = [10, 20, 30, 40, 50];
//   const yooMahool = 20;
//   const exist = newArayList.includes(yooMahool);
//   console.log(exist);

//   // Practice async / await
//   const listDot = async () => {
//     try {
//       const walker = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const yolo = walker.config;
//       console.log(yolo);
//     } catch (error) {
//       console.error("Error data", error);
//     }
//   };
//   listDot();
//   //  promise  panding
//   const delta = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ a: 90, we: "" });
//       console.log("promise consumed");
//     }, 1000);
//   });
//   console.log(delta);

//   delta.then((user) => {
//     user;
//     console.log(user);
//   });


  // Promise resole   catch / then and error
  const relode = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ local: 12345, s: "string" });
      } else {
        reject({ Error: "something went wrong" });
      }
    }, 1000);
  });
  relode
    .then((user) => {
      console.log(user);
      return user.local;
    })
    .then((local) => {
      console.log(local);
    })
    .catch((error) => {
      console.log(error);
    });

  //Resolve promise with async await
  const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ userName: "hussain", age: 22, company: "infostack" });
      } else {
        reject({ Error: "there is a error" });
      }
    }, 1000);
  });
  const promiseFiveOne = async () => {
    try {
      const consume = await promiseFive;
      console.log(consume);
    } catch (error) {
      console.log("Error", error);
    }
  };
  promiseFiveOne();

  // fetch data ===>

  const loffer = async () => {
    try {
      const dot = await fetch("https://jsonplaceholder.typicode.com/albums");
      console.log(dot);
    } catch (error) {
      console.warn("Error is here", error);
    }
  };

 loffer()








  return (
    <div className="bg-teal-500 p-4">
      <h1>Hello World Extra </h1>
      <div></div>
    </div>
  );
};

export default Extra;

// export const foo = 99;
// export default function func() {
//   return "Func";
// }
// export default func
// export {foo,foo1,foo2,foo3
