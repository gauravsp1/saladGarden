import React from "react";
import PlanBoxList from "../PlanBoxList";
import PlanContainer from "./PlanContainer";

function Plan() {
  return (
    <div className="plan">
      <div className="planTitle">
        <h2>CHOOSE YOUR MEAL PLAN TODAY</h2>
      </div>
      <div className="planContainer">
        {PlanBoxList.map((item) => {
          return (
            <PlanContainer
              key={item.key}
              title={item.title}
              price={item.price}
              pricedesc={item.pricedesc}
              list={item.list}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Plan;
