import React from 'react';
import { screen } from '@testing-library/react';

import App from 'src/App';
import render from 'src/test/render';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
