import React from "react";
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <a href=".">
      {" "}
      <img src={logo} alt="logo" className="logo" />{" "}
    </a>
  );
};

export default Logo;
