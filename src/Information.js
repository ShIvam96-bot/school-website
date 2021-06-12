import React, {useState} from 'react';
import "./Information.css";
import  img1 from "./images/topper1.png";
import img2 from "./images/topper2.gif";
import { Carousel, Card } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Information() {

    const [value, onChange] = useState(new Date());

    return (
        <div className="info__container">
            <div className="topper">
                <h1>Our Toppers</h1>
            <Carousel>
                <Carousel.Item>
                     <img
                        className="slides"
                         src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className="slides"
                    src={img2}
                    alt="Second slide"
                    />
                 </Carousel.Item>
            </Carousel>
            </div>
            <div className="otherInfo">
                <h1>Other Information</h1>
                <Card className="card">
                    <Card.Body>Important: Admission lines are open.</Card.Body>
                </Card>
            </div>
            <div className="calender">
                <h1>School Calendar</h1>
                <div className="calender">
                    <Calendar
                        onChange={onChange}
                        value={value}
                     />
    </div>
            </div>
        </div>
    )
}

export default Information
