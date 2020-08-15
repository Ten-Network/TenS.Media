import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

class CheckoutPage extends React.Component { 
    constructor() {
        super();

        this.state = {
            redirectTo: null
        }
    }

    componentDidMount() {
        this.redirect();
    }

    redirect = async () => {
        const response = await axios.get('/authenticated');

        if (!response.data.user) {
            this.setState({
                redirectTo: '/signin'
            });
        }
    }

    render() {
        const { cartItems, total } = this.props;

        if (this.state.redirectTo === '/signin') {
            return <Redirect to={this.state.redirectTo} />
        } else {
            return (
                <div className='checkout-page'>
                    <div className='checkout-header'>
                        <div className='header-block'>
                            <span>product</span>
                        </div>
                        <div className='header-block'>
                            <span>description</span>
                        </div>
                        <div className='header-block'>
                            <span>quantity</span>
                        </div>
                        <div className='header-block'>
                            <span>price</span>
                        </div>
                        <div className='header-block'>
                            <span>remove</span>
                        </div>
                    </div>
                    {
                        cartItems.map(cartItem => 
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )
                    }
                    <div className='total'>TOTAL: Rs {total}</div>
                    <StripeCheckoutButton price={total} />
                </div>
            );
        }
    }
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);