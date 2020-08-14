import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

import { setCurrentUser } from './redux/user/user.actions';

import './App.scss';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInPage = lazy(() => import('./pages/sign-in/sign-in.component'));
const SignUpPage = lazy(() => import('./pages/sign-up/sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

class App extends React.Component {
  componentDidMount() {
    this.isLoggedIn();
  }

  isLoggedIn = async () => {
      const { setCurrentUser } = this.props;

      const response = await axios.get('/authenticated');

      const user = response.data.user;

      if (user) {
          setCurrentUser({
              id: user._id,
              cart: user.cart,
              name: user.name,
              email: user.email
          });
      }

      setCurrentUser(user);
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Homepage} />
              <Route path='/shop' component={ShopPage} /> 
              <Route path='/signin' component={SignInPage} /> 
              <Route path='/signup' component={SignUpPage} /> 
              <Route path='/checkout' component={CheckoutPage} /> 
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);