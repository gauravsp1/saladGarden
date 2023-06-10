import React from "react"
import customerReviewList from "../customerReviewList";
import CustomerReview from "./CustomerReview";


function Customer(){
    return <div className="customerContainer">
    <div className="customer">
       <h2>WHAT OUR CUSTOMERS ARE SAYING</h2>
    </div>
    <div className="customerReviewContainer">
    {customerReviewList.map((item)=>{
      return  <CustomerReview
        key={item.key}
        content={item.content}
        image={item.image}
        name={item.name}
        />

    })}

    
    </div>
    </div>
}

export default Customer;