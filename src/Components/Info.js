import React from "react";

function Info(props) {
  return (
    <div className="Info">
      <img src={props.icon} alt="Icon" loading="lazy" />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Info;
