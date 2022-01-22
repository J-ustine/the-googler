import React from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";

export default function Login() {
  return (
    <div className="login">
      <h3>Login</h3>
      <form action="">
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="login-input"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="login-input"
          placeholder="Enter your password"
        />
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Remember me</label>
        <Link
          to="userSpace"
          style={{ textDecoration: "none" }}
          className="button-login"
        >
          Submit
        </Link>
        <p className="forgot-password">
          Forgot <a href="/">password</a>
        </p>
      </form>
    </div>
  );
}
