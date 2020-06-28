import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Ships from './components/ships';
import ShipInfo from './components/ship-info';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
});

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <Switch>
      <Route path="/ship/:id">
          <ShipInfo />
        </Route>
        <Route path="/">
          <Ships />
        </Route>
      </Switch>
    </ApolloProvider>
  </Router>
);

export default App;
