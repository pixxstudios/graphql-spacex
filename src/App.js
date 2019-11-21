import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Ships from './components/ships';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/'
});


const App = () => (
  <ApolloProvider client={client}>
    <Ships />
  </ApolloProvider>
)

export default App;