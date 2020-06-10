import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from "react-router-dom";
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render( <MemoryRouter initialEntries={['/1']}>
       <Route
        path="/:pageNo?"
        component={App}
      />
    
  </MemoryRouter>);
  const linkElement = getByText(/Comments/i);
  expect(linkElement).toBeInTheDocument();
});
