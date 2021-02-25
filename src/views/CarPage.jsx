import React from 'react';
import CardContainer from "../components/CardContainer/CardContainer"
import CardHeader from "../components/CardHeader/CardHeader"
import CarSpecifications from "../components/CarSpecifications/CarSpecifications"
import BidCard from "../components/BidCard/BidCard"
import "./carPage.scss"

const CarPage = () => {
    return (
        <div className="car-page">
            <CardContainer>
                <CardHeader />
                <CarSpecifications />
            </CardContainer>
            <div className="spacer" style={{ marginTop: "20px" }}></div>
            <CardContainer>
                <BidCard />
            </CardContainer>
            <div className="button-container">
                <button className="submit">Bid Now</button>
            </div>
        </div>
    );
}

export default CarPage;
