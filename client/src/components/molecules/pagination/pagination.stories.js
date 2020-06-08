import React from 'react';
import Pagination from './index';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

export const ToStorybook = () => <Router>
    <Pagination currentPageNo={2} totalPages={5}>
    </Pagination>
</Router>;

ToStorybook.story = {
    name: 'Pagination',
};

  
export default {
    title: 'Pagination',
    parameters: {
      component: Pagination,
    },
  };


