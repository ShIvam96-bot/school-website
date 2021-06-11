import React from 'react';
import "./Footer.css";
import logo from "./images/school.png";
import {  Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PinDropIcon from '@material-ui/icons/PinDrop';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div id="contact" className="footer">
            <div className="logoInfo" > 
                <img className="footer__logo" src={logo} alt="footer__logo" />
                <p className="mail"> <EmailIcon /> rosemarydwarka@gmail.com</p>
                <p2 className="number"><PhoneAndroidIcon />0755-2740018</p2>
                <p3 className="address"><PinDropIcon /> Gali No. - 7,
                                        Dwarka Nagar Bhopal,
                                        Madhya Pradesh 
                </p3>
            </div>
            <div className="links">
                <p1 className="name">Important links</p1>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#contact">Contact Us </Nav.Link>
                <Nav.Link href="#body">Gallery</Nav.Link>
                <Nav.Link href="#home">Facilities</Nav.Link>
            </div>
            <div className="social__con">
                <p5 className="social">Follow Us</p5>
                <FacebookIcon />
            </div>
        </div>
    )
}

export default Footer
