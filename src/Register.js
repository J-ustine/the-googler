import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <h3>Register</h3>
      <form action="">
        <label htmlFor="">First name</label>
        <input type="text" className="register-input" />
        <label htmlFor="">Last name</label>
        <input type="text" className="register-input" />
        <label htmlFor="">Email address</label>
        <input type="email" className="register-input" />
        <label htmlFor="">Password</label>
        <input type="password" className="register-input" />
        <Link
          to="userSpace"
          style={{ textDecoration: "none" }}
          className="button-register"
        >
          Register
        </Link>
      </form>
    </div>
  );
}
