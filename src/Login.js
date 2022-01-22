import React from "react";

export default function Login() {
  return (
    <div className="Login">
      <h3>Login</h3>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="login" />
        <label htmlFor="">Password</label>
        <input type="text" />
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Remember me</label>
        <input type="button" value="Submit" />
        <p>
          Forgot <a href="/">password</a>
        </p>
      </form>
    </div>
  );
}
