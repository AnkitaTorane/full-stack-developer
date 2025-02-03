import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./../Images/hari om logo.png";
import arrow from "./../Images/scroll arrow.png";
import { Link } from 'react-router-dom';


const MainNavBar = () => {
  return (
    <div className="Container">
      <div className='Navbar-first-continer'>
        <Navbar expand="lg" className="">
          <Navbar.Brand href="#">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-bar"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav-link"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link className="nav-link">AboutUs</Nav.Link>
              <Nav.Link className="nav-link"> <Link to="/Services">Services</Link></Nav.Link>
              <Nav.Link className="nav-link">Careers</Nav.Link>
              <Nav.Link className="nav-link">Case Studies</Nav.Link>
              <Nav.Link className="nav-link">Testimonial</Nav.Link>
            </Nav>
            <div className="d-flex">
              <Button className="button">< Link to="/ContactUs">Contact Us</Link></Button>
            </div>
            <img src={arrow} className="img-arrow" />

          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default MainNavBar

