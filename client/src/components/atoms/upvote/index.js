import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';


const UpVote = ({isUpVoted, onSelect}) => {
    if(isUpVoted){
        return null;
    }
    return(
        <span
            className={Styles.upvote}
            onClick={onSelect}>
                ▲
        </span>
    )
}

UpVote.propTypes = {
    isUpVoted: PropTypes.bool,
    onSelect: PropTypes.func,
}

UpVote.defaultProps = {
    isUpVoted: false,
    onSelect: () => {},
}

export default UpVote;