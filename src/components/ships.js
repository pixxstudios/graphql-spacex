import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import SHIPS_QUERY from '../queries/index';

const Ships = () => {
    const { loading, error, data } = useQuery(SHIPS_QUERY);

    if(loading) return <h3>loading</h3>;
    if(error) return <h3>error</h3>;
    console.log(data);
    return data.ships.map(ship => (
            <h4 key={ship.id}>{ship.name}</h4>
        )
    )
};

export default Ships;