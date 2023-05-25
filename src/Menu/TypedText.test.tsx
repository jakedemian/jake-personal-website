import React from 'react';
import { screen, waitFor } from '@testing-library/react';

import TypedText from 'src/Menu/TypedText';
import render from 'src/test/render';

describe('TypedText.tsx', () => {
  it('renders full typed text after typing animation completes', async () => {
    render(<TypedText>Test</TypedText>);

    await waitFor(
      () => {
        const textElement = screen.getByText(/Test/i);
        expect(textElement).toHaveTextContent('Test');
      },
      {
        timeout: 7000, // wait up to 5 seconds
      }
    );
  });
});
