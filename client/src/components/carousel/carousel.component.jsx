import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import './carousel.styles.scss';

var images = [
    {
        id: 1,
        imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/2008007_apples_460.jpg',
        linkUrl: 'shop/apples'
    },
    {
        id: 2,
        imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/2008270_protein-corner_460.jpg',
        linkUrl: 'shop/proteins'
    },
    {
        id: 3,
        imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/2008011_bb-home_460.jpg',
        linkUrl: 'shop/cleaning'
    },
    {
        id: 4,
        imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/2008015_tea-snacking-range_460.jpg',
        linkUrl: 'shop/snacks'
    },
    {
        id: 5,
        imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/2008012_kitchen-essentials_460.jpg',
        linkUrl: 'shop/kitchen'
    },
    {
        id: 6,
        imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/2008016_breakfast-range_460.jpg',
        linkUrl: 'shop/breakfast'
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
                {images.map(({ id, imageUrl, linkUrl }) => (
                    <div 
                        key={id} 
                        className='slider'
                        style={{
                            transform: `translateX(${x}%)`
                        }}
                        onClick={() => history.push(`${linkUrl}`)}
                    >
                        <div 
                            className='img' 
                            style={{
                                backgroundImage: `url(${imageUrl})`
                            }} 
                        />
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