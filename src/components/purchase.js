import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";
import axios from "axios";

const purchase = () => {
    const [order, setOrder] = useState({buyQuantity: [], credit_card_number: '',
        expir_date: '', cvvCode: '', card_holder_name: '', address_1: '', address_2: '', city: '',
        state: '', zip: '', expedited: false, email: '',});
    const [items, setItems] = useState([]);
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
    useEffect(() => {
        axios.get("http://localhost:7000/get_item", {
            params:[]
        }).then((data) => {
            console.log(data);
            setItems(data.data)
            order.buyQuantity = new Array(data.data.length).fill(0)
        });
    }, [])

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