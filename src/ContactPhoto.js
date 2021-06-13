import React from 'react';
import "./ContactPhoto.css";
import img1 from "./images/icon1.png";
import img2 from "./images/icon2.png";
import {Link} from "react-router-dom";


function ContactPhoto() {
    return (
        <div className="conPhoto__container">
            <div className="conPhoto" >
                <img className="icon1" src={img1} alt="img1"   />
              <Link to="/contact"> <p>Contact us</p></Link>
            </div>
            <div className="conPhotoTwo">
           <img className="icon2" src={img2} alt="img2" />
           <Link to="/photo-gallery" >Photo-Gallery</Link>
           </div>
        </div>
    )
}

export default ContactPhoto
