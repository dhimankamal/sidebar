import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap'
import "./Navbar.css";
import logo from '../logo.svg';

const navbar = () => {
  return (
    <div className="sticky-nav">


      <Navbar  collapseOnSelect expand="lg" className="nav-bg navbar-fixed-top" variant="dark" >
        <div className="container">
          <Navbar.Brand href="/" className="text-uppercase  font-weight-bold">
            <img
              src={logo}
              width="60"
              height="50"

              alt="CodeExampler logo"

            />


 <style type="text/css">
    {`
    .btn-fl {
      
      color: white;
      margin-right: 10px;
    margin-bottom: 10px;
    font-size: large;
   
    }

 
    `}
  </style>

<span className="codelogo">
          Code Exampler</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-uppercase font-weight-bold">

            <a href="/" ><Button variant="fl">Home</Button> </a>

              <a href="/programming-language-to-learn"><Button variant="fl">Programming Languages</Button>
              </a>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

    </div>
  )
}
export default navbar;