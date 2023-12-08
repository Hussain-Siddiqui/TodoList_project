"use client";
import React from "react";
import { useFormik } from "formik";
import FormSchema from "./FormSchema";
const Child = () => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { handleBlur, handleSubmit, handleChange, errors, values, touched } =
    useFormik({
      initialValues: initialValue,
      validationSchema: FormSchema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });

  return (
    <div className="w-[20%]  h-[50%] rounded-lg p-6 shadow-md  bg-slate-400 ">
      <h2 className="text-2xl font-semibold mb-4">Register Foam</h2>
      <form onSubmit={handleSubmit} className="space-y-7">
        <input
          autoComplete="off"
          className="p-3 rounded-md"
          type="text"
          id="username"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter username"
          onBlur={handleBlur}
        />
        {touched.name && errors.name && (
          <p className="text-[13px] text-black">{errors.name}</p>
        )}
        <input
          className="p-3 rounded-md"
          type="text"
          id="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {touched.email && errors.email && (
          <p className="text=[13px] text-black ">{errors.email}</p>
        )}
        <input
          className="p-3 rounded-md"
          type="text"
          id="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <p className="text-[13px] text-black">{errors.password}</p>
        )}
        <input
          className="p-3 rounded-md"
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="off"
          placeholder="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="text-[13px] text-black">{errors.confirmPassword}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Child;
// const username = document.getElementById("username").value.trim();
// const password = document.getElementById("password").value.trim();
// const confirmPassword = document
//   .getElementById("confirmPassword")
//   .value.trim();
// const phone = document.getElementById("phone").value.trim();

// if (username == "") {
//   document.getElementById("username").innerHTML =
//     "*** Please fill the feilds";
//   return ;
