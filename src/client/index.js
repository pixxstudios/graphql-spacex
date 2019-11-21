import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/'
});

client
    .query({
      query: gql`
          {
            ships {
              image
              id
              weight_kg
            }
        }
      `
    })
    .then(result => console.log(result));

export default client;