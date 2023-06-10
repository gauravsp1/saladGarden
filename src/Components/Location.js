import React from "react";
import ActiveLocation from "./ActiveLocation";
import ActiveLocationList from "../ActiveLocationList";

function Location() {
  return (
    <>
      <div className="activeLocation">
        {ActiveLocationList.map((item) => {
          return (
            <ActiveLocation
              key={item.key}
              title={item.title}
              eater={item.eater}
              star={item.star}
              tag={item.tag}
              source={item.source}
            />
          );
        })}
      </div>
    </>
  );
}

export default Location;
