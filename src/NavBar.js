import React from 'react';
import "./NavBar.css";
import { Navbar , Container , Nav , NavDropdown} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";


function NavBar() {
    return (
        <div id="nav" className="navbar">
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar__nav">
                    <Link to="/" className="nav__home" style={{textDecoration:"none"}} >Home</Link>
                    <NavDropdown className="nav__about" title="About Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#message">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Director's Message</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Management Desk</NavDropdown.Item>
                      <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Principal's Message</NavDropdown.Item>
                     </NavDropdown>
                     <NavDropdown className="nav__acad"style={{textDecoration:"none"}} title="Academics" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Admission Procedure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Facilities</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Our team</NavDropdown.Item>
                     </NavDropdown>
                     <Link to="/photo-gallery" className="nav__gallery" style={{textDecoration:"none"}}>Gallery</Link><br/>
                     <Link to="/contact" className="nav__contact" style={{textDecoration:"none"}}>Contact Us</Link><br/>
                     <Nav.Link href="#login"><button className="button" type="submit" onClick="" >Login</button></Nav.Link>
                     </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
