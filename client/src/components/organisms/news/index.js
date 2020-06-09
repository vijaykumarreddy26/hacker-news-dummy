import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Label from '../../atoms/headerlabel';
import NewsItem from '../../molecules/newsitem';
import Styles from './index.module.css';

const News = ({
    pageList = [],
    hideVoteNewsList ={}
}) => {
    return (
        <table className={Styles.table}>
            <thead className={Styles.thead}>
                <tr>
                    <th>
                        <Label tabIndex="0">Comments</Label>
                    </th>
                    <th>
                        <Label tabIndex="0">Vote Count</Label>
                    </th>
                    <th>
                        <Label tabIndex="0" >Up Vote</Label>
                    </th>
                    <th>
                        <Label tabIndex="0">News Details</Label>
                    </th>
                </tr>
            </thead>
            <tbody className={Styles.tbody}>
                {
                    pageList.map((item) => (
                        !get(hideVoteNewsList[item.objectID], 'hide') &&
                            <NewsItem
                                upVoteCount={get(hideVoteNewsList[item.objectID], 'count') }
                                item={item}
                            ></NewsItem>
                    )
                    )
                }
            </tbody>
        </table>
    )
}

News.propTypes = {
    pageList: PropTypes.array,
}

export default News;