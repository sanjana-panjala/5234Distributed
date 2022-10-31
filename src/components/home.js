import React from "react";
import "./home.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup';


export default function App() {
    return (

        <div className="bg">
            <div className='d-flex justify-content-center align-items-center h-100'>

                <Container className="d-flex vh-100">
                    <Row className="m-auto align-self-center">
                        <Col>
                            <Card border="dark" style={{ width: '50rem'}}>
                                <Card.Body>
                                    <Card.Title style={{fontSize:"100px"}} className="font-monospace">distributed danishes</Card.Title>
                                    <Card.Text style = {{fontSize:"40px"}} className="font-monospace">
                                        <div>
                                            <p>
                                                welcome to our website :0
                                            </p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <CardGroup variant = "bottom">
                <Card>
                    <Card.Body>
                        <Card.Title>our businesss</Card.Title>
                        <Card.Text>
                            business strategy
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title>our mission</Card.Title>
                        <Card.Text>
                            mission and vision
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>message for our customers</Card.Title>
                        <Card.Text>
                            thank you
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}