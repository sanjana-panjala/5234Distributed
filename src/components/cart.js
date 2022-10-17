import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Cart = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:7000/get_item", {
            params:[]
        }).then((data) => {
            console.log(data);
            setItems(data.data)
        });
    }, [])
    const [added, setAdded] = useState(sessionStorage.getItem("cart") ? sessionStorage.getItem("cart").split(",").map(Number) : []);
    const [order, setOrder] = useState({buyQuantity: [0,0,0,0,0], credit_card_number: '',
        expir_date: '', cvvCode: '', card_holder_name: '', address_1: '', address_2: '', city: '',
        state: '', zip: '', expedited: false, email: '',});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate('/purchase/shippingEntry', { state: {order: order} })
    };
    const options = [];
    for (let i = 1;i <= 100;i++) {
        options.push(<option value={i}>{i}</option>)
    }
    for (let i = 0;i < added.length; i++) {
        order.buyQuantity[added[i]-1] = 1;
    }
    const handleClickRemove = (e) => {
        setAdded(added.filter(i => i !== e.id))
        console.log(added)
        sessionStorage.setItem("cart", added.filter(i => i !== e.id).toString())
    };
    return (
      <div className="container">
          <div className="cart">
              <ul className="collection">
                  {items.filter(i => added.includes(i.id)).map(item=>{
                      return(

                          <li className="collection-item avatar" key={item.id}>
                              <div className="item-img">
                                  <img src={item.img} alt={item.img} className="" height="200px" width="200px" style={{ objectFit: "cover" }}/>
                              </div>

                              <div className="item-desc">
                                  <span className="title">{item.title}</span>
                                  <p>{item.description}</p>
                                  <p><b>Price: ${item.price}</b></p>
                                  <div className="row">
                                      Quantity:
                                      <Form.Select onChange={(e) => {order.buyQuantity[item.id - 1] = e.target.value;}}>
                                          {options}
                                      </Form.Select>
                                  </div>
                                  <button className="waves-effect waves-light btn pink remove" onClick={()=>{handleClickRemove(item)}}>Remove</button>
                              </div>

                          </li>

                      )
                  })}
              </ul>
              <button className="waves-effect waves-light btn blue submit" onClick={handleSubmit}>Checkout</button>
          </div>
      </div>
  );
};
  
export default Cart;