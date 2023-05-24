import React from 'react';
import { screen } from '@testing-library/react';

import Home from 'src/Home';
import render from 'src/test/render';

describe('Home.tsx', () => {
  test('renders test text', () => {
    render(<Home />);
    const textElement = screen.getByText(/It is an app/i);
    expect(textElement).toBeInTheDocument();
  });
});
