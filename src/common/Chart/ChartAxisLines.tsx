import React from 'react';
import { Box, Grid } from '@chakra-ui/react';

import { useIsDark } from 'src/hooks/useIsDark';

const ChartAxisLines: React.FC = () => {
  const { isDark } = useIsDark();

  const commonBorderProps = {
    borderColor: isDark ? 'primary.800' : 'primary.100',
    borderStyle: 'solid',
  };

  return (
    <Grid
      templateColumns="25% 75%"
      w={'100%'}
      h="100%"
      position="absolute"
      top={0}
      left={0}
    >
      <Box h={5} pr={2} />
      <Grid zIndex={-1} flex={1} templateColumns="50% 50%">
        <Box
          {...commonBorderProps}
          borderLeftWidth={1}
          mb={-2}
          position="relative"
        />
        <Box
          {...commonBorderProps}
          borderLeftWidth={1}
          borderRightWidth={1}
          mb={-2}
          position="relative"
        />
      </Grid>
    </Grid>
  );
};

export default ChartAxisLines;
