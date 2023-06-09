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
        timeout: 7000,
      }
    );
  });

  it('renders as an h1 when isH1 prop is provided', async () => {
    render(<TypedText isH1>Test</TypedText>);

    const textElement = screen.getByTestId(/jake-demian/i);
    expect(textElement.tagName).toBe('H1');
  });

  it('renders as an p tag when isH1 prop is NOT provided', async () => {
    render(<TypedText>Test</TypedText>);

    const textElement = screen.getByTestId(/typed-text/i);
    expect(textElement.tagName).toBe('P');
  });
});
