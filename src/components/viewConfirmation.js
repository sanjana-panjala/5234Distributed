import React from "react";

let title = "Order Confirmation Page";

const viewConfirmation = () => {
  return (
    <div className = "Confirmation Page">
      <h1>
        {title}
      </h1>
      <h2>
        <i>
        Thank you for your order :0
        </i>
      </h2>
      <div>
        <p>
          Order Confirmation Number: 123456 
        </p>
      </div>
    </div>
  )
}
export default viewConfirmation;
