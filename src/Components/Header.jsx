import React from 'react'
import {useLocation}from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/logoFin.png'
import Styles from '../Styles/Header.module.css'
import {Button,Row,Col} from 'react-bootstrap'
import {BsWhatsapp} from 'react-icons/bs'
function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  // you can check a more conditions here
  if (pathname === "/") return null;
  else if (pathname === "/register") return null;
    return (
      <div>
        <div className={Styles.header}>&nbsp;
        <Row>
          <Col>
          <img
          src={Logo}
          alt="logo"
          width={100}
          />
          </Col>
          <Col>
          <h1>RK Earth Movers</h1>
          <p>We dig for the Growth</p>
          </Col>
          <Col>
          <BsWhatsapp/> +91 99123 76523 <br/>
          <BsWhatsapp/> +91 99123 76523<br/>
          <BsWhatsapp/> +91 99123 76523
          </Col>
        </Row>
        </div>
        <Navbar bg="dark" expand="md" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Balu Earth Movers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#aboutUs">About Us</Nav.Link>
                <Nav.Link href="/contract">Contract</Nav.Link>
                <Nav.Link href="/joinus">Join Us</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
                <div className={Styles.logReg}>
                <Nav.Link  href="/"><Button variant="warning">Admin Login</Button></Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              </Nav>
            </Navbar.Collapse>

           
          </Container>
        </Navbar>
        </div>
      );
}

export default Header