import { gql } from 'apollo-boost';

const SHIPS_QUERY = gql`
{
  ships(limit: 100) {
    image
    id
    name
  }
}`;

export default SHIPS_QUERY;