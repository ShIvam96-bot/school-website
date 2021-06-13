import React from 'react'
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import Body from "./Body.js";
import Bodyfoot from './Bodyfoot';
import Footer from './Footer';
import Information from './Information';
import FooterBorder from './FooterBorder';
import ContactPhoto from './ContactPhoto';

function Home() {
    return (
        <div>
            <Header />
            <NavBar />
            <Body />
            <Bodyfoot />
            <ContactPhoto />
            <Information />
            <Footer />
            <FooterBorder />
        </div>
    )
}

export default Home
