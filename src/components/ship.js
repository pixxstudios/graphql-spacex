import React from 'react';
import './ship.css';

const Ship = (props) => {
    return (
        <div className="ship">
            <div className="imageContainer">
                <img src={props.image} alt="" className="ship-img"/>
            </div>
            <h4>{props.name}</h4>
        </div>
    );
};

export default Ship;