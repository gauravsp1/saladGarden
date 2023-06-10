import React from "react";
import { NavLink } from "react-router-dom";

function MenuImages(props) {
  return (
    <div className="MenuImages">
      <NavLink to="/menu">
        <img src={props.source} />
      </NavLink>
      <p className="overlay">
        <em>{props.name}</em>
      </p>
    </div>
  );
}

export default MenuImages;
