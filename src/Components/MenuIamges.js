import React from "react";
import { useHistory } from "react-router-dom";

function MenuImages({ source, name, yCordinate }) {
  const history = useHistory();

  const handleToMenu = () => {
    history.push({
      pathname: "/menu",
      state: {
        yCordinate: yCordinate,
      },
    });
  };
  return (
    <div className="MenuImages" onClick={handleToMenu}>
      <img src={source} alt="Salad" />
      <p className="overlay">
        <em>{name}</em>
      </p>
    </div>
  );
}

export default MenuImages;
