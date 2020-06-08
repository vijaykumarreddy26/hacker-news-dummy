import React from 'react';
import PropTypes from 'prop-types';
import Count from '../../atoms/count';
import UpVote from '../../atoms/upvote';
import NewsDetail from '../../atoms/description';

const NewsItem = ({item}) => {
    return(<tr key={item.id}>
        <td > 
            <Count  count={item.num_comments}></Count>
        </td>
        <td>
            <Count count={item.points}></Count>
        </td>
        <td>
            <UpVote></UpVote>
        </td>
        <td>
            <NewsDetail {...item}></NewsDetail>
        </td>
    </tr>)
}

NewsItem.propTypes ={
    item: PropTypes.object,
}

export default NewsItem
