import React from 'react';
import "./PhotoGallery.css";
import img1 from "./images/photo1.jpg";
import img2 from "./images/photo2.jpg";
import img3 from "./images/photo3.jpg";
import img4 from "./images/photo4.jpg";
import img5 from "./images/photo5.jpg";
import img6 from "./images/photo6.jpg";
import img7 from "./images/photo7.jpg";
import img8 from "./images/photo8.jpg";
import img9 from "./images/photo9.jpg";
import img10 from "./images/photo10.jpg";
import img11 from "./images/photo11.jpg";
import img12 from "./images/photo12.jpg";
import img13 from "./images/photo13.jpg";
import img14 from "./images/photo14.jpg";
import img15 from "./images/photo15.jpg";
import img16 from "./images/photo16.jpg";
import img17 from "./images/photo17.jpg";
import img18 from "./images/photo18.jpg";
import NavBar from './NavBar';
import Header from "./Header";
import Footer from "./Footer";
import FooterBorder from './FooterBorder';

function PhotoGallery() {
    return (
        <div className="photoGallery">
            <Header />
            <NavBar />
        <div id="PhotoGallery" className="gallery__container">
            <div className="photos">
                <img className="photo" src={img1} alt="img1" />
                <img className="photo" src={img2} alt="img2" />
                <img className="photo" src={img3} alt="img3" />
                <img className="photo" src={img4} alt="img4" />
                <img className="photo" src={img5} alt="img5" />
                <img className="photo" src={img6} alt="img6" />
                <img className="photo" src={img7} alt="img7" />
                <img className="photo" src={img8} alt="img8" />
                <img className="photo" src={img9} alt="img9" />
                <img className="photo" src={img10} alt="img10" />
                <img className="photo" src={img11} alt="img11" />
                <img className="photo" src={img12} alt="img12" />
                <img className="photo" src={img13} alt="img13" />
                <img className="photo" src={img14} alt="img14" />
                <img className="photo" src={img15} alt="img15" />
                <img className="photo" src={img16} alt="img16" />
                <img className="photo" src={img17} alt="img17" />
                <img className="photo" src={img18} alt="img18" />
            </div>
        </div>
        <Footer />
        <FooterBorder />
        </div>
    )
}

export default PhotoGallery
