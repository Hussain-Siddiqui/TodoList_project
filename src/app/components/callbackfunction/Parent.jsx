"use client";
import React, { useState } from "react";
import TodoList from "./TodoList";
import Child from "./Child";
const Parent = () => {
  const [count ,setCount]=useState("")
  const [addlist,setAddList]=useState([])

const itemEvent=(event)=>{
  setCount(event.target.value)
}
const listItems=()=>{
  setCount(addlist.push(count))
  setCount("")
}
const deleteItem=(id)=>{
const updateList=addlist.filter((_array,index)=>index!==id)
setAddList(updateList)
}
const editButton=(id)=>{
  setCount(addlist[id])
  deleteItem(id)
}

  return (
    <>
      <div className="h-[100vh] w-full bg-gray-300 flex justify-around items-center">
        <div className="h-[70%] w-[30%] bg-blue-400 rounded-lg shadow-lg flex flex-col">
          <br />
          <h1 className="p-2 text-white w-full text-4xl font-semibold text-center bg-teal-500">
            Todo List
          </h1>
          <br />
          <input
            onChange={itemEvent}
            value={count}
            className="p-3 w-full"
            type="text"
            placeholder="Add a text"
          />
          <button
            onClick={listItems}
            className="p-3 rounded-md bg-purple-900 hover:bg-green-500 text-xl w-fit"
          >
            Add Task
          </button>

          <ul>
            <br />
            {addlist.map((value, index) => (
              <TodoList
                key={index}
                name={value}
                onSelect={deleteItem}
                id={index}
                edit={editButton}
              />
            ))}
          </ul>
        </div>
        <Child />
      </div>
    </>
  );
};

export default Parent;
