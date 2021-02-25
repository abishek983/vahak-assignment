import React from 'react';
import "./BidCard.scss"

const BidCard = () => {
    return (
        <div className="bid-card">
            <div className="bid-card-header">
                <h3 className="bid-card-header-name">
                    Place Your Load BID
                </h3>
                <div className="bid-card-header-blue-line">
                </div>
            </div>
            <h1 className="bid-card-amount">
                ₹ 2,50,000
            </h1>
            <div className="bid-card-button-container">
                <div className="bid-card-button-container-btn1">
                    Fixed Price
                </div>
                <div className="bid-card-button-container-btn2">
                    Rate Negotiable
                </div>
            </div>
            <hr/>
            <div className="bid-card-input-fields">
                <div className="relative">
                    <label htmlFor="phone">Enter Your Phone Number*</label>
                    <input type="text" className="bid-card-input-fields-input-1" value="+91 - 9000955555" id="phone"/>
                </div>
                <div className="relative">
                    <label htmlFor="name">Enter Your Name</label>
                    <input type="text" className="bid-card-input-fields-input-2" id="name"/>
                </div>
                <input type="text" className="bid-card-input-fields-input-3" placeholder="Enter remarks Optional"/>
            </div>
        </div>
    );
}

export default BidCard;
