import React from 'react';
import "./Bodyfoot.css";
import logo from "./images/school.png";

function Bodyfoot() {
    return (
        <div id="message" className="bodyfoot">
            <img className="logo" src={logo} alt="logo" />
            <div className="content">
            <h1 className="heading" >School Message</h1>
            <p1 className="paragraph">We believe that every child is Unique and has a different learning approach.
                 We, at Rose Mary, observe the talents and qualities and focus on them for educating the child.
                 We facilitate the students to become spiritually deep rooted, morally upright & emotionally mature.
                 We equip students with a sound value system to live as good human beings & impart substantial
                 knowledge and skill to achieve excellence in diverse fields.
            </p1>
            </div>
        </div>
    )
}

export default Bodyfoot
