import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Row}>
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          required
          type="text"
          placeholder="First Name"
        />
        <Form.Control.Feedback>Good!</Form.Control.Feedback>
      </Form.Group>        
      <Form.Group as={Row}>
        <Form.Label>Last Name</Form.Label>
        <Col>
          <Form.Control 
            required
            type="text"
            placeholder="Last Name"
          />
          <Form.Control.Feedback>Good!</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label>Email</Form.Label>
        <Col>
          <Form.Control 
            required
            type="text"
            placeholder="Email"
          />
          <Form.Control.Feedback>Good!</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label>
            Select any boxes which apply
          </Form.Label>
          <Col>
            <Form.Check
              type="checkbox"
              label="Product or service support"
              name="formHorizontalCheckbox"
              id="formHorizontalCheckbox1"
            />
            <Form.Check
              type="checkbox"
              label="Shipping issues"
              name="formHorizontalCheckbox"
              id="formHorizontalCheckbox2"
            />
            <Form.Check
              type="checkbox"
              label="Payment problems"
              name="formHorizontalCheckbox"
              id="formHorizontalCheckbox3"
            />
            <Form.Check
              type="checkbox"
              label="General feedback"
              name="formHorizontalCheckbox"
              id="formHorizontalCheckbox4"
            />
          </Col>
        </Form.Group>
      </fieldset>
      </Form.Group>
      <Button type="submit">Submit feedback</Button>
    </Form>
  );
};
  
export default Contact;