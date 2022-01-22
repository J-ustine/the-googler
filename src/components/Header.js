import React from "react";
import { Link } from "react-router-dom";
import logo from "../femhack.png";
import "../style/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="brand">
        THE G<span className="letter">OO</span>GLER{" "}
        <img src={logo} alt="femhack" />
      </div>
      <Link
        to="login"
        className="nav-link"
        style={{
          textDecoration: "none",
          position: "relative",
          top: "-20px",
          color: "#54964f",
          padding: "6px 12px",
          margin: "10px",
          border: "1px solid #54964f",
          textAlign: "right",
        }}
      >
        Login
      </Link>
      <Link
        to="register"
        className="nav-link"
        style={{
          textDecoration: "none",
          position: "relative",
          top: "-20px",
          color: "#54964f",
          padding: "6px 12px",
          margin: "10px",
          border: "1px solid #54964f",
          textAlign: "right",
        }}
      >
        Register
      </Link>
    </div>
  );
}
