// import React, { useState } from 'react';
// import {Button,Col,Form,InputGroup,Row,Container} from 'react-bootstrap';
// import firebase from '../firebase.js'
// import Styles from '../Styles/Cards.module.css'
// import img from '../Images/login.jpg'
// function Login() {
// const [validated, setValidated] = useState(false);
// const value = [];
//   const handleSubmit = (e) => {
//     const form = e.currentTarget;
//     e.preventDefault()
//     const formData = new FormData(e.target),
//           formDataObj = Object.fromEntries(formData.entries())
//     console.log(formDataObj)

//     const db = firebase.firestore();
//             const userRef = db.collection("Logins").add({
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
//     <div className={Styles.form}>
//     <Container>
//         <br/>
//         <h1>Login Form</h1>
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Col>
//         <Form.Group as={Col} md="8" controlId="validationCustom01">
//           <Form.Label>User name</Form.Label>
//           <Form.Control
//             required
//             name="username"
//             type="text"
//             placeholder="User name"
//           />
//           <h1>{value}</h1>
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         </Col>
        
//         {/* </Row>
//         <Row> */}
//         <Col>
//         <Form.Group as={Col} md="8" controlId="validationCustom02">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             required
//             name="password"
//             type="password"
//             // onChange={onInput} 
           
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         </Col>
// <br/><br/>
//         <Col>
//         <img
//         src={img}
//         alt="login"
//         width={300}
//         height={300}
//         />
        
//         </Col>
//         </Row><br/>
//       <Button  type="submit">Submit form</Button>
//     </Form>
//     <br/>
//     </Container>
//     </div>
//   );
// }

// export default Login



import React from 'react'
import {Link} from "react-router-dom";
import Style from '../Styles/Cards.module.css'
function Login() {
  return (
    <div className={Style.Auth_form_container}>
    <form className={Style.Auth_form}>
      <div className={Style.Auth_form_content}>
        <h3 className={Style.Auth_form_title}>Sign In</h3>
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
        </div><br/>
        <div className="d-grid gap-2 mt-3">       
          
          <Link to="/home"> 
          <button type="button"  className="btn btn-primary">Submit</button>
           </Link>
       
        </div>
        <p className="forgot-password text-right mt-2">
           <a href="#">Forgot password?</a>
        </p>
      </div>
    </form>
  </div>
  )
}

export default Login