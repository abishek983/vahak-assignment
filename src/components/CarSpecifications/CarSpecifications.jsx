import React from 'react';
import "./CarSpecifications.scss"
import {ReactSVG} from "react-svg"
import logo from '../../images/Group_15945.svg';

const CarSpecifications = () => {
    return (
        <div className="car-specificaiton-container">
            <ul className="car-specificaiton-container-ul">
                <li className="car-specificaiton-container-ul-li">
                    <img src={logo}/>
                    <h3>Specification 01</h3>
                </li>
                <li className="car-specificaiton-container-ul-li">
                    <img src={logo}/>
                    <h3>Specification 01</h3>
                </li>
                <li className="car-specificaiton-container-ul-li">
                    <img src={logo}/>
                    <h3>Specification 01</h3>
                </li>
            </ul>
            <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus facere molestiae enim aliquam rerum porro expedita, saepe totam, nihil maiores perferendis necessitatibus? Vero, molestias?
            </h5>
        </div>
    );
}

export default CarSpecifications;
