import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";

function MenuNavBar() {
  return (
    <>
      <div className="MenuNavBar">
        <img className="navImg" loading="lazy" src={Logo} />
        <ul className="navList">
          <li className="navItem">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/menu">MENU</NavLink>
          </li>
          <li className="navItem">
            <a href="#plan">SIGN UP</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuNavBar;
