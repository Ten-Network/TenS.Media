import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <div className='error-image-overlay'>
                    <img src='https://i.imgur.com/qIufhof.png' className='error-image' />
                    <div className='error-image-text'>Caution! This Page is Cordoned Off</div>
                    <div className='error-image-description'>
                        The earthquake was not good to the bike lane on your way to work. A large gap in the 
                        pavement (too big to be called a pothole) had swallowed three oblivious bikers whole. 
                        So the city had put up two pylons and yellow caution tape. Pretty frustrating for you 
                        given your propensity to do 360 jumps over the gap.
                    </div>
                </div>
            );
        }

        return this.props.children
    }
}

export default ErrorBoundary;