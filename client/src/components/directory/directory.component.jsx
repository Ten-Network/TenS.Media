import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Categories from '../categories/categories.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className='directory'>
        {
            sections.map(({ id, ...otherCollectionProps }) => (
                <Categories key={id} {...otherCollectionProps} />
            ))
        }
    </div>   
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);