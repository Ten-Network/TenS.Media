import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/big-basket.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { logOut } from '../../redux/user/user.actions';
import { clearCart } from '../../redux/cart/cart.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header  = ({ currentUser, hidden, logOut, clearCart, history }) => {
    const signOut = event => {
        event.preventDefault();

        logOut();
        clearCart();

        const timeFunction = () => {
            setTimeout(() => { 
                history.push('/signin')
            }, 1000);
        }
        timeFunction();
    }

    return (    
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/'>
                    Home
                </Link>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                {
                    currentUser ? 
                        <Link className='option' to='/signin' onClick={signOut}>
                            Sign Out
                        </Link> 
                    : (
                        <div>
                            <Link className='option' to='/signin'>
                                Sign In
                            </Link>
                            <Link className='option hidden' to='/signup'>
                                Sign Up
                            </Link>
                        </div>
                    )
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );   
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
}); 

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
    clearCart: () => dispatch(clearCart())
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Header)
);