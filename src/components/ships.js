import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SHIPS_QUERY } from '../queries';
import Loader from './loader';
import Ship from './ship';
import './ships.css';

const Ships = () => {
  const { loading, error, data } = useQuery(SHIPS_QUERY);

  if (loading) return <Loader />;
  if (error) return <h3>Something went wrong...</h3>;

  return (
    <div className="ships">
      {' '}
      {data.ships.map((ship) => (
        <Ship key={ship.id} {...ship} />
      ))}
    </div>
  );
};

export default Ships;
