import React from 'react';
import { useHistory } from 'react-router-dom';
import './ship.css';

const Ship = (props) => {
    const history = useHistory();

    return (
        <div className="ship" role="button" tabIndex="-1" onClick={() => { history.push(`/ship/${props.id}`) }}>
            <div className="imageContainer">
                <img src={props.image} alt="" className="ship-img"/>
            </div>
            <h4>{props.name}</h4>
        </div>
    );
};

export default Ship;