import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Count from '../../atoms/count';
import UpVote from '../../atoms/upvote';
import NewsDetail from '../../atoms/description';
import { NewListContext } from '../../../context_providers/news_context';


const NewsItem = ({item, upVoteCount = 0}) => {
    const [hidePost, upVotePost]= useContext(NewListContext);
    const count  = item.points + upVoteCount;

    return(<tr key={item.id}>
        <td > 
            <Count count={item.num_comments}></Count>
        </td>
        <td>
            <Count isHighlighted={upVoteCount > 0} count={count}></Count>
        </td>
        <td>
            <UpVote count={upVoteCount} onUpVote={() => upVotePost(item.objectID)}></UpVote>
        </td>
        <td>
            <NewsDetail onHide={() => hidePost(item.objectID)} {...item}></NewsDetail>
        </td>
    </tr>)
}

NewsItem.propTypes ={
    item: PropTypes.object,
}

export default NewsItem
