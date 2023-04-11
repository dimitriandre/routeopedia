import React from "react";
import logo from "./images/logo.svg";

function Header() {
  return (
    <div>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      Header
    </div>
  );
}

export default Header;
