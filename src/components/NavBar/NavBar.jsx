import React from "react";

const NavBar = ({ navItems }) => {
  return (
    <header className="App-header">
      <img
        src='/images/logo.gif'
        style={{ width: "100px", height: "100px" }}
        className="App-logo"
        alt="logo"
      />
      {navItems.map((navItem, idx) =>
        <a key={idx} href={navItem.url}>{navItem.name}</a>
      )}
    </header>
  );
};

export default NavBar;