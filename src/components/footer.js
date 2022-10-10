import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React from "react";

function Footer() {

  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/contact');
  };

  return (
    <Card bg="dark" text="light" style={ {width:'100%', position:'bottom'} }>
      <Card.Body>
        <Card.Text>
          <p>All ingredients are ethically sourced and prepared with the utmost care!</p>
          <p>If for any reason you are not satisfied with your purchase, contact us below.</p>
        </Card.Text>
        <Card.Footer>
          <Button 
            variant="outline-light"
            onClick={ handleClick }
          >
            Contact us
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );

}

export default Footer;