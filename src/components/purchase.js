import React, {useState} from "react";
import {Button, Card, CardGroup, Col, Row} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

const purchase = () => {
    const [order, setOrder] = useState({buyQuantity: [0,0,0,0,0], credit_card_number: '',
        expir_date: '', cvvCode: '', card_holder_name: '', address_1: '', address_2: '', city: '',
        state: '', zip: '', expedited: false, email: '',});
    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', { state: {order: order} })
    };
    const items = [{img: "/Cheesecake-Danish.jpg", title: "Cheesecake Danish",
        description: "This delicious breakfast pastry features a classic flaky Danish pastry crust filled with" +
            " cream cheese and topped with a drizzle of icing for savory-sweet taste in every bite."},
        {img: "/Strawberry-Danish.jpg", title: "Strawberry Danish",
            description: "These Danish rolls are made with a croissant dough shaped into coils," +
                " filled with fresh strawberries, and drizzled with a hot glaze"},
        {img: "/Apple-Danish.jpg", title: "Apple Danish", description: "A pastry that combines layers of buttery, flaky," +
                " yeast-leavened dough with apple filling drizzled with a powdered sugar icing."},
        {img: "/Cherry-Danish.jpg", title: "Cherry Danish", description: "This fruity, fun breakfast danish" +
                " has layers of cream cheese, cherry pie filling and  a crumble topping."},
        {img: "/Peach-Danish.jpg", title: "Peach Danish", description: "A danish with ripe peach and milky custard on top." +
                ", the blend of the sweetness of fruit and cream makes a rich, irresistible treat"}]
    const navigate = useNavigate();
    console.log(order)
    return <div>
        <Row xs={1} md={2} className="g-4">
            {items.map((item, index) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={item.img} height="400px" style={{ objectFit: "cover" }}/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                        <input
                            type="number"
                            onChange={(e) => {order.buyQuantity[index] = e.target.value;}}
                        />
                    </Card>
                    <br/>
                </Col>
            ))}
        </Row>
        <br/>
        <Button variant="primary" size="lg" type="submit" onClick={handleSubmit}>Checkout</Button>
        <br/>
    </div>
}

export default purchase;