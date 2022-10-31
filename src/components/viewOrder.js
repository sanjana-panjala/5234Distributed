import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

const viewOrder = () => {

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
		const quantities = new Array();
		const ids = new Array()
		for (let i = 0; i < location.state.order.buyQuantity.length; i++) {
			if (location.state.order.buyQuantity[i] > 0) {
				quantities.push(location.state.order.buyQuantity[i])
				ids.push(i)
			}
		}
		axios
			.post('http://localhost:7000/update_quantity', {title: ids, quantity: quantities})
			.then(() => console.log('Quantity updated'))
			.catch(err => {
				console.error(err);
			})
		axios
			.post('http://localhost:7000/add_order', {order: location.state.order})
			.then(() => console.log('Order added'))
			.catch(err => {
				console.error(err);
			})
		sessionStorage.removeItem("cart")
        navigate('/purchase/viewConfirmation')
    };

	    return (
	        <div>
	        	<form onSubmit={handleSubmit}>
				<ul class="collection" align="left">
					<li class="collection-header"><h3>Order Details</h3></li>
                	{ location.state.order.buyQuantity[0] > 0 ? (
                    	<li class="collection-item">Cheesecake Danish: { location.state.order.buyQuantity[0]}</li>
                	) : ( null )}
                	{ location.state.order.buyQuantity[1] > 0 ? (
                	    <li class="collection-item">Strawberry Danish: { location.state.order.buyQuantity[1]}</li>
                	) : ( null )}
                	{ location.state.order.buyQuantity[2] > 0 ? (
                	    <li class="collection-item">Apple Danish: { location.state.order.buyQuantity[2]}</li>
                	) : ( null )}
                	{ location.state.order.buyQuantity[3] > 0 ? (
                	    <li class="collection-item">Cherry Danish: { location.state.order.buyQuantity[3]}</li>
                	) : ( null )}
                	{ location.state.order.buyQuantity[4] > 0 ? (
                	    <li class="collection-item">Peach Danish: { location.state.order.buyQuantity[4]}</li>
                	) : ( null )}
				</ul>
	            <ul class="collection" align="left">
					<li class="collection-header"><h3>Payment Information</h3></li>
	                <li class="collection-item">Card Holder Name: {location.state.order.card_holder_name}</li>
	                <li class="collection-item">Credit Card Number: {location.state.order.credit_card_number}</li>
	                <li class="collection-item">Expriation Date: {location.state.order.expir_date}</li>
	                <li class="collection-item">CVV Code: {location.state.order.cvvCode}</li>
				</ul>
	            <ul class="collection" align="left">
					<li class="collection-header"><h3>Shipping Information</h3></li>
	                <li class="collection-item">Address 1: {location.state.order.address_1}</li>
	                <li class="collection-item">Address 2: {location.state.order.address_2}</li>
	                <li class="collection-item">City: {location.state.order.city}</li>
	                <li class="collection-item">State: {location.state.order.state}</li>
	                <li class="collection-item">Zip Code: {location.state.order.zip}</li>
	            </ul>
				<button className="btn waves-effect waves-light" type="Submit" name="action">Confirm order</button>
	            </form>
	        </div>
	    );
}

export default viewOrder;