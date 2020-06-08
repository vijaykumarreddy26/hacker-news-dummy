import React from 'react';
import LinkButton from './index';
import {
    BrowserRouter as Router
  } from "react-router-dom";

export const ToStorybook = () => <Router><LinkButton to={"#"}>Previous</LinkButton></Router>;

ToStorybook.story = {
    name: 'link buttons',
};

  
export default {
    title: 'LinkButtons',
    parameters: {
      component: LinkButton,
    },
  };


