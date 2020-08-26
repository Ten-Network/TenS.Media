import React, { lazy, Suspense } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";

import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.scss";

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInPage = lazy(() => import("./pages/sign-in/sign-in.component"));
const SignUpPage = lazy(() => import("./pages/sign-up/sign-up.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ currentUser }) => (
  <div>
    <Header />
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
          />
          <Route
            exact
            path="/signup"
            render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
          />
          <Route
            exact
            path="/checkout"
            render={() =>
              currentUser ? <CheckoutPage /> : <Redirect to="/signin" />
            }
          />
        </Suspense>
      </ErrorBoundary>
    </Switch>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
