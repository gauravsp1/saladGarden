import React from "react"

function CustomerReview(props) {
    return <div className="customerReview">
    <p className="customerPara"><em>{props.content}</em></p>
    
    <p className="customerPara2"><img className="reviewImage" src={props.image} alt="Image"/><em>{props.name}</em></p>
    
    </div>
}

export default CustomerReview;

