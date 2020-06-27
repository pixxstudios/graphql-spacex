import React from 'react';

const Ship = (props) => {
    return (
        <div>
            <img src={props.image} alt="" className="ship-img"/>
            <h4>{props.name}</h4>
        </div>
    );
};

export default Ship;