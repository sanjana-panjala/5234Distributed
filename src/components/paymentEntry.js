import React, {useEffect, useState} from "react";
import purchase from "./purchase"
import {useNavigate, useLocation} from "react-router-dom";
import 'materialize-css';
import axios from "axios";
import Form from "react-bootstrap/Form";

const paymentEntry = () => {
    const location = useLocation();
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

    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder', {state:{order: location.state.order}}
        )
    };

    let price = 0;
    items.forEach((item, i) => (price += item.price * location.state.order.buyQuantity[i]))

    let quans = location.state.order.buyQuantity.filter((item) => item > 0)

    return (
        <div class = "row">
            <h1>
                Enter Payment Information
            </h1>

          <table class="responsive-table">
        <thead>
          <tr align="left">
              <th >Item Name</th>
              <th>Item Quantity</th>
          </tr>
        </thead>

        <tbody>
            {items.filter((item, i) => location.state.order.buyQuantity[i] > 0).map((item, i)=>{
                return(
                    <tr>
                        <td>{item.title}</td>
                        <td>{quans[i]}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
          <h2>
            Total = ${price}
          </h2>
          
            <form class = "col s12"
                onSubmit={handleSubmit}>
                <div className="input-field col s6">
                    <label>Credit Card Number:</label>
                    <input
                        type="text"
                        required
                        onChange={
                        (e) => {{location.state.order.credit_card_number = e.target.value;}}
                        }
                    />
                </div>

                <div className="input-field col s6">
                    <label>Expiration Date:</label>
                    <input
                        type="text"
                        required
                        onChange={
                            (e) => {{location.state.order.expir_date = e.target.value;}}
                        }
                    />
                </div>

                <div class = "input-field col s12">
                <label>CVV Code:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.cvvCode = e.target.value;}}}
                />
                </div>

                <div className="input-field col s12">
                <label>Card Holder Name:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.card_holder_name = e.target.value;}}}
                />
                </div>

               <button class="btn waves-effect waves-light" type="submit" name="action">Submit Payment
                <i class="material-icons right">send</i>
              </button>

            </form>
        </div>
    )
};

export default paymentEntry;
