import React from 'react';
import { screen } from '@testing-library/react';

import Chart from 'src/common/Chart';
import render from 'src/test/render';

jest.mock('src/common/Chart/data', () => {
  const FakeIcon = () => <div />;

  return {
    __esModule: true,
    data: [
      {
        category: 'Languages',
        items: {
          TypeScript: {
            value: 100,
            icon: FakeIcon,
            color: '#007acc',
          },
          HTML: {
            value: 100,
            icon: FakeIcon,
            color: '#e34f26',
          },
          CSS: {
            value: 85,
            icon: FakeIcon,
            color: '#264de4',
          },
          JavaScript: {
            value: 100,
            icon: FakeIcon,
            color: '#f7df1e',
            lightBgColor: '#000',
          },
        },
      },
      {
        category: 'Frameworks',
        items: {
          React: {
            value: 100,
            icon: FakeIcon,
            color: '#61DBFB',
            lightColor: '#4c768d',
          },
          'React Native': {
            value: 90,
            icon: FakeIcon,
            color: '#61DBFB',
            lightColor: '#4c768d',
          },
          Expo: {
            value: 65,
            icon: FakeIcon,
            color: 'text',
          },
          '*NestJS': {
            value: 50,
            icon: FakeIcon,
            color: '#E0234E',
          },
        },
      },
    ],
  };
});

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
