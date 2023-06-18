import React from "react";
import { useHistory } from "react-router-dom";

function MenuList(props) {
  const history = useHistory();

  function handleOrder() {
    history.push("/plan");
  }
  return (
    <>
      <div className="menuListContainer">
        <h1>
          {props.index}. {props.name}
        </h1>
        <img src={props.source} loading="lazy" />
        <h4>Ingredients</h4>
        <ul>
          <li>{props.ingredient1}</li>
          <li>{props.ingredient2}</li>
          <li>{props.ingredient3}</li>
          <li>{props.ingredient4}</li>
        </ul>
        <div className="menuOrder">
          <button onClick={handleOrder} type="submit">
            Order Now!
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuList;
