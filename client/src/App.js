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
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { StoreProvider } from './utils/GlobalState';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import Page404 from './pages/Page404';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/Signup';
import SuccessOrder from './pages/SuccessOrder';
import Account from './pages/Account';
import Policy from './pages/Policy';
import Mimic from './pages/Mimic';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './theme';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <StoreProvider>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop/:categoryId' component={Shop} />
                <Route exact path='/shop/' component={Shop} />
                <Route exact path='/product/:productId' component={ProductDetails} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/order-history' component={OrderHistory} />
                <Route exact path='/account' component={Account} />
                <Route exact path='/success' component={SuccessOrder} />
                <Route exact path='/policies' component={Policy} />
                <Route exact path='/mimic-page' component={Mimic} />
                <Route component={Page404} />
              </Switch>
              <Footer />
            </StoreProvider>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;