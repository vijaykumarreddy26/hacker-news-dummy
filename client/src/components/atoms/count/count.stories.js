import React from 'react';
import Count from './index';

export const ToStorybook = () => (<span>
        <Count isHighlighted={false} count={3}></Count>
        <Count isHighlighted={true} count={5}></Count>
    </span>
)


Count.story = {
    name: 'UpVote',
};

  
export default {
    title: 'UpVote',
    parameters: {
      component: Count,
    },
  };


