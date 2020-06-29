import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Loader from './loader';
import { GET_SHIP_QUERY } from '../queries';

import './ship-info.css';

const ShipInfo = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_SHIP_QUERY, {
        variables: { id }
    });

    if (loading) return <Loader />;
    if (error) return <h3>Something went wrong...</h3>;

    const { ship } = data;
    return (
        <div className="container">
            <heading>{ ship.name }</heading>
            <img src={ship.image} alt="" className="image" />
            <div className="info">Home port: {ship.home_port}</div>
            <a href={ship.url} className="info" target="blank">More info</a>
        </div>
    );
};

export default ShipInfo; 