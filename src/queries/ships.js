import { gql } from 'apollo-boost';

const SHIPS_QUERY = gql`
{
  ships(limit: 10) {
    image
    id
    attempted_landings
    model
    roles
    speed_kn
    successful_landings
    url
    weight_kg
    year_built
  }
}

  `;

export default SHIPS_QUERY;