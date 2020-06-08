import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/headerlabel';
import NewsItem from '../../molecules/newsitem';

const News = ({
    pageList = []
}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <Label>Comments</Label>
                    </th>
                    <th>
                        <Label>Vote Count</Label>
                    </th>
                    <th>
                        <Label>Up Vote</Label>
                    </th>
                    <th>
                        <Label>News Details</Label>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    pageList.map((item) => <NewsItem item={item}></NewsItem>)
                }
            </tbody>
        </table>
    )
}

News.propTypes = {
    pageList: PropTypes.array,
}

export default News;