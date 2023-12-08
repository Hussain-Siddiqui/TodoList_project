import React from "react";

const TodoList = ({ name, onSelect, id, edit }) => {
  return (
    <>
      <div className="bg-yellow-300  flex justify-between items-center">
        <ul className="flex items-center ">
          <li className="ml-8 font-bold">{name}</li>
        </ul>
        <button
          className="p-2 bg-blue-500 rounded-lg text-md"
          onClick={() => edit(id)}
        >
          Edit
        </button>
        <button
          className="p-2 text-lg rounded-md bg-red-400"
          onClick={() => {
            onSelect(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoList;
