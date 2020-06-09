import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Count from '../../atoms/count';
import UpVote from '../../atoms/upvote';
import NewsDetail from '../../atoms/description';
import { NewListContext } from '../../../context_providers/newsContext';


const NewsItem = ({item, upVoteCount = 0}) => {
    const [hidePost, upVotePost]= useContext(NewListContext);

    return(<tr key={item.id}>
        <td > 
            <Count count={item.num_comments}></Count>
        </td>
        <td>
            <Count isHighlighted={upVoteCount > 0} count={item.points}></Count>
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
