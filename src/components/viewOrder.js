import React from "react";
import {useNavigate, useLocation} from "react-router-dom";

const viewOrder = () => {

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate('/purchase/viewConfirmation')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>
                Order Details
            </h2>
            <ul>
            </ul>
            <h2>
                Payment Information
            </h2>
            <ul>
                <li>Card Holder Name: {location.state.order.card_holder_name}</li>
                <li>Credit Card Number: {location.state.order.credit_card_number}</li>
                <li>Expriation Date: {location.state.order.expir_date}</li>
                <li>CVV Code: {location.state.order.cvvCode}</li>
            </ul>
            <h2>
                Shipping Details
            </h2>
            <ul>
                <li>Address 1: {location.state.order.address_1}</li>
                <li>Address 2: {location.state.order.address_2}</li>
                <li>City: {location.state.order.city}</li>
                <li>State: {location.state.order.state}</li>
                <li>Zip Code: {location.state.order.zip}</li>
            </ul>
            <button className="button">Confirm</button>
            </form>
        </div>

    );

}

export default viewOrder;