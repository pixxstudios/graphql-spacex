import React from 'react';
import './ship.css';

const Ship = (props) => {
    return (
        <div className="ship">
            <img src={props.image} alt="" className="ship-img"/>
            <h4>{props.name}</h4>
        </div>
    );
};

export default Ship;