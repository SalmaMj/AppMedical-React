import React, { Component, useState } from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';


export default function Etat(props){
   
  
    console.log(props)
        return (
            <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">


  <a href="/">
      <img src="https://www.mes-allocs.fr/guides/wp-content/uploads/2020/04/Le-guide-de-laide-social-en-Ephad-scaled-e1588706185119-1024x317.jpg" height="20"/>
  </a>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
      <Nav.Link href={"/view-patient/"+props.id}>info</Nav.Link>
    
      <Nav.Link href={"/consultat/"+props.id}>consultation</Nav.Link>
      <Nav.Link href={"/ordonnance/"+props.id}>Ordonnance</Nav.Link>
      <Nav.Link href="#pricing">Rendez-vous</Nav.Link>
      <Nav.Link href={"/nn/"+props.id}>fichiers</Nav.Link>
      <Nav.Link href={"/bilan/"+props.id}>Bilan</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
 
</Navbar>
                
            </div>
        );
    }

