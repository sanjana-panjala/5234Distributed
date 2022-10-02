import React, {useState} from "react"
import {useNavigate} from "react-router-dom";

const purchase = () => {
    const [order, setOrder] = useState({buyQuantity: [0,0,0,0,0], credit_card_number: '',
        expir_date: '', cvvCode: '', card_holder_name: '', address_1: '', address_2: '', city: '',
        state: '', zip: '',});
    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', { state: {order: order} })
    };
    const navigate = useNavigate();
    console.log(order)
    return <div>
        <form onSubmit={handleSubmit}>
            <label>Cheesecake Danish</label>
            <input
                type="number"
                onChange={(e) => {order.buyQuantity[0] = e.target.value;}}
            />
            <br />
            <label>Strawberry Danish</label>
            <input
                type="number"
                onChange={(e) => {order.buyQuantity[1] = e.target.value;}}
            />
            <br />
            <label>Apple Danish</label>
            <input
                type="number"
                required
                onChange={(e) => {order.buyQuantity[2] = e.target.value;}}
            />
            <br />
            <label>Cherry Danish</label>
            <input
                type="number"
                required
                onChange={(e) => {order.buyQuantity[3] = e.target.value;}}
            />
            <br />
            <label>Peach Danish</label>
            <input
                type="number"
                required
                onChange={(e) => {order.buyQuantity[4] = e.target.value;}}
            />
            <button className="button">Pay</button>
        </form>
    </div>
}

export default purchase;