import React from 'react';
import "./Header.css";
import img1 from "./images/school.png";

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={img1} alt="img1" />
            <div className="header__container">
                <h1 className="header__heading">Rose Mary Hr. Sec. School</h1>
                <p1 className="header__para">Dwarka Nagar Bhopal</p1>
            </div>
        </div>
    )
}

export default Header
