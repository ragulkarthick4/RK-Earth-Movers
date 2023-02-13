import React, { useState } from 'react';
import {Button,Col,Form,InputGroup,Row,Container} from 'react-bootstrap';
import firebase from '../firebase.js'

function Contract() {
  const [validated, setValidated] = useState(false);
  const [location,setLocation] = useState('');
  const [duration,setDuration] = useState('');
const value = [];
  const handleSubmit = (e) => {
    const form = e.currentTarget;
     e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)
    console.log(location)
     

    const db = firebase.firestore();
            const userRef = db.collection("Collobrations").add({
            company_name: formDataObj.company_name,
            firstname:formDataObj.firstname,
            lastname:formDataObj.lastname,
            type:formDataObj.type,
            number:formDataObj.mob_number,
            location:location,



            }).then(alert('Your anticipated feedback is noted..!'));
    
    
    
            if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
   
    setValidated(true);
  };

  return (
    <Container>
        <br/>
        <h1>Joinus Form</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">

      <Col>
        <Form.Label>Location</Form.Label>
          <Form.Select value={location} onChange={(e)=> setLocation(e.target.value)}  aria-label="Default select example">
            <option value="Dhrapuram">Dharapuram</option>
            <option value="Karur">Karur</option>
            <option  value="Paramathi">Paramathi</option>
          </Form.Select>
        </Col>




        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            name="firstname"
            type="text"
            // onChange={onInput} 
            placeholder="First name"
            // defaultValue="Mari"
          />
          <h1>{value}</h1>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            name="lastname"
            type="text"
            // onChange={onInput} 
            placeholder="Last name"
            // defaultValue="Muthu"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Concern Name</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              name="company_name"
              placeholder="Username"
            //   onChange={onInput} 
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please type your Company name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>EarthMovers type</Form.Label>
          <Form.Control name="type" type="text" placeholder="Type" required />
          <Form.Control.Feedback type="invalid">
            Please provide a type.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Contact number</Form.Label>
          <Form.Control name="mob_number" type="telephone" placeholder="Mobile Number" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

      <br/>

      <Button type="submit">Submit form</Button>
    </Form>
    <br/>
    </Container>
  );
}

export default Contract