import React from "react";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
      <LazyLoadImage src={source} />
      <p className="overlay">
        <em>{name}</em>
      </p>
    </div>
  );
}

export default MenuImages;
