import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';
import { getDomainName, timeSince } from '../../../utils';

const NewsDetail = ({title, author, created_at, url, onHide}) => {
    const domainName = getDomainName(url);
    const time = timeSince(created_at);
    return(
        <div>
            <div className={Styles.title}>
                <p tabIndex="0" className={Styles.inlineText}>{title} </p>

                <span className={Styles.link}>
                    {
                        (url) &&
                        (<a target="_blank" rel="noopener noreferrer" className={Styles.a} href={url}>{domainName}</a>)
                    }
                    &nbsp;  by <label>{author}</label>
                </span>
                <span className={Styles.subtext}> 
                    <label tabIndex="0">
                        &nbsp;{time}
                    </label>
                </span>
                <span className={Styles.subtext}> 
                    <button  type="button" className={Styles.linkButton} onClick={onHide}>
                        &nbsp; [hide]
                    </button>
                </span>
            </div>
        </div>
    )
}

NewsDetail.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.number,
    url: PropTypes.string,
}


export default NewsDetail;