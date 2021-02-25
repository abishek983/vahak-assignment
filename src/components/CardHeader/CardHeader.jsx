import React from 'react';
import "./CardHeader.scss"

const CardHeader = () => {
    return (
        <div className="card-header">
            <div className="card-header-details">
                <h1 className="card-header-details-car-name">Honda City</h1>
                <h3 className="card-header-details-posted-date">Posted at 1 Nov, 9.30 AM</h3>
            </div>
        </div>
    );
}

export default CardHeader;
