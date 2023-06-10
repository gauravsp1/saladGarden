import React from "react"

function Info(props) {
    return <div className="Info">
        <img src={props.icon} alt="Icon" />
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
}

export default Info;