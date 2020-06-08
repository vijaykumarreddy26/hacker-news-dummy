import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';


const Count = ({isHighlighted, count}) => {

    return(
        <span
            className={(isHighlighted)? Styles.selected : ''}
        >
            {count}
        </span>
    )
}

Count.propTypes = {
    isHighlighted: PropTypes.bool,
    count: PropTypes.number,
}

Count.defaultProps = {
    isHighlighted: false,
    count: false,
}

export default Count;