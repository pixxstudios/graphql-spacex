import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Loader from './loader';
import { GET_SHIP_QUERY } from '../queries';

const ShipInfo = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_SHIP_QUERY, {
        variables: { id }
    });

    if (loading) return <Loader />;
    if (error) return <h3>Something went wrong...</h3>;

    console.log(data);

    console.log('id ', id);

    return (
        <h3>Ship Info</h3>
    );
};

export default ShipInfo; 