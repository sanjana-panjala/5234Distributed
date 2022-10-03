import React from "react";
import {useNavigate, useLocation} from "react-router-dom";

const shippingEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', {state:{order: location.state.order}}
        )
    };

    return (
        <div>
            <h1>
                shipping entry page
            </h1>


            <form onSubmit={handleSubmit}>
                <label>Address 1:</label>
                <input
                    type="text"
                    required
                    onChange={
                        (e) => {{location.state.order.address_1 = e.target.value;}}
                    }
                />
                <br />
                <label>Address 2:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.address_2 = e.target.value;}}}
                />
                <br />
                <label>City:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.city = e.target.value;}}}
                />
                <br />
                <label>State:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.state = e.target.value;}}}
                />
                <br />
                <label>Zip:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {{location.state.order.zip = e.target.value;}}}
                />
                <br />
                <label>Confirm Email:</label>
                <input
                    type="text"
                    required

                />
                <br />
                <label>Expedited</label>
                <input
                    type="checkbox"
                    required
                    onChange={(e) => {{location.state.order.expedited = true}}}

                />
                <br />
                <button className="button">View Order</button>



            </form>
        </div>
    );
};

export default shippingEntry;

