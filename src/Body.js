import React  from 'react';
import "./Body.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/slide1.jpg";
import img2 from "./images/slide2.jpg";
import img3 from "./images/slide3.jpg";
import img4 from "./images/slide4.jpg";

function Body() {

    return (
        <div id="body" className="body">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="img1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="fourth slide"
                    />
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Body
