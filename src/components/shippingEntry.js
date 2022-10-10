import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import 'materialize-css';

const shippingEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', {state:{order: location.state.order}}
        )
    };

    return (
        <div class = "row">
            <h1>
                Enter Shipping Information
            </h1>
            <form class = "col s12"
                onSubmit={handleSubmit}>
                <div className="input-field col s6">
                    <label>Address 1:</label>
                    <input
                        type="text"
                        required
                        onChange={
                        (e) => {{location.state.order.address_1 = e.target.value;}}
                        }
                    />
                </div>

                <div className="input-field col s6">
                    <label>Address 2:</label>
                    <input
                        type="text"
                        required
                        onChange={
                            (e) => {{location.state.order.address_2 = e.target.value;}}
                        }
                    />
                </div>

                <div class = "input-field col s12">
                <label>City:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.city = e.target.value;}}}
                />
                </div>

                <div className="input-field col s12">
                <label>State:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.state = e.target.value;}}}
                />
                </div>

                <div className="input-field col s12">
                <label>Zip:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.zip = e.target.value;}}}
                />
                </div>

                <div className="input-field col s12">
                <label>Email:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.email = e.target.value;}}}

                />
                </div>

                <p>
                    <label>
                        <input type="checkbox"
                               onChange={(e) => {{location.state.order.expedited = true}}}

                        />
                        <span>Expedited</span>
                    </label>
                </p>



                <button className="btn waves-effect waves-light" type="View Order" name="action">View Order
                    <i className="material-icons right">send</i>
                </button>



            </form>
        </div>
    );
};

export default shippingEntry;

