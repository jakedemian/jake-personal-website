import React from 'react';
import { screen } from '@testing-library/react';

import Chart from 'src/common/Chart';
import render from 'src/test/render';

jest.mock('src/common/Chart/data', () => ({
  __esModule: true,
  data: [
    {
      category: 'Languages',
      items: {
        TypeScript: 100,
        HTML: 100,
        CSS: 85,
        JavaScript: 100,
      },
    },
    {
      category: 'Frameworks',
      items: {
        React: 100,
        'React Native': 90,
        Expo: 65,
        NestJS: 50,
      },
    },
  ],
}));

describe('Chart', () => {
  beforeEach(() => {
    render(<Chart />);
  });

  test('renders the correct number of data rows', () => {
    const chartRows = screen.getAllByTestId('chart-row');
    expect(chartRows.length).toBe(8);
  });

  test('renders the correct number of blank rows', () => {
    const generatedBlankChartRows = screen.getAllByTestId('blank-row');
    expect(generatedBlankChartRows.length).toBe(1);
  });

  test('renders the correct number of group labels', () => {
    const groupLabelChartRows = screen.getAllByTestId('group-label');
    expect(groupLabelChartRows.length).toBe(2);
  });
});
