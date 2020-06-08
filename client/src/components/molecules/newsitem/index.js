import React from 'react';
import PropTypes from 'prop-types';
import Count from '../../atoms/count';
import UpVote from '../../atoms/upvote';
import NewsDetail from '../../atoms/description';

const NewsItem = (item) => {
    return(<tr>
        <td > 
            <Count></Count>
        </td>
        <td>
            <Count></Count>
        </td>
        <td>
            <UpVote></UpVote>
        </td>
        <td>
            <NewsDetail></NewsDetail>
        </td>
    </tr>)
}

NewsItem.propTypes ={
    item: PropTypes.object,
}

export default NewsItem
