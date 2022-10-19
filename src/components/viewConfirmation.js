import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function viewConfirmation() {
    return (
        <>
            <Container className="d-flex vh-100">
                <Row className="m-auto align-self-center">
                    <Col>
                        <Card border="light" style={{ width: '30rem'}}>
                            <Card.Img variant="top" src="https://i.ibb.co/6bR7z1S/9-EF53-CD9-8-D30-4-BBB-B443-936-D92-B34-FD2.jpg" />
                            <Card.Header style={{fontSize:"30px"}} className="font-monospace">Order Confirmation</Card.Header>
                            <Card.Body>
                                <Card.Title style={{fontSize:"20px"}} className="fw-light">Confirmation Number: 123456</Card.Title>
                                <Card.Text>
                                    <div>
                                        <p className="font-monospace">
                                            Thank you for your order :0
                                        </p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
export default viewConfirmation;