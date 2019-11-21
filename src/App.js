import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';

const App = () => (
  <ApolloProvider client={client}>
    <div>Hello</div>
  </ApolloProvider>
)

export default App;