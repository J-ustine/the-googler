import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div className="brand">The Googler</div>
        <Link to="login" style={{ textDecoration: "none", color: "#54964f" }}>
          Login
        </Link>{" "}
        |{" "}
        <Link
          to="register"
          style={{ textDecoration: "none", color: "#54964f" }}
        >
          Register
        </Link>
      </nav>
    </div>
  );
}
