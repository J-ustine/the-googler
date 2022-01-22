import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <h3>Register</h3>
      <form action="">
        <label htmlFor="">First name</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your First name"
        />
        <label htmlFor="">Last name</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your Last name"
        />
        <label htmlFor="">Email address</label>
        <input
          type="email"
          className="register-input"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="register-input"
          placeholder="Enter a password"
        />
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
