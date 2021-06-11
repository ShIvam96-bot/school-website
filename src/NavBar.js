import React from 'react';
import "./NavBar.css";
import { Navbar , Container , Nav , NavDropdown} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


function NavBar() {
    return (
        <div id="home" className="navbar">
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="About Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#message">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Director's Message</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Management Desk</NavDropdown.Item>
                      <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Principal's Message</NavDropdown.Item>
                     </NavDropdown>
                     <NavDropdown title="Academics" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Admission Procedure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Facilities</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Our team</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="#body">Gallery</Nav.Link>
                     <Nav.Link href="#contact">Contact Us</Nav.Link>
                     <Nav.Link href="#login"><button className="button" type="submit" onClick="" >Login</button></Nav.Link>
                     </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
