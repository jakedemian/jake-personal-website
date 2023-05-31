import { Box, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

const TRANSITION_TIME = 0.25;

type ChartBarProps = {
  widthPercent: number;
  height: ResponsiveValue<number | string>;
};

const ChartBar: React.FC<ChartBarProps> = ({ widthPercent, height }) => {
  return (
    <Box
      data-testid="chart-bar"
      transition={`width ${TRANSITION_TIME}s`}
      bgColor="primary.500"
      w={`${widthPercent}%`}
      h={height}
    />
  );
};

export default ChartBar;
