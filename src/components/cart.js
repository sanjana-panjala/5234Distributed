import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from "react-router-dom";

const Cart = () => {
    const items = [{id: 1, img: "/Cheesecake-Danish.jpg", title: "Cheesecake Danish", price: "1", quantity: 0,
        description: "This delicious pastry features a classic flaky crust filled with cream cheese and drizzled with icing for savory-sweet taste in every bite."},
        {id: 2, img: "/Strawberry-Danish.jpg", title: "Strawberry Danish", price: "1", quantity: 0,
            description: "These Danish rolls are made with a croissant dough shaped into coils, filled with fresh strawberries, and drizzled with a hot glaze"},
        {id: 3, img: "/Apple-Danish.jpg", title: "Apple Danish", price: "1", quantity: 0, description: "A pastry that combines layers of buttery, flaky, yeast-leavened dough with apple filling drizzled with a powdered sugar icing."},
        {id: 4, img: "/Cherry-Danish.jpg", title: "Cherry Danish", price: "1", quantity: 0, description: "This fruity, fun breakfast danish has layers of cream cheese, cherry pie filling and  a crumble topping."},
        {id: 5, img: "/Peach-Danish.jpg", title: "Peach Danish", price: "1", quantity: 0, description: "A danish with ripe peach and milky custard on top. The blend of the sweetness of fruit and cream makes a rich, irresistible treat"}]
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