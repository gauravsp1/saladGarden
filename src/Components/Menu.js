import React, { useEffect } from "react";
import MenuNavBar from "./MenuNavBar";
import MenuListInfo from "../MenuListInfo";
import MenuList from "./MenuList";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(props) {
  const yCordinate = props?.location?.state?.yCordinate;

  useEffect(() => {
    window.scrollTo(0, yCordinate);
  }, []);
  return (
    <>
      <MenuNavBar />
      <div className="box">
        {MenuListInfo.map((item) => {
          return (
            <MenuList
              key={item.key}
              index={item.key}
              source={item.source}
              name={item.name}
              ingredient1={item.ingredient1}
              ingredient2={item.ingredient2}
              ingredient3={item.ingredient3}
              ingredient4={item.ingredient4}
            />
          );
        })}
        <NavLink to="/">Back</NavLink>
      </div>
    </>
  );
}

export default Menu;
