import React, { lazy, Suspense, useEffect } from 'react';
import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.scss';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInPage = lazy(() => import('./pages/sign-in/sign-in.component'));
const SignUpPage = lazy(() => import('./pages/sign-up/sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const isLoggedIn = async () => {
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
    isLoggedIn();
  }, []);
  
  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} /> 
            <Route 
              exact 
              path='/signin' 
              render={() => 
                currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInPage />) 
              } 
            />
            <Route 
              exact 
              path='/signup' 
              render={() => 
                currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignUpPage />) 
              } 
            />
            <Route 
              exact 
              path='/checkout' 
              render={() => 
                currentUser ? (
                  <CheckoutPage />
                ) : (
                  <Redirect to='/signin' />) 
              } 
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);