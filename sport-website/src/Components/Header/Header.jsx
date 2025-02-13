import React from "react";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";

const Header = () => {
  return (
    <header className="header">
      <div className="menu-logo">
        <MenuBtn />
        <h2 className="logo">
          <i>FITNESS</i>
        </h2>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
