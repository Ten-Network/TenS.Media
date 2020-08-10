import React from 'react';
import { withRouter } from 'react-router-dom'

import './categories.styles.scss';

const Categories = ({ title, imageUrl, size, history, match, linkUrl }) => (
    <div 
        className={`${size} categories`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <h2 className='subtitle'>SHOP NOW</h2>
        </div>
    </div>
);

export default withRouter(Categories);