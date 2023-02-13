// import React, { useState } from 'react';
// import {Button,Col,Form,InputGroup,Row,Container} from 'react-bootstrap';
// import firebase from '../firebase.js'

// function Contract() {
//   const [validated, setValidated] = useState(false);
// const value = [];
//   const handleSubmit = (e) => {
//     const form = e.currentTarget;
//     e.preventDefault()
//     const formData = new FormData(e.target),
//           formDataObj = Object.fromEntries(formData.entries())
//     console.log(formDataObj)



//     const db = firebase.firestore();
//             const userRef = db.collection("Contracts").add({
//             username: formDataObj.username,
//             firstname:formDataObj.firstname,
//             lastname:formDataObj.lastname,
//             }).then(alert('Your anticipated feedback is noted..!'));
    
    
    
//             if (form.checkValidity() === false) {
//       e.preventDefault();
//       e.stopPropagation();
//     }
   
//     setValidated(true);
//   };

//   return (
//     <Container>
//         <br/>
//         <h1>Registration Form</h1>
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             name="firstname"
//             type="text"
//             // onChange={onInput} 
//             placeholder="First name"
//             defaultValue="Mari"
//           />
//           <h1>{value}</h1>
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             name="lastname"
//             type="text"
//             // onChange={onInput} 
//             placeholder="Last name"
//             defaultValue="Muthu"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>E-Mail</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               name="username"
//               placeholder="email"
//             //   onChange={onInput} 
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="3" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Mobile Number</Form.Label>
//           <Form.Control type="text" placeholder="Number" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid mobile number.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Enter Password</Form.Label>
//           <Form.Control type="text" placeholder="Password" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid password.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control type="text" placeholder="Password" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid password.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//     <br/>
//     </Container>
//   );
// }

// export default Contract



import {React,useState} from 'react'
// import {Navigate,withRouter} from 'react-router-dom';

import Style from '../Styles/Cards.module.css'
function Registration({history}) {

  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className={Style.Auth_form_container}>
        <form className={Style.Auth_form}>
          <div className={Style.Auth_form_content}>
            <h3 className={Style.Auth_form_title}>Sign In</h3>
            <div className={Style.text_center}>
              Not registered yet?{" "}
              <span id={Style.toggle} className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
                      <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
               className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
                      <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
               className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <br/>
            <div className={Style.d_grid}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <br/>
            <p className={Style.text_center}>
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }


  return (
     <div className={Style.Auth_form_container}>
      <br/>
      <form className={Style.Auth_form}>
        <div className={Style.Auth_form_content}>
          <h3 className={Style.Auth_form_title}>Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span id={Style.toggle} className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
             className="form-control mt-1"
              placeholder="e.g Marimuthu"
            />
          </div>
            <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
             className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
                    <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
             className="form-control mt-1"
              placeholder="Password"
            />
          </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button"  className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
             <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
      <br/>
      <br/>
    </div>
  )
}

export default Registration