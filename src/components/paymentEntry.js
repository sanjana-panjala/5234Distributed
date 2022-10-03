import React, {useState} from "react";
import {useLocation}from 'react-router-dom'
import purchase from "./purchase";
import {useNavigate} from "react-router-dom";
import "./paymentEntry.css";

const PaymentEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder', {state:{order: location.state.order}}
        )
    };

    const sum = parseInt(location.state.order.buyQuantity[0]) + parseInt(location.state.order.buyQuantity[1]) + parseInt(location.state.order.buyQuantity[2]) + parseInt(location.state.order.buyQuantity[3]) + parseInt(location.state.order.buyQuantity[4]); 
    const price = 1;
    return (
        <div>
            <h1>
                Payment Entry Page
            </h1>

            <h2>
                Your Current Order:
                <br />
                <label>
                    Cheesecake Danish: {location.state.order.buyQuantity[0]}
                    <br />
                    Strawberry Danish: {location.state.order.buyQuantity[1]}
                    <br />
                    Apple Danish: {location.state.order.buyQuantity[2]}
                    <br />
                    Cherry Danish: {location.state.order.buyQuantity[3]}
                    <br />
                    Peach Danish: {location.state.order.buyQuantity[4]}
                    <br />
                    Total: $ {sum * price}
                </label>
            </h2>


            <form onSubmit={handleSubmit}>
                <label>Credit Card Number:</label>
                <input
                    type="text"
                    required
                    onChange={
                        (e) => {{location.state.order.credit_card_number = e.target.value;}}
                    }
                />
                <br />
                <label>Expiration Date:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.expir_date = e.target.value;}}}
                />
                <br />
                <label>CVV Code:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.cvvCode = e.target.value;}}}
                />
                <br />
                <label>Card Holder Name:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.card_holder_name = e.target.value;}}}
                />
                <br />
                
                <button className="button">Submit Payment</button>



            </form>
        </div>
    );


    
};


export default PaymentEntry;