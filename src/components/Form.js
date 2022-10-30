import React, { useState } from "react";
import { reandomStr } from "../uitls";

export const Form = ({ addTask }) => {
  // console.log(name);

  // create a useState called form to put the value of form with the default string type as entry
  const [form, setForm] = useState({ type: "entry" });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    // creating a object name setFrom a
    setForm({
      // spreading the parameter from to not override the previous value
      ...form,
      // [name] to dynamically grab the value of the name variable
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    // to prevent the page from reloading
    e.preventDefault();
    // calling the randfon string function and addin g the ind tpo _id variable
    const _id = reandomStr();
    console.log(_id);
    // Passing the spread from and the id to addTask function as a parameter
    addTask({ ...form, _id });
    console.log(addTask);
  };

  console.log(form);
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="row mt-3 g-2">
        <div className="col-md-6">
          <input
            name="task"
            type="text"
            className="form-control"
            placeholder=""
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3">
          <input
            name="hr"
            type="number"
            className="form-control"
            min="1"
            placeholder=""
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3 d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            <i className="fa-solid fa-plus"></i>
            Add New Task
          </button>
        </div>
      </div>
    </form>
  );
};
