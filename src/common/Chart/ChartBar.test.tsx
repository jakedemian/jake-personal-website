import React from 'react';
import { screen } from '@testing-library/react';

import render from 'src/test/render';
import ChartBar from 'src/common/Chart/ChartBar';

describe('ChartBar', () => {
  it('renders', () => {
    render(<ChartBar height={{ base: 16, lg: 16 }} widthPercent={50} />);

    const chartBar = screen.getByTestId('chart-bar');
    expect(chartBar).toBeInTheDocument();
  });

  // TODO style testing (eg checking width and height) when I implement playwright
});
