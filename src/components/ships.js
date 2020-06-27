import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import SHIPS_QUERY from '../queries/index';
import Loader from './loader';

const Ships = () => {
    const { loading, error, data } = useQuery(SHIPS_QUERY);

    if(loading) return <Loader />;
    if(error) return <h3>error</h3>;

    return data.ships.map(ship => (
            <h4 key={ship.id}>{ship.name}</h4>
        )
    )
};

export default Ships;