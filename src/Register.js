import React from "react";

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
        <input type="button" value="Register" />
      </form>
    </div>
  );
}
