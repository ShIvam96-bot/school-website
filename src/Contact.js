import React from 'react';
import "./Contact.css";
import NavBar from './NavBar';
import Header from "./Header";
import Footer from "./Footer";
import FooterBorder from './FooterBorder';
import Map from './Map';

function Contact() {
    return (
        <div id="contact" className="contact">
            <Header />
            <NavBar />
                <h1 className="contact__heading">Contact us</h1>
                <div className="contact__container">
                    <div className="contact__map">
                        <Map />
                    </div>
                    <div className="contact__info">
                        <h4 className="contact__school">School</h4>
                        <br/>
                        <h4 className="contact__address">Address</h4>
                        <p1>Dwarka Nagar, NishatPura,Bhopal, 462010</p1>
                        <p1>Phone:0755-2740018</p1>
                        <h4>Email:</h4>
                        <p1>rosemarydwarka@gmail.com</p1>
                    </div>
                </div>
                <Footer />
                <FooterBorder />
        </div>
    )
}

export default Contact
