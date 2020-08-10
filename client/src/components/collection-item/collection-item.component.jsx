import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, history }) => {
    const { imageUrl, title, price } = item;
    var user = useRef(null);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/authenticated');
            user.current = response.data.user;
        }
        fetchData();
    }, []);
    return (
        <div className='collection-item'>
            <div 
                className='img'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{title}</span>
                <span className='price'>Rs {price}</span>
            </div>
            <CustomButton 
                inverted
                onClick={async () => user.current ? addItem(item) : history.push('/signin') }
            >
                add to cart
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(CollectionItem)
);