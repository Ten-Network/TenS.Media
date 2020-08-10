import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import './carousel.styles.scss';

var images = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1477659803863-c1bf91b34c90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        msg: 'Halloween Sale'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1577083753695-e010191bacb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        msg: 'Diwali Sale'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        msg: 'Christamas Sale'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1587642303371-96accbf47448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        msg: 'Holi Sale'
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1590337797479-f208d2ae1965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        msg: 'Eid Sale'
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        msg: 'Back to School Sale'
    }
];

const Carousel = ({ history }) => {
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className='carousel'>
            {images.map(({ id, imageUrl, msg }) => (
                <div 
                    key={id} 
                    className='slider'
                    style={{
                        transform: `translateX(${x}%)`
                    }}
                >
                    <div 
                        className='img' 
                        style={{
                            backgroundImage: `url(${imageUrl})`
                        }} 
                    />
                    <div onClick={() => history.push('/shop')} className='msg'>
                        <h1 className='title'>{msg.toUpperCase()}</h1>
                        <h2 className='subtitle'>SHOP NOW</h2>
                    </div>
                </div>
            ))}
            <button 
                id='left' 
                onClick={goLeft}
            >
                &lt;
            </button>
            <button 
                id='right' 
                onClick={goRight}
            >
                &gt;
            </button>
        </div>
    )
};

export default withRouter(Carousel);