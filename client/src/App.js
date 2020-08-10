import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contact.component';
import SignInPage from './pages/sign-in/sign-in.component'; 
import SignUpPage from './pages/sign-up/sign-up.component'; 
import CheckoutPage from './pages/checkout/checkout.component';

import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

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
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} /> 
          <Route path='/contact' component={ContactPage} /> 
          <Route path='/signin' component={SignInPage} /> 
          <Route path='/signup' component={SignUpPage} /> 
          <Route path='/checkout' component={CheckoutPage} /> 
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