import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

import Home from './pages/Home';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import Page404 from './pages/Page404';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/Signup';
import SuccessOrder from './pages/SuccessOrder';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      HELLO WORLD
      <h1>
        THE XAVY SHOP!!!
      </h1>
    </div>
    </ApolloProvider>
  );
}

export default App;