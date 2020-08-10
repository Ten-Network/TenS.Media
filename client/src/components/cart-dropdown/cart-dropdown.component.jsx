import React, { useRef } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    var user = useRef(null);
    async function fetchData() {
        const response = await axios.get('/authenticated');
        user.current = response.data.user;
    }
    fetchData();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                }
            </div>
            <CustomButton 
                onClick={() => {
                    dispatch(toggleCartHidden())
                    user.current ? (
                        history.push('/checkout')
                    ) : (
                        history.push('/signin')
                    )
                }
            }>
                go to checkout
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));