import React from "react";
import purchase from "./purchase"
import {useNavigate, useLocation} from "react-router-dom";
import 'materialize-css';

const paymentEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder', {state:{order: location.state.order}}
        )
    };

    const sum = parseInt(location.state.order.buyQuantity[0]) + parseInt(location.state.order.buyQuantity[1]) + parseInt(location.state.order.buyQuantity[2]) + parseInt(location.state.order.buyQuantity[3]) + parseInt(location.state.order.buyQuantity[4]); 
    const price = 1;

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
          <tr>
            <td>Cheesecake Danish</td>
            <td>{location.state.order.buyQuantity[0]}</td>
          </tr>
          <tr>
            <td>Strawberry Danish</td>
            <td>{location.state.order.buyQuantity[1]}</td>
          </tr>
          <tr>
            <td>Apple Danish</td>
            <td>{location.state.order.buyQuantity[2]}</td>
          </tr>
          <tr>
            <td>Cherry Danish</td>
            <td>{location.state.order.buyQuantity[3]}</td>
          </tr>
          <tr>
            <td>Peach Danish</td>
            <td>{location.state.order.buyQuantity[4]}</td>
          </tr>
        </tbody>
      </table>
          <h2>
            Total = $ {sum * price}
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
