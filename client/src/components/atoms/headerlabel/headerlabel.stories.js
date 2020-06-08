import React from 'react';
import HeaderLabel from './index';

export const ToStorybook = () => <div style={{background: "#000000"}}><HeaderLabel to={"#"}>Comments</HeaderLabel></div>;

ToStorybook.story = {
    name: 'Header Lables',
};

  
export default {
    title: 'Header Lables',
    parameters: {
      component: HeaderLabel,
    },
  };


