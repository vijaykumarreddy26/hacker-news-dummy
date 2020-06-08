import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';
import { getDomainName, timeSince } from '../../../utils';

const NewsDetail = ({title, author, created_at, url}) => {
    const domainName = getDomainName(url);
    const time = timeSince(created_at);
    return(
        <div>
            <div className={Styles.title}>
                <p>{title} </p>

                <span className={Styles.link}>
                    {
                        (url) &&
                        (<a target="_blank" rel="noopener noreferrer" className={'a'} href={url}>{domainName}</a>)
                    }
                    &nbsp;  by <label>{author}</label>
                </span>
                <span className={Styles.subtext}> 
                    <label>
                        &nbsp;{time}
                    </label>
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