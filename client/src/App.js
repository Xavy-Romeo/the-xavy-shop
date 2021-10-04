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
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import Page404 from './pages/Page404';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/Signup';
import SuccessOrder from './pages/SuccessOrder';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './theme';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  // link: authLink.concat(httpLink),
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
            </Switch>
            <Footer />
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;