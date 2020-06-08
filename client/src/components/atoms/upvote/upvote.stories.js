import React from 'react';
import UpVote from './index';

export const ToStorybook = () => <UpVote isUpVoted={false} onSelect={() => {alert("selected")}}/>;

ToStorybook.story = {
    name: 'UpVote',
};

  
export default {
    title: 'UpVote',
    parameters: {
      component: UpVote,
    },
  };


