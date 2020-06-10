import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';


const UpVote = ({count, onUpVote}) => {
    return(
        <span tabIndex="0"
            className={Styles.upvote}
            onClick={onUpVote}>
                ▲ {(count > 0) ? count : ''}

        </span>
    )
}

UpVote.propTypes = {
    upVoteCount: PropTypes.bool,
    onSelect: PropTypes.func,
}

UpVote.defaultProps = {
    upVoteCount: false,
    onSelect: () => {},
}

export default UpVote;