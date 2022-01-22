import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form action="" className="form-create">
      <h3>New Note</h3>
      <label htmlFor="">Title</label>
      <input
        type="text"
        placeholder="Enter your Note title"
        className="createForm-input"
      />
      <label htmlFor="">Message</label>
      <textarea
        placeholder="Enter your note"
        className="createForm-input"
      ></textarea>
      <button className="createForm-button">Create</button>
    </form>
  );
}
