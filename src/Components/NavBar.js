import React from "react";
import TagLine from "./TagLine";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";

function NavBar() {
  const handleScroll = (yCo) => {
    window.scrollTo({
      top: yCo,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div id="navBar" className="navBar ">
        <img className="navImg " src={Logo} />
        <ul className="navList">
          <li className="navItem">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/menu">MENU</NavLink>
          </li>
          <li className="navItem" onClick={() => handleScroll(1850)}>
            LOCATION
          </li>
          <li className="navItem">SIGN UP</li>
        </ul>
      </div>
      <TagLine />
    </>
  );
}

export default NavBar;
