import React from 'react';
import NewsDetail from './index';

export const ToStorybook = () => <NewsDetail
    title="Hacker News API"
    author="kevin"
    createdAt='2019-09-01T19:27:00.000Z'
    url="http://blog.ycombinator.com/hacker-news-api"
/>;

ToStorybook.story = {
    name: 'News List',
};

  
export default {
    title: 'News List',
    parameters: {
      component: NewsDetail,
    },
  };


