import React from 'react';
import { screen } from '@testing-library/react';

import AppLayout from 'src/AppLayout';
import render from 'src/test/render';

describe('Home.tsx', () => {
  it('Renders the Home page', () => {
    render(<AppLayout />);
    const themeSwitcher = screen.getByTestId('theme-switcher');
    expect(themeSwitcher).toBeInTheDocument();
  });
});
