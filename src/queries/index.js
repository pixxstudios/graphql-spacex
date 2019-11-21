import { gql } from 'apollo-boost';

const SHIPS_QUERY = gql`
      {
        ships {
          image
          id
          weight_kg
          name
        }
    }
  `;

export default SHIPS_QUERY;