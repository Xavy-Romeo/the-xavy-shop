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

import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import Page404 from './pages/Page404';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/Signup';
import SuccessOrder from './pages/SuccessOrder';
import Checkout from './pages/Checkout';
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
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/shop' component={Shop} />
              <Route exact path='/shop/item' component={ProductDetails} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/order-history' component={OrderHistory} />
              <Route exact path='/checkout' component={Checkout} />
              <Route component={Page404} />
            </Switch>
            <Footer />
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;