import React from "react";
import { useHistory } from "react-router-dom";

function PlanContainer(props) {
  const history = useHistory();

  function handleOrder(params) {
    history.push({
      pathname: "/order",
      state: {
        title: params.title,
        price: params.price,
      },
    });
  }

  return (
    <div className="planBox">
      <div className="boxTop">
        <span
          style={{
            fontSize: "18px",
            fontWeight: "600",
            padding: "0 0 5px 0 ",
          }}
        >
          {props.title}
        </span>
        <span> &#x20b9; {props.price}</span>
        <span>{props.pricedesc}</span>
      </div>
      <div className="boxMid">
        <ul class="boxMidList">
          <li>{props.list}</li>
          <li>24/7 delivery</li>
          <li>Premium menu</li>
          <li>Free delivery</li>
        </ul>
      </div>
      <div className="boxBottom">
        <button onClick={() => handleOrder(props)} type="submit">
          Order Now!
        </button>
      </div>
    </div>
  );
}

export default PlanContainer;
