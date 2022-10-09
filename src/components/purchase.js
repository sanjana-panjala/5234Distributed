import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const purchase = () => {
    const [order, setOrder] = useState({buyQuantity: [0,0,0,0,0], credit_card_number: '',
        expir_date: '', cvvCode: '', card_holder_name: '', address_1: '', address_2: '', city: '',
        state: '', zip: '', expedited: false, email: '',});
    const [added, setAdded] = useState(sessionStorage.getItem("cart") ? sessionStorage.getItem("cart").split(",").map(Number) : []);
    const handleClickAdd = (e) => {
        setAdded(added.concat([e.id]))
        console.log(added)
        console.log(added.includes(e.id))
        sessionStorage.setItem("cart", added.concat([e.id]).toString())
    };
    const handleClickRemove = (e) => {
        setAdded(added.filter(i => i !== e.id))
        console.log(added)
        sessionStorage.setItem("cart", added.filter(i => i !== e.id).toString())
    };
    const items = [{id: 1, img: "/Cheesecake-Danish.jpg", title: "Cheesecake Danish", price: "1", quantity: 0,
        description: "This delicious breakfast pastry features a classic flaky Danish pastry crust filled with cream cheese and topped with a drizzle of icing for savory-sweet taste in every bite."},
        {id: 2, img: "/Strawberry-Danish.jpg", title: "Strawberry Danish", price: "1", quantity: 0,
            description: "These Danish rolls are made with a croissant dough shaped into coils, filled with fresh strawberries, and drizzled with a hot glaze"},
        {id: 3, img: "/Apple-Danish.jpg", title: "Apple Danish", price: "1", quantity: 0, description: "A pastry that combines layers of buttery, flaky, yeast-leavened dough with apple filling drizzled with a powdered sugar icing."},
        {id: 4, img: "/Cherry-Danish.jpg", title: "Cherry Danish", price: "1", quantity: 0, description: "This fruity, fun breakfast danish has layers of cream cheese, cherry pie filling and  a crumble topping."},
        {id: 5, img: "/Peach-Danish.jpg", title: "Peach Danish", price: "1", quantity: 0, description: "A danish with ripe peach and milky custard on top. The blend of the sweetness of fruit and cream makes a rich, irresistible treat"}]
    const navigate = useNavigate();
    console.log(order)
    return <div className="container">
        <div className="box">
            {items.map(item=>{
                return(
                    <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title} height="300" style={{ objectFit: "cover" }}/>
                            {!added.includes(item.id) ?
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleClickAdd(item)}}><i className="material-icons">add</i></span>
                                : <span to="/" className="btn-floating halfway-fab waves-effect waves-light grey" onClick={()=>{handleClickRemove(item)}}><i className="material-icons">remove</i></span>}
                        </div>

                        <div className="card-content">
                            <span className="card-title">{item.title}</span>
                            <p>{item.description}</p>
                            <p><b>Price: ${item.price}</b></p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default purchase;