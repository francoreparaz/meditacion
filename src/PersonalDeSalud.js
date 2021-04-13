import React from "react";
import {Form,Button} from "react-bootstrap"
import "./PersonalDeSalud.css"
import { Checkmark } from 'react-checkmark'

export const PersonalDeSalud = () => {
  const handleSubmit=(e)=>{
   e.preventDefault()
   
  }
  return (
    <div>
      <h1>Personal De Salud</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <h1 className="registro"><strong>Registrate</strong></h1>
        <Form.Group controlId="formBasicEmail" >
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="password">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="button">
          Submit
        </Button>
      
      </Form>
    </div>
  );
};
export default PersonalDeSalud;
