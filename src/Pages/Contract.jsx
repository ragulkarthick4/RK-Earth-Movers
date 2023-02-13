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
     //e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
    // console.log(formDataObj)
    console.log(location)
     

    const db = firebase.firestore();
            const userRef = db.collection("Contracts").add({
            username: formDataObj.username,
            firstname:formDataObj.firstname,
            lastname:formDataObj.lastname,
            city:formDataObj.city,
            state:formDataObj.state,
            location:location,
            duration:duration,
            time:formDataObj.time



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
        <h1>Contract Form</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Row className="mb-3">
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
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
            //   onChange={onInput} 
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control name="state" type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zip" type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Row>
      <Col>
        <Form.Label>Location</Form.Label>
          <Form.Select value={location} onChange={(e)=> setLocation(e.target.value)}  aria-label="Default select example">
            <option value="Dhrapuram">Dharapuram</option>
            <option value="Karur">Karur</option>
            <option  value="Paramathi">Paramathi</option>
          </Form.Select>
        </Col>

        <Col>
        <Form.Label>Duration</Form.Label>
          <Form.Select value={duration} onChange={(e)=> setDuration(e.target.value)} aria-label="Default select example">
            <option value="Hours">Hour</option>
            <option value="Days">Days</option>
          </Form.Select>
        </Col>


        <Col>
        <Form.Label>Number of days or hours based on the choosen duration</Form.Label>
          <Form.Control name="time" type="text" placeholder="Days / Hours" required />
        </Col>
      </Row>
<br/>
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