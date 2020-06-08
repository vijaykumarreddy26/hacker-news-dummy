import React from 'react';
import Logo from './index';

export const ToStorybook = () => <Logo/>;

ToStorybook.story = {
    name: 'Brand Image',
};

  
export default {
    title: 'Brand Image',
    parameters: {
      component: Logo,
    },
  };


