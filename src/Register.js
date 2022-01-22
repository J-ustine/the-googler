import React from "react";
import Form from "./Form";
import NotesList from "./NotesList";
import { Routes, Route, Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h3>Register</h3>
      <form action="">
        <label htmlFor="">First name</label>
        <input type="text" />
        <label htmlFor="">Last name</label>
        <input type="text" />
        <label htmlFor="">Email address</label>
        <input type="email" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
