import React from 'react';
import { screen } from '@testing-library/react';

import MenuButton from 'src/Menu/MenuButton';
import render from 'src/test/render';

describe('MenuButton.tsx', () => {
  it('renders a menu button', async () => {
    render(<MenuButton>Test Button</MenuButton>);
    const element = screen.getByText(/Test Button/i);
    expect(element).toBeInTheDocument();
  });

  // TODO move over to using something like puppeteer or playwright
  // It seems like JSDOM has limited css support...
});
