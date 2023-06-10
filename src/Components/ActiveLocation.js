import React from "react";
import person from "../images/person.png";
import star from "../images/star.png";
import instagram from "../images/insta.png";

function ActiveLocation(props) {
  return (
    <div className="activeLocationItem">
      <img className="city" src={props.source} />
      <h4>{props.title}</h4>
      <p>
        <img src={person} />
        {props.eater}
      </p>
      <p>
        <img src={star} />
        {props.star}
      </p>
      <p>
        <img src={instagram} />
        <a href="#">{props.tag}</a>
      </p>
    </div>
  );
}

export default ActiveLocation;
