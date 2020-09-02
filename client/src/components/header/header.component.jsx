import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/big-basket.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { clearCart } from "../../redux/cart/cart.actions";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden, clearCart, history }) => {
  const signOut = async (event) => {
    await event.preventDefault();

    const response = await axios.get("/authenticated");

    const user = response.data.user;

    try {
      const config = axios.create({
        baseURL: "/",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = {
        cart: user.cart,
        name: user.name,
        username: user.username,
        email: user.email,
        id: user._id,
      };

      const body = JSON.stringify(data);

      await config.post("/logout", body);

      await history.push("/signin");

      await clearCart();
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <Link className="option" to="/#" onClick={signOut}>
            Sign Out
          </Link>
        ) : (
          <div>
            <Link className="option" to="/signin">
              Sign In
            </Link>
            <Link className="option hidden" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
