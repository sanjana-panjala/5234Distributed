import React, {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

const viewOrder = () => {

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
	const [items, setItems] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:7000/get_item", {
			params:[]
		}).then((data) => {
			console.log(data);
			setItems(data.data)
		});
	}, [])

	let quans = location.state.order.buyQuantity.filter((item) => item > 0)
	const handleSubmit = (e) => {
		axios
			.post('http://localhost:7000/add_order', {order: location.state.order})
			.then(function (response) {
				sessionStorage.setItem("confirmation", response.data);
			})
			.catch(err => {
				console.error(err);
			})
		sessionStorage.removeItem("cart")
		console.log(sessionStorage.getItem("confirmation"));
        navigate('/purchase/viewConfirmation')
    };

	    return (
	        <div>
	        	<form onSubmit={handleSubmit}>
				<ul class="collection" align="left">
					<li class="collection-header"><h3>Order Details</h3></li>
					{items.filter((item, i) => location.state.order.buyQuantity[i] > 0).map((item, i)=>{
						return(
						<li className="collection-item">{item.title}: {quans[i]}</li>
					)
					})}
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