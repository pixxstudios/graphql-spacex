import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import SHIPS_QUERY from '../queries/index';
import Loader from './loader';
import Ship from './ship';

const Ships = () => {
    const { loading, error, data } = useQuery(SHIPS_QUERY);

    if(loading) return <Loader />;
    if(error) return <h3>Something went wrong...</h3>;

    return data.ships.map(ship => (
            <Ship key={ship.id} {...ship} />
        )
    )
};

export default Ships;