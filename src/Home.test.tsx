import React from 'react';
import { screen } from '@testing-library/react';

import Home from 'src/Home';
import render from 'src/test/render';

describe('Home.tsx', () => {
  it('Renders the Home page', () => {
    render(<Home />);
    const themeSwitcher = screen.getByTestId('theme-switcher');
    expect(themeSwitcher).toBeInTheDocument();
  });
});
